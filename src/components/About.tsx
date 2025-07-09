'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

export default function About() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gradient-to-br from-dark-gray via-deep-purple to-purple relative overflow-hidden transition-all duration-500">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-light-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-light-purple to-accent bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-light-purple to-accent mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="bg-gray/20 backdrop-blur-md p-8 rounded-2xl border border-purple/20 hover:border-light-purple/40 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">Who I Am</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm a passionate Full Stack Developer with a love for creating beautiful, functional, and user-friendly web experiences. 
                I believe in writing clean, maintainable code and staying up-to-date with the latest technologies and best practices.
              </p>
            </div>

            <div className="bg-gray/20 backdrop-blur-md p-8 rounded-2xl border border-purple/20 hover:border-light-purple/40 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">My Approach</h3>
              <p className="text-gray-300 leading-relaxed">
                I focus on creating scalable solutions that not only meet current requirements but also adapt to future needs. 
                My development process emphasizes user experience, performance, and code quality.
              </p>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray/20 backdrop-blur-md p-6 rounded-xl border border-purple/20 text-center hover:border-light-purple/40 transition-all duration-300">
              <div className="text-3xl font-bold text-light-purple mb-2">3+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div className="bg-gray/20 backdrop-blur-md p-6 rounded-xl border border-purple/20 text-center hover:border-light-purple/40 transition-all duration-300">
              <div className="text-3xl font-bold text-light-purple mb-2">50+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="bg-gray/20 backdrop-blur-md p-6 rounded-xl border border-purple/20 text-center hover:border-light-purple/40 transition-all duration-300">
              <div className="text-3xl font-bold text-light-purple mb-2">15+</div>
              <div className="text-gray-300">Technologies</div>
            </div>
            <div className="bg-gray/20 backdrop-blur-md p-6 rounded-xl border border-purple/20 text-center hover:border-light-purple/40 transition-all duration-300">
              <div className="text-3xl font-bold text-light-purple mb-2">100%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16">
          <div className="bg-gray/20 backdrop-blur-md p-8 rounded-2xl border border-purple/20 hover:border-light-purple/40 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-6">What I Do</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Frontend Development</h4>
                <p className="text-gray-300 text-sm">Creating responsive and interactive user interfaces with modern frameworks.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Backend Development</h4>
                <p className="text-gray-300 text-sm">Building robust APIs and server-side applications with scalable architecture.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Mobile Development</h4>
                <p className="text-gray-300 text-sm">Developing cross-platform mobile applications with native performance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 