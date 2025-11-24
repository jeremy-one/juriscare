'use client';

import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà accepté les cookies
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const refuseCookies = () => {
    localStorage.setItem('cookieConsent', 'refused');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-dark text-white p-6 shadow-2xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm leading-relaxed">
              Nous utilisons des cookies pour améliorer votre expérience sur notre site.
              En continuant à naviguer, vous acceptez notre utilisation des cookies.{' '}
              <a href="https://formation.side-quest.io/politique-de-confidentialite-copie/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">
                En savoir plus
              </a>
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <button
              onClick={refuseCookies}
              className="px-6 py-2 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors text-sm font-medium"
            >
              Refuser
            </button>
            <button
              onClick={acceptCookies}
              className="px-6 py-2 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors text-sm font-medium"
            >
              Accepter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
