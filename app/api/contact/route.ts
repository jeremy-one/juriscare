import { NextResponse } from 'next/server';

const MAILER_HUB_URL = 'https://mail.bl-nk.io/wp-json/mailer-hub/v2/send';
const MAILER_HUB_TOKEN = 'XNaoM3JeWOv1dheSGoRXu3XKSahOkAMIzkSmDBJpKKWPSEwi';

interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  wantCallback?: boolean;
  service?: string;
  // Anti-spam
  website?: string; // Honeypot field
  _timestamp?: number; // Form load timestamp
}

const MIN_SUBMIT_TIME_MS = 3000; // 3 secondes minimum pour remplir le formulaire

export async function POST(request: Request) {
  try {
    const body: ContactPayload = await request.json();

    // Anti-spam: Honeypot check (si rempli = bot)
    if (body.website) {
      console.log('Spam detected: honeypot filled');
      // On retourne success pour ne pas alerter le bot
      return NextResponse.json({ success: true });
    }

    // Anti-spam: Timestamp check (si trop rapide = bot)
    if (body._timestamp) {
      const timeDiff = Date.now() - body._timestamp;
      if (timeDiff < MIN_SUBMIT_TIME_MS) {
        console.log('Spam detected: form submitted too fast', timeDiff, 'ms');
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

    // Construction du payload pour Mailer Hub (format: project + payload)
    const mailerPayload = {
      project: 'juriscare',
      payload: {
        nom: body.name,
        email: body.email,
        telephone: body.phone || '',
        sujet: body.subject,
        message: body.message || '(Demande de rappel)',
        rappel_souhaite: body.wantCallback ? 'Oui' : 'Non',
        ...(body.service && { service: body.service })
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
        'Authorization': `Bearer ${MAILER_HUB_TOKEN}`
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
        { success: false, error: data.message || 'Erreur lors de l\'envoi' },
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
