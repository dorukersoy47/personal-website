'use client';

import { useEffect, useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

export default function Hero() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-dark-gray via-deep-purple to-purple transition-all duration-500">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-light-purple/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Greeting */}
          <p className="text-light-purple text-lg md:text-xl font-medium mb-4 animate-fade-in">
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 animate-bounce-in">
            <span className="bg-gradient-to-r from-light-purple via-accent to-purple bg-clip-text text-transparent">
              Doruk Ersoy
            </span>
          </h1>

          {/* Title */}
          <h2 className="text-2xl md:text-4xl text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Full Stack Developer
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            I create beautiful, functional, and user-friendly web experiences. 
            Passionate about modern technologies and clean code.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-purple to-accent text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple/25"
            >
              View My Work
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-light-purple text-light-purple font-semibold rounded-lg hover:bg-light-purple hover:text-white transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-light-purple rounded-full flex justify-center">
              <div className="w-1 h-3 bg-light-purple rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 