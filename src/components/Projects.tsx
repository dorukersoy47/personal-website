'use client';

import { useEffect, useState, useRef } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

export default function Projects() {
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

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with Next.js, featuring user authentication, payment processing, and admin dashboard.",
      image: "/project1.jpg",
      technologies: ["Next.js", "React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/project2.jpg",
      technologies: ["React", "Firebase", "TypeScript", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A beautiful weather dashboard that displays current weather, forecasts, and interactive maps with location-based services.",
      image: "/project3.jpg",
      technologies: ["JavaScript", "Weather API", "CSS3", "HTML5"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A modern portfolio website with smooth animations, dark mode, and responsive design showcasing my work and skills.",
      image: "/project4.jpg",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 5,
      title: "Chat Application",
      description: "Real-time chat application with user authentication, message history, and file sharing capabilities.",
      image: "/project5.jpg",
      technologies: ["React", "Socket.io", "Node.js", "Express"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 6,
      title: "Recipe Finder",
      description: "A recipe discovery app that helps users find recipes based on available ingredients and dietary preferences.",
      image: "/project6.jpg",
      technologies: ["React", "Recipe API", "CSS3", "JavaScript"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-gradient-to-br from-dark-gray via-deep-purple to-purple relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-light-purple/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              My <span className="bg-gradient-to-r from-light-purple to-accent bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A showcase of my recent work and the technologies I use to bring ideas to life
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Featured Projects</h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {projects.filter(project => project.featured).map((project) => (
                <div key={project.id} className="group">
                  <div className="bg-gray/20 backdrop-blur-md rounded-2xl border border-purple/20 hover:border-light-purple/40 transition-all duration-300 overflow-hidden hover:scale-105">
                    {/* Project Image Placeholder */}
                    <div className="h-64 bg-gradient-to-br from-purple/20 to-light-purple/20 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-light-purple/30 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-light-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <p className="text-gray-400">Project Image</p>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-light-purple transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="bg-purple/20 text-light-purple px-3 py-1 rounded-full text-sm border border-purple/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Project Links */}
                      <div className="flex gap-4">
                        <a
                          href={project.liveUrl}
                          className="flex-1 bg-gradient-to-r from-purple to-accent text-white text-center py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300"
                        >
                          Live Demo
                        </a>
                        <a
                          href={project.githubUrl}
                          className="flex-1 border-2 border-light-purple text-light-purple text-center py-3 rounded-lg font-semibold hover:bg-light-purple hover:text-white transition-all duration-300"
                        >
                          GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* All Projects Grid */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 text-center">All Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div key={project.id} className="group">
                  <div className="bg-gray/20 backdrop-blur-md rounded-xl border border-purple/20 hover:border-light-purple/40 transition-all duration-300 overflow-hidden hover:scale-105">
                    {/* Project Image Placeholder */}
                    <div className="h-48 bg-gradient-to-br from-purple/20 to-light-purple/20 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-light-purple/30 rounded-full flex items-center justify-center mx-auto mb-2">
                          <svg className="w-6 h-6 text-light-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <p className="text-gray-400 text-sm">Image</p>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-light-purple transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.technologies.slice(0, 3).map((tech, index) => (
                          <span
                            key={index}
                            className="bg-purple/20 text-light-purple px-2 py-1 rounded-full text-xs border border-purple/30"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="bg-purple/20 text-light-purple px-2 py-1 rounded-full text-xs border border-purple/30">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Project Links */}
                      <div className="flex gap-2">
                        <a
                          href={project.liveUrl}
                          className="flex-1 bg-gradient-to-r from-purple to-accent text-white text-center py-2 rounded-lg text-sm font-semibold hover:scale-105 transition-all duration-300"
                        >
                          Demo
                        </a>
                        <a
                          href={project.githubUrl}
                          className="flex-1 border border-light-purple text-light-purple text-center py-2 rounded-lg text-sm font-semibold hover:bg-light-purple hover:text-white transition-all duration-300"
                        >
                          Code
                        </a>
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
              Start a Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 