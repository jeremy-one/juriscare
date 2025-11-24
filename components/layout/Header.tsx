'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavHovered, setIsNavHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const shouldShowWhiteBg = isScrolled || isNavHovered;

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      shouldShowWhiteBg
        ? 'bg-white shadow-md'
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/juriscare.svg"
              alt="Juriscare"
              className="h-12 w-auto transition-all duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`hover:text-primary hover:underline transition-colors font-medium ${
                shouldShowWhiteBg ? 'text-gray-700' : 'text-white'
              }`}
              onMouseEnter={() => !isScrolled && setIsNavHovered(true)}
              onMouseLeave={() => setIsNavHovered(false)}
            >
              Accueil
            </Link>
            <Link
              href="/mediateurs"
              className={`hover:text-primary hover:underline transition-colors font-medium ${
                shouldShowWhiteBg ? 'text-gray-700' : 'text-white'
              }`}
              onMouseEnter={() => !isScrolled && setIsNavHovered(true)}
              onMouseLeave={() => setIsNavHovered(false)}
            >
              Médiateurs
            </Link>
            <Link
              href="/mediation"
              className={`hover:text-primary hover:underline transition-colors font-medium ${
                shouldShowWhiteBg ? 'text-gray-700' : 'text-white'
              }`}
              onMouseEnter={() => !isScrolled && setIsNavHovered(true)}
              onMouseLeave={() => setIsNavHovered(false)}
            >
              Médiation
            </Link>
            <Link
              href="/contact"
              className="bg-primary text-white px-6 py-2.5 rounded-full hover:bg-dark hover:text-white transition-all shadow-md hover:shadow-xl"
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
              <span className={`block h-0.5 w-full transition-all ${
                shouldShowWhiteBg ? 'bg-gray-700' : 'bg-white'
              } ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-0.5 w-full transition-all ${
                shouldShowWhiteBg ? 'bg-gray-700' : 'bg-white'
              } ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-full transition-all ${
                shouldShowWhiteBg ? 'bg-gray-700' : 'bg-white'
              } ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link
                href="/mediateurs"
                className="text-gray-700 hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Médiateurs
              </Link>
              <Link
                href="/mediation"
                className="text-gray-700 hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Médiation
              </Link>
              <Link
                href="/contact"
                className="bg-primary text-white px-6 py-2.5 rounded-full hover:bg-dark hover:text-white transition-all text-center shadow-md hover:shadow-xl"
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
