import Hero from '@/components/sections/Hero';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import FAQ from '@/components/ui/FAQ';

export default function Home() {
  const faqItems = [
    {
      question: "La médiation est-elle vraiment obligatoire ?",
      answer: "Oui, dans de nombreux litiges civils, la tentative de médiation est devenue un passage obligatoire avant de pouvoir saisir le juge. Cette obligation vise à favoriser les solutions amiables et à désengorger les tribunaux."
    },
    {
      question: "Qui paie les frais de médiation ?",
      answer: "Les frais de médiation sont généralement partagés entre les parties. Cependant, les modalités précises peuvent varier selon les situations et peuvent être discutées lors de la première session."
    },
    {
      question: "Que se passe-t-il si la médiation ne fonctionne pas ?",
      answer: "Si aucun accord n'est trouvé, vous recevrez une attestation de tentative de médiation qui vous permettra de saisir le juge. La médiation n'est pas un obstacle à l'accès à la justice, mais une étape préalable constructive."
    },
    {
      question: "Combien de temps dure une médiation ?",
      answer: "La durée varie selon la complexité du dossier, mais une médiation dure généralement entre 1 et 3 sessions de 2 heures. C'est bien plus rapide qu'une procédure judiciaire classique qui peut durer plusieurs années."
    }
  ];

  return (
    <>
      <Hero
        title="Juriscare : au service de la médiation et de celles et ceux qui la font vivre"
        subtitle="Nous accompagnons les médiateurs, les entreprises et les justiciables dans une nouvelle ère de la résolution amiable."
        buttons={[
          { text: '🧑‍⚖️ Je suis médiateur', href: '/mediateurs', variant: 'primary' },
          { text: '🧑🏻‍🎓 Je veux me former', href: '/mediateurs#formations', variant: 'secondary' },
          { text: '👥 Je cherche un service de médiation', href: '/mediation', variant: 'outline' }
        ]}
      />

      {/* Qui sommes-nous */}
      <Section background="light">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Qui sommes-nous ?</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Juriscare est une plateforme au service de la médiation : nous donnons les moyens aux médiateurs d&apos;exercer leur mission avec sérénité, et aux justiciables de trouver des solutions amiables pour régler rapidement leurs différends.
          </p>
        </div>
      </Section>

      {/* Pourquoi la médiation */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">
            Pourquoi la médiation est-elle devenue indispensable ?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
            La médiation est devenue un passage obligatoire dans de nombreux litiges civils. Les tribunaux encouragent activement les parties à se tourner vers des solutions amiables et tous les mouvements législatifs vont dans ce sens pour donner plus d&apos;efficacité à la Justice Civile.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Card>
              <div className="text-center">
                <div className="text-4xl mb-4">✓</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Tentative obligatoire</h3>
                <p className="text-gray-600">
                  Tentative de médiation obligatoire avant d&apos;aller en justice
                </p>
              </div>
            </Card>

            <Card>
              <div className="text-center">
                <div className="text-4xl mb-4">⚖️</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Sanctions en cas de refus</h3>
                <p className="text-gray-600">
                  Jusqu&apos;à 10 000 € d&apos;amende civile en cas de refus injustifié
                </p>
              </div>
            </Card>

            <Card>
              <div className="text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Bénéfices multiples</h3>
                <p className="text-gray-600">
                  Un gain de temps, d&apos;argent et de relation humaine
                </p>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Nos médiateurs */}
      <Section background="primary">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Nos médiateurs</h2>
          <p className="text-xl mb-12 opacity-90">
            Des professionnels expérimentés, certifiés et engagés dans une démarche de qualité avec Juriscare.
          </p>
          <Button href="/mediateurs" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
            Rejoindre notre réseau
          </Button>
        </div>
      </Section>

      {/* FAQ */}
      <Section background="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
            Questions fréquentes
          </h2>
          <FAQ items={faqItems} />
        </div>
      </Section>

      {/* CTA Final */}
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Prêt à démarrer votre médiation ?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Contactez-nous dès aujourd&apos;hui pour trouver une solution amiable à votre différend.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/mediation" variant="primary" size="lg">
              Démarrer une médiation
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Nous contacter
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
