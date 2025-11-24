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
        cards={[
          { icon: 'scale', text: 'Rejoindre Juriscare', href: '/contact' },
          { icon: 'academic', text: 'Découvrir nos formations', href: '#formations' },
          { icon: 'document', text: 'En savoir plus', href: '#pourquoi' },
        ]}
      />

      {/* Pourquoi nous rejoindre - Layout gauche/droite */}
      <section className="bg-beige-light py-0 relative" id="pourquoi">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image à gauche */}
          <div className="relative lg:order-1 h-[400px] lg:h-[700px]">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop"
              alt="Médiateurs professionnels"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

          {/* Contenu à droite */}
          <div className="lg:order-2 bg-beige-light">
            <div className="w-full px-8 sm:px-12 lg:px-16 py-16 lg:py-20 flex flex-col justify-center h-full">
              <h2 className="text-4xl sm:text-5xl font-serif font-normal text-gray-900 mb-8 leading-tight">
                Pourquoi nous rejoindre ?
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
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

                <div className="flex items-start gap-4">
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

                <div className="flex items-start gap-4">
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

                <div className="flex items-start gap-4">
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

              <div>
                <a href="/contact" className="inline-block font-medium rounded-full transition-all duration-300 text-center px-8 py-4 text-lg bg-primary text-white hover:bg-dark hover:text-white">
                  Rejoindre Juriscare - contact avec l&apos;équipe
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Se former avec Juriscare */}
      <Section background="white" id="formations">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-normal text-gray-900 mb-8 leading-tight">
              Se former avec Juriscare
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-4">
              Nos formations couvrent l&apos;ensemble des compétences clés du médiateur : posture, droit, communication, techniques de négociation.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto italic">
              Parce que la compétence de nos médiateurs passe par la formation permanente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-beige-light rounded-2xl p-8">
              <h3 className="text-xl font-serif font-semibold mb-4 text-gray-900">✓ Formations certifiantes ou de perfectionnement</h3>
            </div>
            <div className="bg-beige-light rounded-2xl p-8">
              <h3 className="text-xl font-serif font-semibold mb-4 text-gray-900">✓ Formats en ligne ou présentiel</h3>
            </div>
            <div className="bg-beige-light rounded-2xl p-8">
              <h3 className="text-xl font-serif font-semibold mb-4 text-gray-900">✓ Intervenants experts reconnus</h3>
            </div>
            <div className="bg-beige-light rounded-2xl p-8">
              <h3 className="text-xl font-serif font-semibold mb-4 text-gray-900">✓ Formation initiale et formation continue</h3>
            </div>
            <div className="bg-beige-light rounded-2xl p-8">
              <h3 className="text-xl font-serif font-semibold mb-4 text-gray-900">✓ Groupe d&apos;analyse de pratique</h3>
            </div>
            <div className="bg-beige-light rounded-2xl p-8">
              <h3 className="text-xl font-serif font-semibold mb-4 text-gray-900">✓ Supervision</h3>
            </div>
          </div>

          <div className="text-center mb-12">
            <a href="/formations" className="inline-block font-medium rounded-full transition-all duration-300 text-center px-8 py-4 text-lg bg-primary text-white hover:bg-dark hover:text-white">
              Découvrir le programme de notre première formation
            </a>
          </div>

          {/* Thèmes de formation */}
          <div className="bg-beige-light rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-serif font-semibold mb-6 text-gray-900 text-center">Thèmes de formation que nous pouvons organiser</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {formationThemes.map((theme, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-primary flex-shrink-0 mt-1" strokeWidth={2} />
                  <p className="text-gray-700">{theme}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Informations légales */}
          <div className="bg-gray-50 rounded-xl p-6 text-sm text-gray-600">
            <p className="mb-4">
              <strong>Important :</strong> L&apos;inscription à nos formations doit être réalisée dans les 7 jours qui précèdent le début de la formation.
            </p>
            <div className="space-y-2">
              <p><a href="#" className="text-primary hover:underline">Le guide PSH</a></p>
              <p className="font-semibold mt-4 mb-2">Pages réglementaires :</p>
              <ul className="space-y-1 ml-4">
                <li><a href="https://formation.side-quest.io/conditions-generales-d-utilisation-copie/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Conditions générales d&apos;utilisation</a></li>
                <li><a href="https://formation.side-quest.io/cgv-copie/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">CGV</a></li>
                <li><a href="https://formation.side-quest.io/politique-de-confidentialite-copie/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Politique de confidentialité</a></li>
                <li><a href="https://formation.side-quest.io/reglement-interieur-copie/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Règlement intérieur</a></li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section background="beige">
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
