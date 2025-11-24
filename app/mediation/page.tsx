import Hero from '@/components/sections/Hero';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import FAQ from '@/components/ui/FAQ';

export default function Mediation() {
  const faqItems = [
    {
      question: "La médiation est-elle vraiment obligatoire ?",
      answer: "Oui, pour de nombreux types de litiges civils, une tentative de médiation est devenue obligatoire avant de pouvoir saisir le tribunal. Cette démarche vise à encourager les solutions amiables et à alléger la charge des tribunaux."
    },
    {
      question: "Est-ce que je peux refuser une médiation ?",
      answer: "Vous pouvez refuser, mais un refus injustifié peut entraîner une amende civile pouvant aller jusqu'à 10 000 €. De plus, vous devez tenter une médiation avant de pouvoir saisir le juge dans la plupart des litiges civils."
    },
    {
      question: "Qui paie les frais ?",
      answer: "Les frais de médiation sont généralement partagés entre les parties. Le coût exact dépend du type de médiation choisi et de la complexité du dossier. C'est toutefois bien moins cher qu'une procédure judiciaire."
    },
    {
      question: "Que se passe-t-il si ça ne marche pas ?",
      answer: "Si aucun accord n'est trouvé, vous recevrez une attestation de tentative de médiation qui vous permettra de saisir le tribunal. La médiation n'est donc pas un obstacle, mais une étape préalable constructive."
    }
  ];

  return (
    <>
      <Hero
        title="Réglez rapidement vos litiges de manière sécurisée avec un accompagnement professionnel de qualité"
        subtitle="Juriscare vous propose plusieurs niveaux de service selon votre situation. Simple, rapide, conforme au droit."
        buttons={[
          { text: 'Démarrer une médiation', href: '#services', variant: 'primary' }
        ]}
      />

      {/* Pourquoi choisir la médiation */}
      <Section background="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
            Pourquoi choisir la médiation ?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <div className="flex items-start">
                <div className="text-3xl mr-4">⚖️</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Un passage obligatoire</h3>
                  <p className="text-gray-600">
                    La médiation devient un passage obligé pour les différends civils
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start">
                <div className="text-3xl mr-4">⚡</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Plus rapide et humaine</h3>
                  <p className="text-gray-600">
                    Une solution plus rapide et humaine que le tribunal
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start">
                <div className="text-3xl mr-4">🔒</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Confidentielle</h3>
                  <p className="text-gray-600">
                    Une voie confidentielle et personnalisée
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start">
                <div className="text-3xl mr-4">🎯</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Vous gardez le contrôle</h3>
                  <p className="text-gray-600">
                    Vous gardez le contrôle de la solution
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Nos services */}
      <Section id="services">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
            Nos services
          </h2>

          <div className="space-y-8">
            {/* Niveau 1 */}
            <Card className="border-l-4 border-secondary">
              <div className="flex items-start justify-between flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <span className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">
                      Niveau 1
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Attestation d&apos;information à la médiation
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-4 text-lg">
                    Pour respecter la loi et pouvoir saisir le juge si l&apos;autre partie refuse
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">✓</span>
                      Démarche dématérialisée
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">✓</span>
                      Notification à la partie adverse
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">✓</span>
                      Attestation émise à l&apos;issue de la réunion
                    </li>
                  </ul>
                </div>
                <div className="flex items-center">
                  <Button href="/contact" variant="secondary" size="lg">
                    Déposer une demande
                  </Button>
                </div>
              </div>
            </Card>

            {/* Niveau 2 */}
            <Card className="border-l-4 border-primary">
              <div className="flex items-start justify-between flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">
                      Niveau 2
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Médiation
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-4 text-lg">
                    Pour vos tous types de litiges, quelques soient leurs enjeux, matières et territorialités
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      Diagnostic du conflit
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      Médiateur désigné selon le type de dossier
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      Cadre sécurisé, neutre, confidentiel
                    </li>
                  </ul>
                </div>
                <div className="flex items-center">
                  <Button href="/contact" variant="primary" size="lg">
                    Demander un médiateur
                  </Button>
                </div>
              </div>
            </Card>

            {/* Niveau 3 */}
            <Card className="border-l-4 border-accent">
              <div className="flex items-start justify-between flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">
                      Niveau 3
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Accompagnement à la Négociation et gestion de crise
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-4 text-lg">
                    Pour les situations les plus délicates, lorsque le dialogue est bloqué, un professionnel vous accompagne pour déployer une stratégie tactique et technique
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      Tiers facilitateur
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      Structure des échanges
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      Objectif : accord rapide, sans escalade
                    </li>
                  </ul>
                </div>
                <div className="flex items-center">
                  <Button href="/contact" variant="outline" size="lg">
                    Commencer une négociation
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Pourquoi Juriscare */}
      <Section background="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
            Pourquoi Juriscare ?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <div className="text-center">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Médiateurs certifiés</h3>
                <p className="text-gray-600">
                  Des médiateurs sélectionnés et certifiés
                </p>
              </div>
            </Card>

            <Card>
              <div className="text-center">
                <div className="text-4xl mb-4">💻</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Plateforme simple</h3>
                <p className="text-gray-600">
                  Une plateforme simple, rapide et sécurisée
                </p>
              </div>
            </Card>

            <Card>
              <div className="text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Accompagnement humain</h3>
                <p className="text-gray-600">
                  Un accompagnement humain et impartial
                </p>
              </div>
            </Card>
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
            Lancer ma demande
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contactez-nous pour démarrer votre médiation et trouver une solution amiable
          </p>
          <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
            Démarrer maintenant
          </Button>
        </div>
      </Section>
    </>
  );
}
