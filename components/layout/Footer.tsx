import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="col-span-1 md:col-span-2">
            <img
              src="/juriscare.svg"
              alt="Juriscare"
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Plateforme au service de la médiation : nous donnons les moyens aux médiateurs d&apos;exercer leur mission avec sérénité.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/mediateurs" className="text-gray-400 hover:text-white transition-colors">
                  Médiateurs
                </Link>
              </li>
              <li>
                <Link href="/mediation" className="text-gray-400 hover:text-white transition-colors">
                  Médiation
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Informations légales */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Informations</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://formation.side-quest.io/conditions-generales-d-utilisation-copie/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  CGU
                </a>
              </li>
              <li>
                <a href="https://formation.side-quest.io/cgv-copie/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  CGV
                </a>
              </li>
              <li>
                <a href="https://formation.side-quest.io/politique-de-confidentialite-copie/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a href="https://formation.side-quest.io/reglement-interieur-copie/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  Règlement intérieur
                </a>
              </li>
              <li>
                <a href="/2025 - Gérer le handicap - Guide à destination du public.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  Guide PSH
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Juriscare. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
