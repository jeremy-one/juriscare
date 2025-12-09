import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-beige-light">
      <div className="text-center px-6">
        <h1 className="text-8xl font-serif font-normal text-primary mb-4">404</h1>
        <h2 className="text-3xl font-serif text-gray-900 mb-4">Page non trouvée</h2>
        <p className="text-xl text-gray-600 mb-10 max-w-md mx-auto">
          Désolé, la page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <Link 
          href="/" 
          className="inline-block font-medium rounded-full transition-all duration-300 text-center px-10 py-4 text-lg bg-primary text-white hover:bg-dark"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}
