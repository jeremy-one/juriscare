'use client';

import { ScaleIcon, AcademicCapIcon, UsersIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

interface HeroModernProps {
  title: string;
  subtitle: string;
  cards?: Array<{
    icon: 'scale' | 'academic' | 'users' | 'document';
    text: string;
    href: string;
  }>;
  image?: string;
}

const iconMap = {
  scale: ScaleIcon,
  academic: AcademicCapIcon,
  users: UsersIcon,
  document: DocumentTextIcon,
};

export default function HeroModern({ title, subtitle, cards, image }: HeroModernProps) {
  return (
    <section className="relative">
      {/* Hero avec image */}
      <div className="relative min-h-[80vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={image || "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"}
            alt="Hero background"
            className="w-full h-full object-cover object-center"
            style={{ objectPosition: 'center 40%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-12 w-full py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-white mb-6 leading-tight">
              {title}
            </h1>

            <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Courbe de transition */}
        <div className="absolute bottom-0 left-0 w-full z-10">
          <img src="/courbe.svg" alt="" className="w-full h-auto" />
        </div>
      </div>

      {/* Cards qui débordent sur la section suivante */}
      {cards && cards.length > 0 && (
        <div className="relative -mt-32 z-20 px-4 sm:px-6 lg:px-8 pb-16 pt-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {cards.map((card, index) => {
                const Icon = iconMap[card.icon];
                return (
                  <a
                    key={index}
                    href={card.href}
                    className="bg-dark hover:bg-beige rounded-3xl shadow-xl p-10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center text-center min-h-[240px] justify-center border border-gray-800 hover:border-beige-dark"
                  >
                    <div className="w-20 h-20 mb-6 text-white group-hover:text-dark transition-colors">
                      <Icon className="w-full h-full" strokeWidth={0.75} />
                    </div>
                    <h2 className="text-xl font-serif font-semibold text-white group-hover:text-dark transition-colors leading-snug">
                      {card.text}
                    </h2>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
