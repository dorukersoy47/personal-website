"use client";

import React from "react";
import Image from "next/image";
import type { Project } from "../../data/types";

interface ProjectModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
    React.useEffect(() => {
        if (isOpen && typeof document !== 'undefined') {
            // Prevent scroll on body
            document.body.style.overflow = 'hidden';
            
            // Add escape key listener
            const handleEscape = (e: KeyboardEvent) => {
                if (e.key === 'Escape') {
                    onClose();
                }
            };
            
            document.addEventListener('keydown', handleEscape);
            
            // Cleanup function
            return () => {
                if (typeof document !== 'undefined') {
                    document.body.style.overflow = '';
                }
                document.removeEventListener('keydown', handleEscape);
            };
        }
        
        // Ensure cleanup when modal closes
        return () => {
            if (typeof document !== 'undefined') {
                document.body.style.overflow = '';
            }
        };
    }, [isOpen, onClose]);

    if (!isOpen || !project) return null;

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const stop = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
        e.stopPropagation();
    };

    return (
        <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={handleBackdropClick}
        >
            <div className="bg-dark-gray rounded-2xl shadow-2xl border-2 border-white/20 max-w-4xl w-full max-h-[90vh] overflow-auto">
                {/* Header */}
                <div className="flex items-start justify-between p-6 border-b border-white/10">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-light-purple mb-2">
                            {project.title}
                        </h2>
                        <span className="inline-block px-3 py-1 text-accent text-sm font-semibold bg-accent/10 rounded-full">
                            {Array.isArray(project.type) ? project.type.join(' & ') : project.type}
                        </span>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-white transition-colors duration-200 p-2"
                        aria-label="Close modal"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                    {/* Image */}
                    {project.imageSrc && (
                        <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden bg-gray/50">
                            <Image
                                src={project.imageSrc}
                                alt={project.imageAlt || project.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    )}

                    {/* Status and Date */}
                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2">
                            <span className="text-gray-400">Status:</span>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                project.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                                project.status === 'Archived' ? 'bg-yellow-500/20 text-yellow-400' :
                                'bg-red-500/20 text-red-400'
                            }`}>
                                {project.status}
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-gray-400">Completed:</span>
                            <span className="text-white">
                                {project.dateDone.toLocaleDateString('en-US', {year: 'numeric'})}
                            </span>
                        </div>
                    </div>

                    {/* Technical Description */}
                    <div>
                        <h3 className="text-xl font-semibold text-light-purple mb-3">Technical Overview</h3>
                        <p className="text-gray-300 leading-relaxed">{project.desc_tech}</p>
                    </div>

                    {/* Reflection */}
                    <div>
                        <h3 className="text-xl font-semibold text-light-purple mb-3">Reflection</h3>
                        <p className="text-gray-300 leading-relaxed">{project.desc_refl}</p>
                    </div>

                    {/* Skills */}
                    {project.skillsList && project.skillsList.length > 0 && (
                        <div>
                            <h3 className="text-xl font-semibold text-light-purple mb-3">Technologies & Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.skillsList
                                    .filter(skill => skill && skill.name) // Filter out null/undefined skills
                                    .map((skill, index) => (
                                        <span
                                            key={`${skill.id || skill.name}-${index}`} // More unique key with index
                                            className="px-3 py-1 bg-light-purple/20 text-light-purple text-sm rounded-full border border-light-purple/30"
                                        >
                                            {skill.name}
                                        </span>
                                    ))}
                            </div>
                        </div>
                    )}

                    {/* Action Buttons */}
                    <div className="pt-4 border-t border-white/10">
                        {/* Research project - only paper */}
                        {project.docSrc && !project.demoUrl && !project.githubUrl && (
                            <a
                                href={project.docSrc}
                                download
                                onClick={stop}
                                className="inline-block w-full"
                            >
                                <button
                                    type="button"
                                    className="w-full px-6 py-3 bg-light-purple text-dark-gray font-bold rounded-lg shadow border-2 border-white
                                               transition-transform duration-200 ease-out transform-gpu
                                               hover:-translate-y-0.5 hover:scale-[1.02]
                                               active:translate-y-0 active:scale-[0.98]"
                                >
                                    Paper
                                </button>
                            </a>
                        )}

                        {/* Only GitHub available */}
                        {project.githubUrl && !project.demoUrl && !project.docSrc && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={stop}
                                className="inline-block w-full"
                            >
                                <button
                                    type="button"
                                    className="w-full px-6 py-3 bg-light-purple text-dark-gray font-bold rounded-lg shadow border-2 border-white
                                               transition-transform duration-200 ease-out transform-gpu
                                               hover:-translate-y-0.5 hover:scale-[1.02]
                                               active:translate-y-0 active:scale-[0.98]"
                                >
                                    GitHub
                                </button>
                            </a>
                        )}

                        {/* Demo and GitHub (most common combination) */}
                        {project.demoName && project.demoUrl && project.githubUrl && (
                            <div className="flex gap-3">
                                <a
                                    href={project.demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={stop}
                                    className="flex-1"
                                >
                                    <button
                                        type="button"
                                        className="w-full px-6 py-3 bg-light-purple text-dark-gray font-bold rounded-lg shadow border-2 border-white
                                                   transition-transform duration-200 ease-out transform-gpu
                                                   hover:-translate-y-0.5 hover:scale-[1.02]
                                                   active:translate-y-0 active:scale-[0.98]"
                                    >
                                        {project.demoName}
                                    </button>
                                </a>
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={stop}
                                    className="flex-1"
                                >
                                    <button
                                        type="button"
                                        className="w-full px-6 py-3 bg-dark-gray text-light-purple font-bold rounded-lg shadow border-2 border-light-purple
                                                   transition-transform duration-200 ease-out transform-gpu
                                                   hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-accent hover:text-dark-gray
                                                   active:translate-y-0 active:scale-[0.98]"
                                    >
                                        GitHub
                                    </button>
                                </a>
                            </div>
                        )}

                        {/* Other combinations - fallback to flexible layout */}
                        {((project.demoUrl && project.demoName) || project.githubUrl || project.docSrc) && 
                         !((project.docSrc && !project.demoUrl && !project.githubUrl) ||
                           (project.githubUrl && !project.demoUrl && !project.docSrc) ||
                           (project.demoName && project.demoUrl && project.githubUrl)) && (
                            <div className="flex flex-wrap gap-3">
                                {project.demoName && project.demoUrl && (
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={stop}
                                        className="inline-block"
                                    >
                                        <button
                                            type="button"
                                            className="px-6 py-3 bg-light-purple text-dark-gray font-bold rounded-lg shadow border-2 border-white
                                                       transition-transform duration-200 ease-out transform-gpu
                                                       hover:-translate-y-0.5 hover:scale-[1.02]
                                                       active:translate-y-0 active:scale-[0.98]"
                                        >
                                            {project.demoName}
                                        </button>
                                    </a>
                                )}

                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={stop}
                                        className="inline-block"
                                    >
                                        <button
                                            type="button"
                                            className="px-6 py-3 bg-dark-gray text-light-purple font-bold rounded-lg shadow border-2 border-light-purple
                                                       transition-transform duration-200 ease-out transform-gpu
                                                       hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-accent hover:text-dark-gray
                                                       active:translate-y-0 active:scale-[0.98]"
                                        >
                                            GitHub
                                        </button>
                                    </a>
                                )}

                                {project.docSrc && (
                                    <a
                                        href={project.docSrc}
                                        download
                                        onClick={stop}
                                        className="inline-block"
                                    >
                                        <button
                                            type="button"
                                            className="px-6 py-3 bg-dark-gray text-light-purple font-bold rounded-lg shadow border-2 border-light-purple
                                                       transition-transform duration-200 ease-out transform-gpu
                                                       hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-accent hover:text-dark-gray
                                                       active:translate-y-0 active:scale-[0.98]"
                                        >
                                            Paper
                                        </button>
                                    </a>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;