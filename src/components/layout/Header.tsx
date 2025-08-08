import React, { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="relative flex items-center justify-center px-4 py-3 shadow-md border-b-2 border-black" style={{ background: 'linear-gradient(180deg, #0d031a, #1a0b2e, #0f0f0f)' }}>
        <button
          className="text-light-purple hover:text-accent focus:outline-none transition-colors duration-200 absolute left-4 top-1/2 -translate-y-1/2 z-[100]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          style={{ pointerEvents: 'auto' }}
        >
          {isOpen ? (
            // Close icon
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ pointerEvents: 'auto' }}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            // Hamburger icon
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
        <div className="mx-auto">
          <Link href="/">
            <span className="text-xl font-bold text-light-purple tracking-wide select-none hover:text-accent transition-colors cursor-pointer">Doruk Ersoy</span>
          </Link>
        </div>
        <div className="flex items-center gap-3 absolute right-4 top-1/2 -translate-y-1/2">
          <a href="/Resume-Doruk%20Ersoy.pdf" download className="text-light-purple hover:text-accent transition-colors" aria-label="Download Resume" title="Download Resume">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M13 9L15 15L17 9M10 15C9.06812 15 8.60218 15 8.23463 14.8478C7.74458 14.6448 7.35523 14.2554 7.15224 13.7654C7 13.3978 7 12.9319 7 12C7 11.0681 7 10.6022 7.15224 10.2346C7.35523 9.74458 7.74458 9.35523 8.23463 9.15224C8.60218 9 9.06812 9 10 9M7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V7.2C20 6.0799 20 5.51984 19.782 5.09202C19.5903 4.71569 19.2843 4.40973 18.908 4.21799C18.4802 4 17.9201 4 16.8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a href="https://github.com/dorukersoy47" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-light-purple hover:text-accent transition-colors">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.338 4.695-4.566 4.944.36.31.68.921.68 1.857 0 1.34-.012 2.421-.012 2.751 0 .267.18.577.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/></svg>
          </a>
          <a href="https://linkedin.com/in/doruk-ersoy" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-light-purple hover:text-accent transition-colors">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
          </a>
          <a href="https://instagram.com/doruk_ersoy" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-light-purple hover:text-accent transition-colors">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.13.62a1.13 1.13 0 1 1-2.26 0 1.13 1.13 0 0 1 2.26 0z"/></svg>
          </a>
        </div>
      </div>

      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
        aria-hidden={!isOpen}
      />

      {/* Sidebar */}
      <nav
        className={`fixed top-0 left-0 h-full w-64 shadow-lg z-50 transform transition-transform duration-300 border-r-2 border-black ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        style={{ background: 'linear-gradient(90deg, #0d031a, #1a0b2e, #0f0f0f)' }}
        aria-label="Main navigation"
      >
        <ul className="flex flex-col gap-4 mt-20 px-6 text-lg text-light-purple">
          <li><Link href='/' onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors">Home</Link></li>
          <li><Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors">About Me</Link></li>
          <li><Link href="/education" onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors">Education</Link></li>
          <li><Link href="/extracurricular" onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors">Extracurricular</Link></li>
          <li><Link href="/projects" onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors">Projects</Link></li>
          <li><Link href="/experience" onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors">Experience</Link></li>
          <li><Link href="/skills" onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors">Skills</Link></li>
          <li><Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors">Contact Me</Link></li>
        </ul>
      </nav>
    </header>
  );
}
 