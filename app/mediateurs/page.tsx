import HeroModern from '@/components/sections/HeroModern';
import Section from '@/components/ui/Section';
import FAQ from '@/components/ui/FAQ';
import { CheckCircleIcon, AcademicCapIcon, UserGroupIcon, ChartBarIcon } from '@heroicons/react/24/outline';

export default function MediateursPage() {
  const faqItems = [
    {
      question: "Puis-je rester indépendant tout en rejoignant Juriscare ?",
      answer: "Absolument. Juriscare respecte votre indépendance professionnelle. Vous restez libre de choisir vos dossiers, vos méthodes et votre organisation."
    },
    {
      question: "Comment sont attribués les dossiers ?",
      answer: "Les dossiers sont proposés en fonction de vos compétences, votre disponibilité et votre domaine d'expertise. Vous êtes libre d'accepter ou de refuser chaque proposition."
    },
    {
      question: "Puis-je accéder à vos formations sans adhérer ?",
      answer: "Oui, nos formations sont ouvertes à tous les médiateurs, qu'ils fassent partie du réseau Juriscare ou non."
    }
  ];

  const formationThemes = [
    "Gestion du stress et des émotions en médiation",
    "Médiation judiciaire et conventionnelle",
    "Éthique et déontologie des MARD",
    "Techniques de communication non-violente",
    "Négociation raisonnée et résolution de conflits",
    "Médiation en entreprise et conflits du travail",
    "Médiation familiale et succession",
    "Médiation commerciale et B2B"
  ];

  return (
    <>
      <HeroModern
        title="Rejoignez un réseau de médiateurs engagés et accompagnés"
        subtitle="Juriscare vous aide à exercer votre métier dans les meilleures conditions : qualité, liberté, impact."
        image="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
        cards={[
          { icon: 'scale', text: 'Rejoindre Juriscare', href: '/contact' },
          { icon: 'academic', text: 'Découvrir nos formations', href: '#formations' },
          { icon: 'document', text: 'En savoir plus', href: '#pourquoi' },
        ]}
      />

      {/* Pourquoi nous rejoindre */}
      <Section background="white" id="pourquoi">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-normal text-gray-900 mb-8 leading-tight">
              Pourquoi nous rejoindre ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-beige-light rounded-2xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <CheckCircleIcon className="w-7 h-7 text-primary" strokeWidth={0.75} />
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold mb-2 text-gray-900">Dossiers qualifiés</h3>
                <p className="text-gray-600 leading-relaxed">
                  Dossiers qualifiés et pertinents
                </p>
              </div>
            </div>

            <div className="bg-beige-light rounded-2xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <ChartBarIcon className="w-7 h-7 text-primary" strokeWidth={0.75} />
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold mb-2 text-gray-900">Visibilité nationale</h3>
                <p className="text-gray-600 leading-relaxed">
                  Visibilité nationale
                </p>
              </div>
            </div>

            <div className="bg-beige-light rounded-2xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <UserGroupIcon className="w-7 h-7 text-primary" strokeWidth={0.75} />
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold mb-2 text-gray-900">Accompagnement</h3>
                <p className="text-gray-600 leading-relaxed">
                  Accompagnement administratif <span className="text-sm italic">(à venir)</span>
                </p>
              </div>
            </div>

            <div className="bg-beige-light rounded-2xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <AcademicCapIcon className="w-7 h-7 text-primary" strokeWidth={0.75} />
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold mb-2 text-gray-900">Outils numériques</h3>
                <p className="text-gray-600 leading-relaxed">
                  Outils numériques de médiation <span className="text-sm italic">(à venir)</span>
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a href="/contact" className="inline-block font-medium rounded-full transition-all duration-300 text-center px-8 py-4 text-lg bg-primary text-white hover:bg-dark hover:text-white">
              Rejoindre Juriscare - contact avec l&apos;équipe
            </a>
          </div>
        </div>
      </Section>

      {/* Se former avec Juriscare - Layout gauche/droite */}
      <section className="bg-beige-light py-0 relative" id="formations">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image à gauche */}
          <div className="relative lg:order-1 h-[400px] lg:h-auto lg:min-h-full">
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
              alt="Formations pour médiateurs"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

          {/* Contenu à droite */}
          <div className="lg:order-2 bg-beige-light">
            <div className="w-full px-8 sm:px-12 lg:px-16 py-16 lg:py-20 flex flex-col justify-center h-full">
              <h2 className="text-4xl sm:text-5xl font-serif font-normal text-gray-900 mb-6 leading-tight">
                Se former avec Juriscare
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-4">
                Nos formations couvrent l&apos;ensemble des compétences clés du médiateur : posture, droit, communication, techniques de négociation.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8 italic">
                Parce que la compétence de nos médiateurs passe par la formation permanente.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-white rounded-xl p-4">
                  <h3 className="font-serif font-semibold text-gray-900">✓ Formations certifiantes</h3>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <h3 className="font-serif font-semibold text-gray-900">✓ En ligne ou présentiel</h3>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <h3 className="font-serif font-semibold text-gray-900">✓ Experts reconnus</h3>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <h3 className="font-serif font-semibold text-gray-900">✓ Formation continue</h3>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <h3 className="font-serif font-semibold text-gray-900">✓ Analyse de pratique</h3>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <h3 className="font-serif font-semibold text-gray-900">✓ Supervision</h3>
                </div>
              </div>

              <div className="mb-8">
                <a href="/formations" className="inline-block font-medium rounded-full transition-all duration-300 text-center px-8 py-3 bg-primary text-white hover:bg-dark">
                  Découvrir le programme
                </a>
              </div>

              {/* Thèmes de formation */}
              <div className="bg-white rounded-xl p-6 mb-6">
                <h3 className="text-xl font-serif font-semibold mb-4 text-gray-900">Thèmes de formation</h3>
                <div className="grid grid-cols-1 gap-2">
                  {formationThemes.slice(0, 4).map((theme, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircleIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" strokeWidth={2} />
                      <p className="text-sm text-gray-700">{theme}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Informations légales */}
              <div className="bg-gray-50 rounded-xl p-4 text-xs text-gray-600">
                <p className="mb-2">
                  <strong>Important :</strong> Inscription dans les 7 jours précédant la formation.
                </p>
                <div className="flex gap-3 text-xs">
                  <a href="/2025 - Gérer le handicap - Guide à destination du public.pdf" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Guide PSH</a>
                  <a href="https://formation.side-quest.io/conditions-generales-d-utilisation-copie/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">CGU</a>
                  <a href="https://formation.side-quest.io/cgv-copie/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">CGV</a>
                  <a href="https://formation.side-quest.io/politique-de-confidentialite-copie/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Confidentialité</a>
                  <a href="https://formation.side-quest.io/reglement-interieur-copie/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Règlement</a>
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

      {/* FAQ */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-serif font-normal text-gray-900 mb-12 leading-tight text-center">
            Questions fréquentes
          </h2>
          <FAQ items={faqItems} />
        </div>
      </Section>

      {/* Courbe de transition vers le footer */}
      <div className="relative w-full">
        <img src="/courbe-footer.svg" alt="" className="w-full h-auto block" />
      </div>
    </>
  );
}
