'use client';

import React, { useState } from 'react';
import HeroModern from '@/components/sections/HeroModern';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'mediation',
    message: '',
    wantCallback: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [formTimestamp, setFormTimestamp] = useState(0);
  const [honeypot, setHoneypot] = useState('');

  // Set timestamp on mount for anti-spam
  React.useEffect(() => {
    setFormTimestamp(Date.now());
  }, []);

  const subjectLabels: Record<string, string> = {
    mediation: 'Démarrer une médiation',
    mediateur: 'Devenir médiateur',
    formation: 'Formation',
    autre: 'Autre demande'
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: `[Contact] ${subjectLabels[formData.subject] || formData.subject}`,
          message: formData.message,
          wantCallback: formData.wantCallback,
          website: honeypot,
          _timestamp: formTimestamp
        })
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Erreur lors de l'envoi");
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'mediation',
        message: '',
        wantCallback: false
      });
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Une erreur est survenue');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  return (
    <>
      <HeroModern
        title="Contactez-nous"
        subtitle="Une question ? Un projet de médiation ? Nous sommes là pour vous accompagner."
        image="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2074&auto=format&fit=crop"
      />

      <Section id="contact" background="none" className="md:!pt-0 md:!pb-32 md:-mt-24 relative z-10">
        <div className="max-w-6xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulaire */}
            <div className="bg-beige-light rounded-2xl p-8">
              {status === 'success' ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">✓</div>
                  <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-4">Message envoyé !</h2>
                  <p className="text-gray-600 mb-6">Merci pour votre message. Nous vous recontacterons rapidement.</p>
                  <Button variant="primary" onClick={() => setStatus('idle')}>
                    Envoyer un autre message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {status === 'error' && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                      {errorMessage}
                    </div>
                  )}

                  {/* Honeypot anti-spam field - hidden from users */}
                  <div className="absolute -left-[9999px]" aria-hidden="true">
                    <input
                      type="text"
                      name="website"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        disabled={isLoading}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition disabled:opacity-50"
                        placeholder="Jean Dupont"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        disabled={isLoading}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition disabled:opacity-50"
                        placeholder="jean.dupont@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Téléphone {formData.wantCallback && '*'}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required={formData.wantCallback}
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={isLoading}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition disabled:opacity-50"
                        placeholder="06 12 34 56 78"
                      />
                    </div>

                    <div className="flex items-center h-[50px] bg-white border border-white rounded-lg px-4">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="wantCallback"
                          checked={formData.wantCallback}
                          onChange={handleChange}
                          disabled={isLoading}
                          className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-2 focus:ring-primary cursor-pointer"
                        />
                        <span className="text-sm font-semibold text-gray-700">
                          Je souhaite être rappelé(e)
                        </span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Objet de votre demande *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      disabled={isLoading}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition disabled:opacity-50"
                    >
                      <option value="mediation">Démarrer une médiation</option>
                      <option value="mediateur">Devenir médiateur</option>
                      <option value="formation">Formation</option>
                      <option value="autre">Autre demande</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message {!formData.wantCallback && '*'}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required={!formData.wantCallback}
                      value={formData.message}
                      onChange={handleChange}
                      disabled={isLoading}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none disabled:opacity-50"
                      placeholder={formData.wantCallback ? "Message optionnel..." : "Décrivez-nous votre situation ou votre demande..."}
                    />
                  </div>

                  <Button variant="primary" size="lg" className="w-full" disabled={isLoading}>
                    {isLoading ? 'Envoi en cours...' : 'Envoyer votre message'}
                  </Button>
                </form>
              )}
            </div>

            {/* Informations de contact */}
            <div className="space-y-6">
              <div className="bg-beige-light rounded-2xl p-6">
                <div className="flex items-start">
                  <div className="text-3xl mr-4">📧</div>
                  <div>
                    <h2 className="font-serif font-semibold text-lg text-gray-900 mb-2">Email</h2>
                    <a href="mailto:contact@juriscare.fr" className="text-primary hover:underline">
                      contact@juriscare.fr
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-primary text-white rounded-2xl p-6">
                <h2 className="font-serif font-semibold text-xl mb-3">Rappel téléphonique</h2>
                <p className="mb-0 opacity-90">
                  Cochez la case correspondante dans le formulaire et nous vous contacterons rapidement. Le message devient alors facultatif.
                </p>
              </div>

              <div className="bg-beige-light rounded-2xl p-6">
                <h2 className="font-serif font-semibold text-lg text-gray-900 mb-3">Réponse rapide</h2>
                <p className="text-gray-700">
                  Nous nous engageons à vous répondre sous 24h ouvrées maximum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Courbe de transition vers le footer */}
      <div className="relative w-full">
        <img src="/courbe-footer.svg" alt="" className="w-full h-auto block" />
      </div>
    </>
  );
}
