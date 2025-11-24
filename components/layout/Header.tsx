'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/juriscare.svg"
              alt="Juriscare"
              width={160}
              height={40}
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[var(--primary)] transition-colors font-medium">
              Accueil
            </Link>
            <Link href="/mediateurs" className="text-gray-700 hover:text-[var(--primary)] transition-colors font-medium">
              Médiateurs
            </Link>
            <Link href="/mediation" className="text-gray-700 hover:text-[var(--primary)] transition-colors font-medium">
              Médiation
            </Link>
            <Link
              href="/contact"
              className="bg-[var(--primary)] text-white px-6 py-2.5 rounded-full hover:bg-[var(--primary-dark)] transition-all shadow-md hover:shadow-lg"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 w-full bg-gray-700 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-0.5 w-full bg-gray-700 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-full bg-gray-700 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-[var(--primary)] transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link
                href="/mediateurs"
                className="text-gray-700 hover:text-[var(--primary)] transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Médiateurs
              </Link>
              <Link
                href="/mediation"
                className="text-gray-700 hover:text-[var(--primary)] transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Médiation
              </Link>
              <Link
                href="/contact"
                className="bg-[var(--primary)] text-white px-6 py-2.5 rounded-full hover:bg-[var(--primary-dark)] transition-all text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
