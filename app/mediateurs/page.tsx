import Hero from '@/components/sections/Hero';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import FAQ from '@/components/ui/FAQ';

export default function Mediateurs() {
  const faqItems = [
    {
      question: "Puis-je rester indépendant tout en rejoignant Juriscare ?",
      answer: "Absolument. Juriscare n'est pas un cabinet qui emploie des médiateurs, c'est un réseau qui vous apporte visibilité et accompagnement tout en préservant votre indépendance professionnelle."
    },
    {
      question: "Comment sont attribués les dossiers ?",
      answer: "Les dossiers sont attribués en fonction de vos domaines de compétence, de votre localisation et de vos disponibilités. Vous restez libre d'accepter ou de refuser les missions proposées."
    },
    {
      question: "Puis-je accéder à vos formations sans adhérer ?",
      answer: "Oui, nos formations sont ouvertes à tous les professionnels de la médiation, qu'ils fassent partie du réseau Juriscare ou non."
    }
  ];

  return (
    <>
      <Hero
        title="Rejoignez un réseau de médiateurs engagés et accompagnés"
        subtitle="Juriscare vous aide à exercer votre métier dans les meilleures conditions : qualité, liberté, impact."
        buttons={[
          { text: 'Rejoindre Juriscare', href: '/contact', variant: 'primary' }
        ]}
      />

      {/* Pourquoi nous rejoindre */}
      <Section>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
            Pourquoi nous rejoindre ?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <div className="text-center">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Dossiers qualifiés</h3>
                <p className="text-gray-600">
                  Des dossiers sélectionnés et pertinents correspondant à vos compétences
                </p>
              </div>
            </Card>

            <Card>
              <div className="text-center">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Visibilité nationale</h3>
                <p className="text-gray-600">
                  Accédez à une plateforme reconnue sur tout le territoire
                </p>
              </div>
            </Card>

            <Card>
              <div className="text-center">
                <div className="text-4xl mb-4">📝</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Accompagnement administratif</h3>
                <p className="text-gray-600">
                  Fonctionnalité à venir pour simplifier votre gestion
                </p>
              </div>
            </Card>

            <Card>
              <div className="text-center">
                <div className="text-4xl mb-4">💻</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Outils numériques</h3>
                <p className="text-gray-600">
                  Des solutions digitales modernes à venir pour faciliter vos médiations
                </p>
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button href="/contact" variant="primary" size="lg">
              Rejoindre Juriscare - Contact avec l&apos;équipe
            </Button>
          </div>
        </div>
      </Section>

      {/* Se former avec Juriscare */}
      <Section background="light" id="formations">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">
            Se former avec Juriscare
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
            Nos formations couvrent l&apos;ensemble des compétences clés du médiateur : posture, droit, communication, techniques de négociation. Parce que la compétence de nos médiateurs passe par la formation permanente.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">📚 Formations certifiantes ou de perfectionnement</h3>
              <p className="text-gray-600">
                Des programmes reconnus pour développer vos compétences et certifier votre expertise
              </p>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">🖥️ Formats flexibles</h3>
              <p className="text-gray-600">
                En ligne ou présentiel, adaptez votre formation à votre emploi du temps
              </p>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">👨‍🏫 Intervenants experts</h3>
              <p className="text-gray-600">
                Des formateurs reconnus dans leur domaine pour un apprentissage de qualité
              </p>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">🔄 Formation continue</h3>
              <p className="text-gray-600">
                Formation initiale, continue, groupes d&apos;analyse de pratique et supervision
              </p>
            </Card>
          </div>

          <div className="text-center">
            <Button href="/contact" variant="primary" size="lg">
              Découvrir le programme de notre première formation
            </Button>
          </div>

          <div className="mt-12 p-6 bg-white rounded-xl shadow-md">
            <p className="text-sm text-gray-600 mb-4">
              <strong>Important :</strong> L&apos;inscription à nos formations doit être réalisée dans les 7 jours qui précèdent le début de la formation.
            </p>

            <div className="space-y-2 text-sm text-gray-600">
              <p><strong>Ressources utiles :</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>
                  <a href="https://formation.side-quest.io/conditions-generales-d-utilisation-copie/"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-[var(--primary)] hover:underline">
                    Conditions générales d&apos;utilisation
                  </a>
                </li>
                <li>
                  <a href="https://formation.side-quest.io/cgv-copie/"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-[var(--primary)] hover:underline">
                    CGV
                  </a>
                </li>
                <li>
                  <a href="https://formation.side-quest.io/politique-de-confidentialite-copie/"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-[var(--primary)] hover:underline">
                    Politique de confidentialité
                  </a>
                </li>
                <li>
                  <a href="https://formation.side-quest.io/reglement-interieur-copie/"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-[var(--primary)] hover:underline">
                    Règlement intérieur
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
            Questions fréquentes
          </h2>
          <FAQ items={faqItems} />
        </div>
      </Section>

      {/* CTA Final */}
      <Section background="primary">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Prêt à rejoindre Juriscare ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contactez-nous pour échanger sur votre parcours et vos attentes
          </p>
          <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[var(--primary)]">
            Nous contacter
          </Button>
        </div>
      </Section>
    </>
  );
}
