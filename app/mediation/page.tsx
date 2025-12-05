'use client';

import React, { useState } from 'react';
import HeroModern from '@/components/sections/HeroModern';
import Section from '@/components/ui/Section';
import FAQ from '@/components/ui/FAQ';
import { CheckCircleIcon, ClockIcon, LockClosedIcon, UserIcon, ScaleIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';
import MediatorsCarousel from '@/components/ui/MediatorsCarousel';

export default function MediationPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
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

  const serviceLabels: Record<string, string> = {
    niveau1: "Niveau 1 - Attestation d'information",
    niveau2: 'Niveau 2 - Médiation',
    niveau3: 'Niveau 3 - Accompagnement à la négociation'
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
          subject: `[Médiation] ${serviceLabels[formData.service] || formData.service}`,
          message: formData.message,
          wantCallback: formData.wantCallback,
          service: formData.service,
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
        service: '',
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

  const mediators = [
    {
      name: 'Andréa Plumel',
      title: 'Avocat & Médiateur',
      specialties: 'Famille et patrimoine',
      photo: '/mediators/andrea-plumel.jpg',
      linkedin: 'https://www.linkedin.com/in/andrea-plumel/'
    },
    {
      name: 'Carine Denoit-Benteux',
      title: 'Avocat Famille & Patrimoine',
      specialties: 'Médiateur - Vice-bâtonnière élue - Barreau de Paris',
      photo: '/mediators/carine-denoit-benteux.jpg',
      linkedin: 'https://www.linkedin.com/in/carine-denoit-benteux-22856949/'
    },
    {
      name: 'Hirbod Dehghani-Azar',
      title: 'Avocat associé - Médiateur - Formateur',
      specialties: "AMCNB - Ancien Membre du Conseil de l'Ordre",
      photo: '/mediators/hirbod-dehghani-azar.jpg',
      linkedin: 'https://www.linkedin.com/in/hirbod-dehghani-azar-a76b606/'
    },
    {
      name: 'Homam Royaï',
      title: 'Avocat-fiscaliste',
      specialties: 'Fondateur et associé du Cabinet RSDA - Gestion de patrimoine - Fiscalité',
      photo: '/mediators/homam-royai.jpg',
      linkedin: 'https://www.linkedin.com/in/homam-royaï-879234207/'
    },
    {
      name: 'Stephen Bensimon',
      title: 'Philosophe, Médiateur AME FFCM',
      specialties: "Fondateur et Président de l'Ifomene ICP - Professeur affilié ScPo",
      photo: '/mediators/stephen-bensimon.jpg',
      linkedin: 'https://www.linkedin.com/in/stephen-bensimon-41625319a/'
    }
  ];

  const faqItems = [
    {
      question: "La médiation est-elle vraiment obligatoire ?",
      answer: "Oui, dans de nombreux litiges civils, la tentative de médiation est devenue un passage obligatoire avant de pouvoir saisir le juge. Cette obligation vise à favoriser les solutions amiables et à désengorger les tribunaux."
    },
    {
      question: "Est-ce que je peux refuser une médiation ?",
      answer: "Vous pouvez refuser, mais le refus injustifié peut entraîner des sanctions, notamment une amende civile pouvant aller jusqu'à 10 000 €. Il est donc fortement recommandé de participer au moins à la première réunion d'information."
    },
    {
      question: "Qui paie les frais ?",
      answer: "Les frais de médiation sont généralement partagés entre les parties. Cependant, les modalités précises peuvent varier selon les situations et peuvent être discutées lors de la première session."
    },
    {
      question: "Que se passe-t-il si ça ne marche pas ?",
      answer: "Si aucun accord n'est trouvé, vous recevrez une attestation de tentative de médiation qui vous permettra de saisir le juge. La médiation n'est pas un obstacle à l'accès à la justice, mais une étape préalable constructive."
    }
  ];

  return (
    <>
      <HeroModern
        title="Réglez rapidement vos litiges de manière sécurisée avec un accompagnement professionnel de qualité"
        subtitle="Juriscare vous propose plusieurs niveaux de service selon votre situation. Simple, rapide, conforme au droit."
        image="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop"
        cards={[
          { icon: 'scale', text: 'Démarrer une médiation', href: '#contact' },
          { icon: 'document', text: 'En savoir plus', href: '#pourquoi' },
          { icon: 'users', text: 'Nous contacter', href: '#contact' },
        ]}
      />

      {/* Pourquoi choisir la médiation */}
      <Section background="white" id="pourquoi">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-normal text-gray-900 mb-8 leading-tight">
              Pourquoi choisir la médiation ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-beige-light rounded-2xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <ScaleIcon className="w-7 h-7 text-primary" strokeWidth={0.75} />
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold mb-2 text-gray-900">Passage obligé</h3>
                <p className="text-gray-600 leading-relaxed">
                  La médiation devient un passage obligé pour les différends civils
                </p>
              </div>
            </div>

            <div className="bg-beige-light rounded-2xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <ClockIcon className="w-7 h-7 text-primary" strokeWidth={0.75} />
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold mb-2 text-gray-900">Rapide et humain</h3>
                <p className="text-gray-600 leading-relaxed">
                  Une solution plus rapide et humaine que le tribunal
                </p>
              </div>
            </div>

            <div className="bg-beige-light rounded-2xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <LockClosedIcon className="w-7 h-7 text-primary" strokeWidth={0.75} />
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold mb-2 text-gray-900">Confidentiel</h3>
                <p className="text-gray-600 leading-relaxed">
                  Une voie confidentielle et personnalisée
                </p>
              </div>
            </div>

            <div className="bg-beige-light rounded-2xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <UserIcon className="w-7 h-7 text-primary" strokeWidth={0.75} />
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold mb-2 text-gray-900">Vous gardez le contrôle</h3>
                <p className="text-gray-600 leading-relaxed">
                  Vous gardez le contrôle de la solution
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Nos services - Layout gauche/droite */}
      <section className="bg-beige-light py-0 relative" id="services">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Carousel à gauche */}
          <div className="relative lg:order-1 min-h-[550px] lg:min-h-[700px]">
            <img
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop"
              alt="Services de médiation"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="w-full max-w-md">
                {/* <MediatorsCarousel mediators={mediators} /> - MASQUÉ TEMPORAIREMENT */}
              </div>
            </div>
          </div>

          {/* Contenu à droite */}
          <div className="lg:order-2 bg-beige-light flex items-stretch">
            <div className="w-full px-8 sm:px-12 lg:px-16 py-16 lg:py-20 flex flex-col justify-center h-full">
              <h2 className="text-4xl sm:text-5xl font-serif font-normal text-gray-900 mb-12 leading-tight">
                Nos services
              </h2>

              <div className="space-y-6">
                {/* Niveau 1 */}
                <div className="bg-white rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                        1
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-serif font-semibold mb-2 text-gray-900">
                        Attestation d&apos;information à la médiation
                      </h3>
                      <p className="text-gray-700 mb-3">
                        Pour respecter la loi et pouvoir saisir le juge si l&apos;autre partie refuse
                      </p>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start gap-2">
                          <CheckCircleIcon className="w-5 h-5 text-primary flex-shrink-0 mt-1" strokeWidth={2} />
                          <span className="text-sm text-gray-600">Démarche dématérialisée</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircleIcon className="w-5 h-5 text-primary flex-shrink-0 mt-1" strokeWidth={2} />
                          <span className="text-sm text-gray-600">Notification à la partie adverse</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircleIcon className="w-5 h-5 text-primary flex-shrink-0 mt-1" strokeWidth={2} />
                          <span className="text-sm text-gray-600">Attestation émise à l&apos;issue</span>
                        </li>
                      </ul>
                      <a href="#contact" className="inline-block font-medium rounded-full transition-all duration-300 text-center px-6 py-2 text-sm bg-primary text-white hover:bg-dark">
                        Déposer une demande
                      </a>
                    </div>
                  </div>
                </div>

                {/* Niveau 2 */}
                <div className="bg-white rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                        2
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-serif font-semibold mb-2 text-gray-900">
                        Médiation
                      </h3>
                      <p className="text-gray-700 mb-3">
                        Pour tous types de litiges, quels que soient leurs enjeux
                      </p>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start gap-2">
                          <CheckCircleIcon className="w-5 h-5 text-primary flex-shrink-0 mt-1" strokeWidth={2} />
                          <span className="text-sm text-gray-600">Diagnostic du conflit</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircleIcon className="w-5 h-5 text-primary flex-shrink-0 mt-1" strokeWidth={2} />
                          <span className="text-sm text-gray-600">Médiateur désigné selon le dossier</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircleIcon className="w-5 h-5 text-primary flex-shrink-0 mt-1" strokeWidth={2} />
                          <span className="text-sm text-gray-600">Cadre sécurisé et confidentiel</span>
                        </li>
                      </ul>
                      <a href="#contact" className="inline-block font-medium rounded-full transition-all duration-300 text-center px-6 py-2 text-sm bg-primary text-white hover:bg-dark">
                        Demander un médiateur
                      </a>
                    </div>
                  </div>
                </div>

                {/* Niveau 3 */}
                <div className="bg-white rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                        3
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-serif font-semibold mb-2 text-gray-900">
                        Accompagnement à la Négociation
                      </h3>
                      <p className="text-gray-700 mb-3">
                        Pour les situations délicates nécessitant une stratégie tactique
                      </p>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start gap-2">
                          <CheckCircleIcon className="w-5 h-5 text-primary flex-shrink-0 mt-1" strokeWidth={2} />
                          <span className="text-sm text-gray-600">Tiers facilitateur</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircleIcon className="w-5 h-5 text-primary flex-shrink-0 mt-1" strokeWidth={2} />
                          <span className="text-sm text-gray-600">Structure des échanges</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircleIcon className="w-5 h-5 text-primary flex-shrink-0 mt-1" strokeWidth={2} />
                          <span className="text-sm text-gray-600">Accord rapide, sans escalade</span>
                        </li>
                      </ul>
                      <a href="#contact" className="inline-block font-medium rounded-full transition-all duration-300 text-center px-6 py-2 text-sm bg-primary text-white hover:bg-dark">
                        Commencer une négociation
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logo centré entre les deux sections */}
        <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="w-16 h-16 bg-dark rounded-full flex items-center justify-center shadow-xl border border-white">
            <img src="/juriscare-mark-fill-white.svg" alt="Juriscare" className="w-8 h-8" />
          </div>
        </div>
      </section>

      {/* Pourquoi Juriscare */}
      <Section background="white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-normal text-gray-900 mb-8 leading-tight">
              Pourquoi Juriscare ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-beige-light rounded-2xl p-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircleIcon className="w-10 h-10 text-primary" strokeWidth={0.75} />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-4 text-gray-900">Médiateurs certifiés</h3>
                <p className="text-gray-600 leading-relaxed">
                  Des médiateurs sélectionnés et certifiés
                </p>
              </div>
            </div>

            <div className="bg-beige-light rounded-2xl p-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <ClockIcon className="w-10 h-10 text-primary" strokeWidth={0.75} />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-4 text-gray-900">Plateforme simple</h3>
                <p className="text-gray-600 leading-relaxed">
                  Une plateforme simple, rapide et sécurisée
                </p>
              </div>
            </div>

            <div className="bg-beige-light rounded-2xl p-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <ChatBubbleLeftRightIcon className="w-10 h-10 text-primary" strokeWidth={0.75} />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-4 text-gray-900">Accompagnement humain</h3>
                <p className="text-gray-600 leading-relaxed">
                  Un accompagnement humain et impartial
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ - Layout gauche/droite */}
      <section className="bg-beige-light py-0 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-[1000px]">
          {/* Image à gauche - hauteur fixe */}
          <div className="relative lg:order-1 h-[400px] lg:h-full">
            <img
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
              alt="Questions fréquentes"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

          {/* Contenu à droite */}
          <div className="lg:order-2 bg-beige-light">
            <div className="w-full px-8 sm:px-12 lg:px-16 py-16 lg:py-20 flex flex-col justify-center h-full">
              <h2 className="text-4xl sm:text-5xl font-serif font-normal text-gray-900 mb-12 leading-tight">
                Questions fréquentes
              </h2>
              <FAQ items={faqItems} />
            </div>
          </div>
        </div>

        {/* Logo centré entre les deux sections */}
        <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="w-16 h-16 bg-dark rounded-full flex items-center justify-center shadow-xl border border-white">
            <img src="/juriscare-mark-fill-white.svg" alt="Juriscare" className="w-8 h-8" />
          </div>
        </div>
      </section>

      {/* Contact / Démarrer ma médiation */}
      <Section background="white" id="contact">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-serif font-normal text-gray-900 mb-8 leading-tight">
              Démarrer ma médiation
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Remplissez le formulaire ci-dessous et nous vous recontacterons rapidement pour vous accompagner.
            </p>
          </div>

          <div className="bg-beige-light rounded-2xl p-8 lg:p-12">
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">✓</div>
                <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-4">Demande envoyée !</h3>
                <p className="text-gray-600 mb-6">Merci pour votre demande. Nous vous recontacterons rapidement pour vous accompagner.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="inline-block font-medium rounded-full transition-all duration-300 text-center px-8 py-3 bg-primary text-white hover:bg-dark"
                >
                  Envoyer une autre demande
                </button>
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
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
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
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50"
                      placeholder="Jean Dupont"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
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
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50"
                      placeholder="jean.dupont@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
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
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50"
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
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Niveau de service souhaité *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    disabled={isLoading}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50"
                  >
                    <option value="">Choisissez un service</option>
                    <option value="niveau1">Niveau 1 - Attestation d&apos;information</option>
                    <option value="niveau2">Niveau 2 - Médiation</option>
                    <option value="niveau3">Niveau 3 - Accompagnement à la négociation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Décrivez brièvement votre situation *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isLoading}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50"
                    placeholder="Décrivez-nous votre situation ou votre demande..."
                  ></textarea>
                </div>

                <div className="text-center pt-4">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="inline-block font-medium rounded-full transition-all duration-300 text-center px-12 py-4 text-lg bg-primary text-white hover:bg-dark disabled:opacity-50"
                  >
                    {isLoading ? 'Envoi en cours...' : 'Lancer ma demande'}
                  </button>
                </div>
              </form>
            )}
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
