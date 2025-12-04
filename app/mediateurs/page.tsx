'use client';

import HeroModern from '@/components/sections/HeroModern';
import Section from '@/components/ui/Section';
import FAQ from '@/components/ui/FAQ';
import { CheckCircleIcon, AcademicCapIcon, UserGroupIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

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
    },
    {
      question: "Qui sont nos formateurs ?",
      answer: "Nos formations sont dispensées par des experts reconnus dans leur domaine. <a href='/CV_AP.pdf' target='_blank' rel='noopener noreferrer' class='text-primary underline hover:no-underline'>Découvrez le parcours de notre formatrice Andréa</a>."
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

  const [selectedCategory, setSelectedCategory] = useState('Toutes');
  const [currentPage, setCurrentPage] = useState(1);
  const formationsPerPage = 9;

  const formations = [
    // TECHNIQUES DE COMMUNICATION
    { category: 'Techniques de Communication', title: 'Écoute active et reformulation', description: 'Maîtriser les techniques élémentaires de communication pour favoriser des échanges sereins et constructifs' },
    { category: 'Techniques de Communication', title: 'Communication non violente', description: 'Mettre en place un cadre commun de discussion selon les principes de la communication non violente' },
    { category: 'Techniques de Communication', title: 'Initiation à la programmation neurolinguistique', description: 'Les outils de la PNL pour améliorer son rapport à l\'autre' },

    // TECHNIQUES DE NÉGOCIATION
    { category: 'Techniques de Négociation', title: 'Négociation', description: 'Construire une stratégie de négociation' },
    { category: 'Techniques de Négociation', title: 'Négociation raisonnée', description: 'Mettre en place un cadre commun de discussion selon les principes de la négociation raisonnée' },

    // GESTION DE CONFLITS
    { category: 'Gestion de Conflits', title: 'Panorama des MARD', description: 'Connaître les différends modes amiables et alternatifs de règlement des différends et savoir identifier le plus adapté à une situation donnée' },
    { category: 'Gestion de Conflits', title: 'Processus collaboratif', description: 'Devenir praticien de droit collaboratif' },
    { category: 'Gestion de Conflits', title: 'Procédure participative et procédure participative de mise en état et instruction conventionnelle', description: 'Maîtriser les procédures participatives dans leur ensemble' },
    { category: 'Gestion de Conflits', title: 'Médiation judiciaire et médiation conventionnelle', description: 'Comprendre les spécificités et les enjeux de la médiation judiciaire et de la médiation conventionnelle' },

    // ACCOMPAGNEMENT AU CHANGEMENT
    { category: 'Accompagnement au Changement', title: 'Gestion de crise', description: 'Savoir identifier, accompagner et résoudre les situations de crise' },
    { category: 'Accompagnement au Changement', title: 'Gestion du stress : Approche sophrologique du conflit', description: 'Maîtriser ses émotions pour négocier efficacement' },

    // PRATIQUE PROFESSIONNELLE
    { category: 'Pratique Professionnelle', title: 'Savoir prescrire et accompagner son client en médiation', description: 'Développer sa posture de conseil pour orienter et accompagner son client' },
    { category: 'Pratique Professionnelle', title: 'Actualités des modes amiables en matière familiale', description: 'Actualiser ses connaissances pour pratiquer l\'amiable en matière familiale' },
    { category: 'Pratique Professionnelle', title: 'Les écrits en médiation', description: 'Entrée en médiation, déroulement, fin du processus, règles relatives aux écrits' },
    { category: 'Pratique Professionnelle', title: 'Arbitrage en matière familiale', description: 'Domaines arbitrables et pratique de l\'arbitrage familial' },
    { category: 'Pratique Professionnelle', title: 'Médiation inter-entreprises', description: 'Comprendre les spécificités et les enjeux de la médiation inter entreprise' },
    { category: 'Pratique Professionnelle', title: 'Médiation intra entreprise', description: 'Comprendre l\'équilibre des relations en entreprise et apprendre à utiliser la médiation pour anticiper et gérer les conflits' },
    { category: 'Pratique Professionnelle', title: 'Médiation en matière fiscale', description: 'Gérer les différends fiscaux par la médiation' },
    { category: 'Pratique Professionnelle', title: 'Médiation de la consommation', description: 'Traiter les différends entre consommateurs et professionnels' },
    { category: 'Pratique Professionnelle', title: 'Médiation familiale internationale', description: 'Gérer les conflits familiaux transfrontaliers' },
    { category: 'Pratique Professionnelle', title: 'Médiation et copropriété', description: 'Résoudre les conflits en copropriété' },
    { category: 'Pratique Professionnelle', title: 'Médiation dans l\'économie sociale et solidaire et dans les ONG', description: 'Adapter la médiation aux structures de l\'ESS' },
    { category: 'Pratique Professionnelle', title: 'Psychologie de l\'individu en conflit', description: 'Comprendre les transformations induites par le conflit chez l\'individu et y réagir en médiateur' },
    { category: 'Pratique Professionnelle', title: 'Enjeux et risques psycho-sociaux', description: 'Identifier et gérer les risques psychosociaux' },
    { category: 'Pratique Professionnelle', title: 'Médiation et santé', description: 'Médier les conflits dans le secteur de la santé' }
  ];

  const categories = ['Toutes', 'Techniques de Communication', 'Techniques de Négociation', 'Gestion de Conflits', 'Accompagnement au Changement', 'Pratique Professionnelle'];

  const filteredFormations = selectedCategory === 'Toutes'
    ? formations
    : formations.filter(f => f.category === selectedCategory);

  // Réinitialiser la page à 1 quand on change de catégorie
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  // Calcul de la pagination
  const totalPages = Math.ceil(filteredFormations.length / formationsPerPage);
  const indexOfLastFormation = currentPage * formationsPerPage;
  const indexOfFirstFormation = indexOfLastFormation - formationsPerPage;
  const currentFormations = filteredFormations.slice(indexOfFirstFormation, indexOfLastFormation);

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
                  <h3 className="font-serif font-semibold text-gray-900">✓ En ligne ou présentiel</h3>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <h3 className="font-serif font-semibold text-gray-900">✓ Experts reconnus</h3>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <h3 className="font-serif font-semibold text-gray-900">✓ Analyse de pratique</h3>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <h3 className="font-serif font-semibold text-gray-900">✓ Supervision</h3>
                </div>
              </div>

              <div className="mb-8 flex flex-wrap items-center gap-4">
                <a href="/Programme - 12 novembre 2025 -  médiation.pdf" target="_blank" rel="noopener noreferrer" className="inline-block font-medium rounded-full transition-all duration-300 text-center px-8 py-3 bg-primary text-white hover:bg-dark">
                  Découvrir le programme
                </a>
                <a href="#catalogue" className="text-lg text-gray-700 hover:text-primary transition-colors underline">
                  Découvrir notre catalogue de formation
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
                <div className="flex gap-3 text-xs mb-3">
                  <a href="/2025 - Gérer le handicap - Guide à destination du public.pdf" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Guide PSH<sup>*</sup></a>
                  <a href="https://formation.side-quest.io/conditions-generales-d-utilisation-copie/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">CGU</a>
                  <a href="https://formation.side-quest.io/cgv-copie/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">CGV</a>
                  <a href="https://formation.side-quest.io/politique-de-confidentialite-copie/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Confidentialité</a>
                  <a href="https://formation.side-quest.io/reglement-interieur-copie/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Règlement</a>
                </div>
                <p className="italic text-gray-500">
                  <sup>*</sup>Des aménagements sont possibles sur demande avec étude au cas par cas. <a href="/contact" className="text-primary hover:underline">Contactez-nous</a>. Vous pouvez consulter notre guide sur la prise en compte des situations de handicap. <a href="/V2 Programme -  médiation.pdf" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Cliquez-ici</a>
                </p>
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

      {/* Catalogue de formations */}
      <Section background="white" id="catalogue">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-serif font-normal text-gray-900 mb-4 leading-tight">
              Nos thématiques d'expertise
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez ce sur quoi nous pouvons vous accompagner
            </p>
          </div>

          {/* Filtres - Mobile (select) */}
          <div className="md:hidden mb-12">
            <select
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent text-gray-700 font-medium"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Filtres - Desktop (radio buttons) */}
          <div className="hidden md:flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <label
                key={category}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <input
                  type="radio"
                  name="category"
                  checked={selectedCategory === category}
                  onChange={() => handleCategoryChange(category)}
                  className="appearance-none w-5 h-5 border-2 border-gray-300 rounded-full cursor-pointer transition-all duration-200 checked:border-primary checked:border-[6px] hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                <span className={`text-base font-medium transition-colors ${
                  selectedCategory === category
                    ? 'text-primary'
                    : 'text-gray-600 group-hover:text-gray-900'
                }`}>
                  {category}
                </span>
              </label>
            ))}
          </div>

          {/* Nombre de formations affichées */}
          <div className="text-center mb-8">
            <p className="text-gray-600">
              {filteredFormations.length} formation{filteredFormations.length > 1 ? 's' : ''} disponible{filteredFormations.length > 1 ? 's' : ''}
              {totalPages > 1 && ` • Page ${currentPage} sur ${totalPages}`}
            </p>
          </div>

          {/* Grid de formations */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {currentFormations.map((formation, index) => (
              <div key={index} className="bg-beige-light rounded-2xl p-6 transition-all duration-300 hover:shadow-lg">
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                    {formation.category}
                  </span>
                </div>
                <h4 className="text-lg font-serif font-semibold text-gray-900 mb-3">
                  {formation.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {formation.description}
                </p>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mb-12">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  currentPage === 1
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-beige-light text-gray-700 hover:bg-primary hover:text-white'
                }`}
              >
                ←
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-medium transition-all ${
                    currentPage === page
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-beige-light text-gray-700 hover:bg-beige hover:shadow-md'
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  currentPage === totalPages
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-beige-light text-gray-700 hover:bg-primary hover:text-white'
                }`}
              >
                →
              </button>
            </div>
          )}

          <div className="text-center">
            <p className="text-lg text-gray-600 mb-6">
              Nous avons déjà formé nos collaborateurs sur le sujet, découvrez leur appréciation
            </p>
            <a href="/V2 Programme -  médiation.pdf" target="_blank" rel="noopener noreferrer" className="inline-block font-medium rounded-full transition-all duration-300 text-center px-8 py-4 text-lg bg-primary text-white hover:bg-dark hover:text-white">
              Programme détaillé
            </a>
          </div>
        </div>
      </Section>

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
