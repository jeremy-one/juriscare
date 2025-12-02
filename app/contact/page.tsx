'use client';

import { useState } from 'react';
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous pourrez implémenter l'envoi du formulaire
    console.log('Form submitted:', formData);
    alert('Merci pour votre message ! Nous vous recontacterons rapidement.');
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
              <form onSubmit={handleSubmit} className="space-y-6">
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
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
                    Message {!formData.wantCallback && '*'}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required={!formData.wantCallback}
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none"
                    placeholder={formData.wantCallback ? "Message optionnel..." : "Décrivez-nous votre situation ou votre demande..."}
                  />
                </div>

                <Button variant="primary" size="lg" className="w-full">
                  Envoyer votre message
                </Button>
              </form>
            </div>

            {/* Informations de contact */}
            <div className="space-y-6">
              <div className="bg-beige-light rounded-2xl p-6">
                <div className="flex items-start">
                  <div className="text-3xl mr-4">📧</div>
                  <div>
                    <h3 className="font-serif font-semibold text-lg text-gray-900 mb-2">Email</h3>
                    <a href="mailto:contact@juriscare.fr" className="text-primary hover:underline">
                      contact@juriscare.fr
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-primary text-white rounded-2xl p-6">
                <h3 className="font-serif font-semibold text-xl mb-3">Rappel téléphonique</h3>
                <p className="mb-0 opacity-90">
                  Cochez la case correspondante dans le formulaire et nous vous contacterons rapidement. Le message devient alors facultatif.
                </p>
              </div>

              <div className="bg-beige-light rounded-2xl p-6">
                <h3 className="font-serif font-semibold text-lg text-gray-900 mb-3">Réponse rapide</h3>
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
