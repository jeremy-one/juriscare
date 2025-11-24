'use client';

import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface Mediator {
  name: string;
  specialties: string;
  quote: string;
  photo?: string;
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
      {/* Card médiateur */}
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
        <div className="w-32 h-32 rounded-full bg-beige/30 mx-auto mb-6"></div>
        <h3 className="text-2xl font-serif font-semibold mb-2 text-gray-900 text-center">
          {currentMediator.name}
        </h3>
        <p className="text-primary text-sm mb-4 text-center">
          {currentMediator.specialties}
        </p>
        <p className="text-gray-600 italic text-center leading-relaxed">
          {currentMediator.quote}
        </p>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={goToPrevious}
          className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
          aria-label="Médiateur précédent"
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
                index === currentIndex ? 'bg-primary w-6' : 'bg-gray-300'
              }`}
              aria-label={`Aller au médiateur ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
          aria-label="Médiateur suivant"
        >
          <ChevronRightIcon className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </div>
  );
}
