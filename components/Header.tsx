'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 text-white transition-all duration-300 ${isScrolled
      ? 'bg-gradient-to-r from-indigo-600/95 via-purple-600/95 to-pink-600/95 backdrop-blur-md shadow-2xl py-2'
      : 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-lg py-4'
      }`}>
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center hover:opacity-80 transition-all duration-300">
            <Image
              src="/logo.png"
              alt="MyWebsite Logo"
              width={180}
              height={50}
              priority
              className={`w-auto transition-all duration-300 ${isScrolled ? 'h-8' : 'h-10'}`}
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <Link
                href="/"
                className="hover:text-pink-200 transition-colors duration-300 font-medium"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-pink-200 transition-colors duration-300 font-medium"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="hover:text-pink-200 transition-colors duration-300 font-medium"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/testimonials"
                className="hover:text-pink-200 transition-colors duration-300 font-medium"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-pink-200 transition-colors duration-300 font-medium"
              >
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Hamburger Icon */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none hover:opacity-80 transition-opacity relative z-[60]"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-[60] transition-opacity duration-300 md:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        onClick={closeMenu}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-gradient-to-b from-indigo-700 via-purple-700 to-pink-700 shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out md:hidden overflow-y-auto ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="p-6 min-h-full">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Menu</h2>
            <button
              onClick={closeMenu}
              className="text-white hover:opacity-80 transition-opacity"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <ul className="space-y-6">
            <li>
              <Link
                href="/"
                className="block text-lg font-medium hover:text-pink-200 transition-colors duration-300"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block text-lg font-medium hover:text-pink-200 transition-colors duration-300"
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="block text-lg font-medium hover:text-pink-200 transition-colors duration-300"
                onClick={closeMenu}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/testimonials"
                className="block text-lg font-medium hover:text-pink-200 transition-colors duration-300"
                onClick={closeMenu}
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block text-lg font-medium hover:text-pink-200 transition-colors duration-300"
                onClick={closeMenu}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
