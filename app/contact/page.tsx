'use client';

import { useState } from 'react';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'mediation',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous pourrez implémenter l'envoi du formulaire
    console.log('Form submitted:', formData);
    alert('Merci pour votre message ! Nous vous recontacterons rapidement.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Section className="pt-32">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6 text-gray-900">
              Contactez-nous
            </h1>
            <p className="text-xl text-gray-700">
              Une question ? Un projet de médiation ? Nous sommes là pour vous accompagner.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulaire */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    placeholder="jean.dupont@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    placeholder="06 12 34 56 78"
                  />
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                  >
                    <option value="mediation">Démarrer une médiation</option>
                    <option value="mediateur">Devenir médiateur</option>
                    <option value="formation">Formation</option>
                    <option value="autre">Autre demande</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none"
                    placeholder="Décrivez-nous votre situation ou votre demande..."
                  />
                </div>

                <Button variant="primary" size="lg" className="w-full">
                  Envoyer votre message
                </Button>
              </form>
            </div>

            {/* Informations de contact */}
            <div className="space-y-8">
              <div className="bg-light rounded-xl p-6">
                <div className="flex items-start mb-4">
                  <div className="text-3xl mr-4">📧</div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">Email</h3>
                    <a href="mailto:contact@juriscare.fr" className="text-primary hover:underline">
                      contact@juriscare.fr
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-light rounded-xl p-6">
                <div className="flex items-start mb-4">
                  <div className="text-3xl mr-4">📞</div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">Téléphone</h3>
                    <p className="text-gray-700">Du lundi au vendredi</p>
                    <p className="text-gray-700">9h00 - 18h00</p>
                    <a href="tel:+33123456789" className="text-primary hover:underline font-medium">
                      01 23 45 67 89
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-primary text-white rounded-xl p-6">
                <h3 className="font-semibold text-xl mb-3">Vous préférez être rappelé ?</h3>
                <p className="mb-4 opacity-90">
                  Indiquez-le dans votre message et nous vous contacterons aux horaires qui vous conviennent.
                </p>
              </div>

              <div className="bg-light rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">Réponse rapide</h3>
                <p className="text-gray-700">
                  Nous nous engageons à vous répondre sous 24h ouvrées maximum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
