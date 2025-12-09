import { NextResponse } from 'next/server';

const MAILER_HUB_URL = 'https://mail.bl-nk.io/wp-json/mailer-hub/v2/send';
const MAILER_HUB_TOKEN = 'XNaoM3JeWOv1dheSGoRXu3XKSahOkAMIzkSmDBJpKKWPSEwi';

// Rate limiting store (en memoire)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// Configuration
const RATE_LIMIT_MAX = 10;
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MIN_SUBMIT_TIME_MS = 3000; // 3 secondes minimum

// Patterns suspects - detection XSS, SQL injection, etc.
const SUSPICIOUS_PATTERNS = [
  /<script[\s\S]*?>[\s\S]*?<\/script>/gi,
  /javascript:/gi,
  /on\w+\s*=/gi,
  /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|UNION|ALTER)\b.*\b(FROM|INTO|WHERE|TABLE)\b)/gi,
  /&#x?[0-9a-f]+;/gi,
];

interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  wantCallback?: boolean;
  service?: string;
  website?: string;
  _timestamp?: number;
}

function getClientIP(request: Request): string {
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) return forwardedFor.split(',')[0].trim();
  const realIP = request.headers.get('x-real-ip');
  if (realIP) return realIP;
  const cfConnectingIP = request.headers.get('cf-connecting-ip');
  if (cfConnectingIP) return cfConnectingIP;
  return 'unknown';
}

function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const record = rateLimitStore.get(ip);
  if (!record || now > record.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return { allowed: true, remaining: RATE_LIMIT_MAX - 1 };
  }
  if (record.count >= RATE_LIMIT_MAX) return { allowed: false, remaining: 0 };
  record.count++;
  return { allowed: true, remaining: RATE_LIMIT_MAX - record.count };
}

function containsSuspiciousContent(text: string): { suspicious: boolean; reason?: string } {
  for (const pattern of SUSPICIOUS_PATTERNS) {
    if (pattern.test(text)) return { suspicious: true, reason: 'Contenu suspect detecte' };
  }
  const urlCount = (text.match(/https?:\/\/[^\s]+/gi) || []).length;
  if (urlCount > 2) return { suspicious: true, reason: 'Trop d URLs dans le message' };
  return { suspicious: false };
}

function sanitizeInput(input: string): string {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .trim();
}

export async function POST(request: Request) {
  try {
    // Check User-Agent
    const userAgent = request.headers.get('user-agent');
    if (!userAgent || userAgent.trim() === '') {
      console.log('Bot detecte: User-Agent vide');
      return NextResponse.json({ success: true });
    }

    // Check Rate Limit
    const clientIP = getClientIP(request);
    const rateLimit = checkRateLimit(clientIP);
    if (!rateLimit.allowed) {
      console.log('Rate limit depasse pour IP: ' + clientIP);
      return NextResponse.json(
        { success: false, error: 'Trop de requetes. Veuillez reessayer dans une minute.' },
        { status: 429, headers: { 'Retry-After': '60' } }
      );
    }

    const body: ContactPayload = await request.json();

    // Honeypot check
    if (body.website) {
      console.log('Spam detecte: honeypot rempli');
      return NextResponse.json({ success: true });
    }

    // Timestamp check
    if (body._timestamp) {
      const timeDiff = Date.now() - body._timestamp;
      if (timeDiff < MIN_SUBMIT_TIME_MS) {
        console.log('Spam detecte: formulaire soumis trop vite ' + timeDiff + 'ms');
        return NextResponse.json({ success: true });
      }
    }

    // Validation des champs requis
    if (!body.name || !body.email || !body.subject) {
      return NextResponse.json(
        { success: false, error: 'Champs requis manquants (name, email, subject)' },
        { status: 400 }
      );
    }

    // Check suspicious content
    const fieldsToCheck = [
      { name: 'name', value: body.name },
      { name: 'subject', value: body.subject },
      { name: 'message', value: body.message || '' }
    ];
    for (const field of fieldsToCheck) {
      const check = containsSuspiciousContent(field.value);
      if (check.suspicious) {
        console.log('Contenu suspect dans ' + field.name + ': ' + check.reason);
        return NextResponse.json(
          { success: false, error: 'Votre message contient du contenu non autorise.' },
          { status: 400 }
        );
      }
    }

    // Sanitize inputs
    const safeName = sanitizeInput(body.name);
    const safeEmail = sanitizeInput(body.email);
    const safePhone = body.phone ? sanitizeInput(body.phone) : '';
    const safeSubject = sanitizeInput(body.subject);
    const safeMessage = sanitizeInput(body.message || '(Demande de rappel)');

    // Construction du payload pour Mailer Hub
    const mailerPayload = {
      project: 'juriscare',
      payload: {
        nom: safeName,
        email: safeEmail,
        telephone: safePhone,
        sujet: safeSubject,
        message: safeMessage,
        rappel_souhaite: body.wantCallback ? 'Oui' : 'Non',
        ...(body.service && { service: sanitizeInput(body.service) })
      }
    };

    // Envoi au Mailer Hub
    console.log('=== MAILER HUB REQUEST ===');
    console.log('URL:', MAILER_HUB_URL);
    console.log('Payload:', JSON.stringify(mailerPayload, null, 2));

    const response = await fetch(MAILER_HUB_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + MAILER_HUB_TOKEN
      },
      body: JSON.stringify(mailerPayload)
    });

    const data = await response.json();

    console.log('=== MAILER HUB RESPONSE ===');
    console.log('Status:', response.status);
    console.log('Data:', JSON.stringify(data, null, 2));

    if (!response.ok) {
      console.error('Mailer Hub error:', data);
      return NextResponse.json(
        { success: false, error: data.message || 'Erreur lors de l envoi' },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true, data });

  } catch (error) {
    console.error('API contact error:', error);
    return NextResponse.json(
      { success: false, error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}
