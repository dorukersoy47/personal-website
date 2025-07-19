'use client';


import { useEffect, useState, useRef } from 'react';
import { experiences } from "../data/experience";
import type { Experience } from "../data/experience";

export default function Experience() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  // ...existing code...

  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-gradient-to-br from-dark-gray via-deep-purple to-purple relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-light-purple/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              My <span className="bg-gradient-to-r from-light-purple to-accent bg-clip-text text-transparent">Experiences</span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-light-purple via-purple to-accent"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={exp.id} className={`relative flex items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-light-purple rounded-full border-4 border-deep-purple z-10"></div>

                  {/* Content Card */}
                  <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <div className="bg-gray/20 backdrop-blur-md p-8 rounded-2xl border border-purple/20 hover:border-light-purple/40 transition-all duration-300 hover:scale-105">
                      {/* Badge */}
                      <div className="inline-block bg-gradient-to-r from-purple to-accent text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                        {exp.type}
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {exp.title}
                      </h3>

                      {/* Company & Period */}
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-light-purple font-semibold">
                          {exp.company}
                        </span>
                        <span className="text-gray-400 text-sm">
                          {exp.period}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="bg-purple/20 text-light-purple px-3 py-1 rounded-full text-sm border border-purple/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-purple to-accent text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple/25"
            >
              Let's Work Together
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 