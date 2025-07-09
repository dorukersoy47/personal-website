'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';
import * as React from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-dark-gray via-deep-purple to-purple backdrop-blur-md border-b border-purple/20 transition-all duration-300">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Menu Button */}
        <button
          onClick={toggleMenu}
          className="relative z-50 p-2 rounded-lg bg-gray/20 border border-purple/30 hover:border-light-purple/50 transition-all duration-300 group"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 mt-1 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 mt-1 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
          </div>
        </button>

        {/* Logo/Name */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-light-purple to-accent bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
            Doruk Ersoy
          </Link>
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-gray/20 border border-purple/30 hover:border-light-purple/50 transition-all duration-300"
        >
          {isDarkMode ? (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m6.01-6.01l.707-.707m12.728 12.728l.707.707M6.01 6.01l-.707-.707m12.728-12.728l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>

        {/* Navigation Menu */}
        <div className={`fixed top-0 left-0 h-full w-80 bg-gray/95 backdrop-blur-md border-r border-purple/30 transform transition-transform duration-300 ease-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="p-8 pt-24">
            <nav className="space-y-6">
              <button
                onClick={() => scrollToSection('hero')}
                className="block w-full text-left text-lg font-semibold text-white hover:text-light-purple transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-purple/20"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-lg font-semibold text-white hover:text-light-purple transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-purple/20"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="block w-full text-left text-lg font-semibold text-white hover:text-light-purple transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-purple/20"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="block w-full text-left text-lg font-semibold text-white hover:text-light-purple transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-purple/20"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="block w-full text-left text-lg font-semibold text-white hover:text-light-purple transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-purple/20"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left text-lg font-semibold text-white hover:text-light-purple transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-purple/20"
              >
                Contact
              </button>
            </nav>

            {/* Individual Page Links */}
            <div className="mt-12 pt-8 border-t border-purple/30">
              <h3 className="text-sm font-semibold text-gray-400 mb-4">Individual Pages</h3>
              <div className="space-y-3">
                <Link href="/about" className="block text-sm text-white hover:text-light-purple transition-colors duration-300">
                  About Page
                </Link>
                <Link href="/experience" className="block text-sm text-white hover:text-light-purple transition-colors duration-300">
                  Experience Page
                </Link>
                <Link href="/projects" className="block text-sm text-white hover:text-light-purple transition-colors duration-300">
                  Projects Page
                </Link>
                <Link href="/skills" className="block text-sm text-white hover:text-light-purple transition-colors duration-300">
                  Skills Page
                </Link>
                <Link href="/contact" className="block text-sm text-white hover:text-light-purple transition-colors duration-300">
                  Contact Page
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setIsMenuOpen(false)}
          ></div>
        )}
      </div>
    </header>
  );
} 