import HeroModern from '@/components/sections/HeroModern';
import ImageTextSection from '@/components/sections/ImageTextSection';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import FAQ from '@/components/ui/FAQ';
import ParallaxSVG from '@/components/ui/ParallaxSVG';
import LinkedInFeed from '@/components/sections/LinkedInFeed';
import MediatorsCarousel from '@/components/ui/MediatorsCarousel';
import { CheckCircleIcon, ScaleIcon, SparklesIcon } from '@heroicons/react/24/outline';

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

  const mediators = [
    {
      name: 'Sophie Martin',
      specialties: 'Droit commercial • Droit des affaires',
      quote: '"La médiation permet de préserver les relations tout en trouvant des solutions durables."'
    },
    {
      name: 'Jean Dubois',
      specialties: 'Droit de la famille • Succession',
      quote: '"Écouter avant de juger, comprendre avant de décider."'
    },
    {
      name: 'Marie Leroy',
      specialties: 'Conflits de voisinage • Immobilier',
      quote: '"La médiation transforme les conflits en opportunités de dialogue."'
    }
  ];

  const linkedInPosts = [
    {
      id: '1',
      date: 'Il y a 2 jours',
      content: '🎯 La médiation n\'est plus une option mais une obligation dans de nombreux litiges civils. Découvrez comment Juriscare accompagne les professionnels et les justiciables dans cette nouvelle ère de la résolution amiable.',
      link: 'https://www.linkedin.com/company/juriscare',
      likes: 45,
      comments: 8
    },
    {
      id: '2',
      date: 'Il y a 1 semaine',
      content: '📚 Formation à la médiation : notre prochain cycle démarre le mois prochain ! Au programme : gestion du stress, médiation judiciaire et conventionnelle, éthique des MARD. Inscriptions ouvertes.',
      link: 'https://www.linkedin.com/company/juriscare',
      likes: 67,
      comments: 12
    },
    {
      id: '3',
      date: 'Il y a 2 semaines',
      content: '💡 Saviez-vous qu\'une médiation réussie permet d\'économiser en moyenne 70% des coûts d\'une procédure judiciaire classique ? Sans compter le gain de temps et la préservation des relations. #Médiation #Justice',
      link: 'https://www.linkedin.com/company/juriscare',
      likes: 89,
      comments: 15
    }
  ];

  return (
    <>
      <HeroModern
        title="Juriscare : au service de la médiation et de celles et ceux qui la font vivre"
        subtitle="Nous accompagnons les médiateurs, les entreprises et les justiciables dans une nouvelle ère de la résolution amiable."
        cards={[
          { icon: 'scale', text: 'Je suis médiateur', href: '/mediateurs' },
          { icon: 'academic', text: 'Je veux me former à l\'amiable', href: '/formations' },
          { icon: 'users', text: 'Je cherche un service de médiation', href: '/mediation' },
        ]}
      />

      {/* Qui sommes-nous */}
      <Section background="white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-serif font-normal text-gray-900 mb-8 leading-tight">
            Qui sommes-nous ?
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Juriscare est une plateforme au service de la médiation : nous donnons les moyens aux médiateurs d&apos;exercer leur mission avec sérénité, et aux justiciables de trouver des solutions amiables pour régler rapidement leurs différends.
          </p>
        </div>
      </Section>

      {/* Wrapper pour toutes les sections beiges avec SVG parallax */}
      <div id="section-beige" className="relative">
        <ParallaxSVG sectionId="section-beige" />

        {/* Section combinée : Pourquoi la médiation + Formations */}
        <section className="bg-white py-20 md:py-32">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          {/* Pourquoi la médiation */}
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-serif font-normal text-gray-900 mb-8 leading-tight">
                Pourquoi la médiation<br />est-elle devenue indispensable ?
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                La médiation est devenue un passage obligatoire dans de nombreux litiges civils. Les tribunaux encouragent activement les parties à se tourner vers des solutions amiables et tous les mouvements législatifs vont dans ce sens pour donner plus d&apos;efficacité à la Justice Civile.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-beige-light rounded-2xl p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <CheckCircleIcon className="w-10 h-10 text-primary" strokeWidth={0.75} />
                  </div>
                  <h3 className="text-xl font-serif font-semibold mb-4 text-gray-900">Tentative de médiation obligatoire</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Avant d&apos;aller en justice, une tentative de médiation est désormais requise
                  </p>
                </div>
              </div>

              <div className="bg-beige-light rounded-2xl p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <ScaleIcon className="w-10 h-10 text-primary" strokeWidth={0.75} />
                  </div>
                  <h3 className="text-xl font-serif font-semibold mb-4 text-gray-900">Sanctions en cas de refus</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Jusqu&apos;à 10 000 € d&apos;amende civile en cas de refus injustifié
                  </p>
                </div>
              </div>

              <div className="bg-beige-light rounded-2xl p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <SparklesIcon className="w-10 h-10 text-primary" strokeWidth={0.75} />
                  </div>
                  <h3 className="text-xl font-serif font-semibold mb-4 text-gray-900">Bénéfices multiples</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Un gain de temps, d&apos;argent et de relations humaines
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Nos médiateurs - Layout gauche/droite */}
      <section className="bg-beige-light py-0 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Contenu à gauche */}
          <div className="lg:order-1 bg-beige-light">
            <div className="w-full px-8 sm:px-12 lg:px-16 py-16 lg:py-20 flex flex-col justify-center h-full">
              <h2 className="text-4xl sm:text-5xl font-serif font-normal text-gray-900 mb-8 leading-tight">
                Nos médiateurs
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Des professionnels expérimentés, certifiés et engagés dans une démarche de qualité avec Juriscare.
              </p>
              <div>
                <a href="/mediation" className="inline-block font-medium rounded-full transition-all duration-300 text-center px-8 py-4 text-lg bg-primary text-white hover:bg-dark hover:text-white">
                  Découvrir nos services de médiation
                </a>
              </div>
            </div>
          </div>

          {/* Carousel + Image à droite - hauteur fixe */}
          <div className="relative lg:order-2 h-[400px] lg:h-[700px]">
            {/* Image de fond */}
            <img
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
              alt="Nos médiateurs"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Overlay sombre pour meilleure lisibilité */}
            <div className="absolute inset-0 bg-black/20"></div>
            {/* Carousel positionné au centre */}
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="w-full max-w-md">
                <MediatorsCarousel mediators={mediators} />
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
    </div>

      {/* Section LinkedIn Feed */}
      <LinkedInFeed posts={linkedInPosts} companyUrl="https://www.linkedin.com/company/juriscare" />

      {/* Courbe de transition vers le footer */}
      <div className="relative w-full">
        <img src="/courbe-footer.svg" alt="" className="w-full h-auto block" />
      </div>
    </>
  );
}
