'use client';

import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

interface Mediator {
  name: string;
  title?: string;
  specialties?: string;
  photo?: string;
  linkedin?: string;
}

interface MediatorsCarouselProps {
  mediators: Mediator[];
}

export default function MediatorsCarousel({ mediators }: MediatorsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? mediators.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === mediators.length - 1 ? 0 : prev + 1));
  };

  const currentMediator = mediators[currentIndex];

  return (
    <div className="relative">
      {/* Card mediateur */}
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg min-h-[375px] flex flex-col justify-center">
        {currentMediator.photo ? (
          <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden bg-beige/30">
            <Image
              src={currentMediator.photo}
              alt={currentMediator.name}
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="w-32 h-32 rounded-full bg-beige/30 mx-auto mb-6 flex items-center justify-center">
            <span className="text-4xl text-gray-400">{currentMediator.name.charAt(0)}</span>
          </div>
        )}
        <h3 className="text-2xl font-serif font-semibold mb-2 text-gray-900 text-center">
          {currentMediator.name}
        </h3>
        {currentMediator.title && (
          <p className="text-primary font-medium text-center mb-1">
            {currentMediator.title}
          </p>
        )}
        {currentMediator.specialties && (
          <p className="text-gray-600 text-sm text-center mb-4 leading-relaxed">
            {currentMediator.specialties}
          </p>
        )}
        {currentMediator.linkedin && (
          <div className="text-center">
            <a
              href={currentMediator.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-dark transition-colors text-sm"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Voir le profil LinkedIn
            </a>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={goToPrevious}
          className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
          aria-label="Mediateur precedent"
        >
          <ChevronLeftIcon className="w-6 h-6 text-gray-600" />
        </button>

        {/* Indicateurs */}
        <div className="flex gap-2">
          {mediators.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-primary w-6' : 'bg-white'
              }`}
              aria-label={`Aller au mediateur ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
          aria-label="Mediateur suivant"
        >
          <ChevronRightIcon className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </div>
  );
}
