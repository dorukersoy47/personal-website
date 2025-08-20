import React from "react";
import Link from "next/link";
import type { Project } from "../../data/projects";

interface ProjectBlockProps {
    project: Project;
}

/**
 * Compact project card (no Framer Motion needed here)
 * - No tech tags
 * - Buttons pinned to the bottom
 * - Hover/active animations via Tailwind transforms
 */
const ProjectBlock: React.FC<ProjectBlockProps> = ({ project }) => {
    const pagePath =
        (project as any).pagePath ??
        ((project as any).slug ? `/projects/${(project as any).slug}` : `/projects/${project.id}`);

    const handleCardClick = () => {
        if (typeof window !== "undefined") {
            window.location.href = pagePath;
        }
    };

    // Prevent card click when interacting with inner buttons/links
    const stop = (e: React.MouseEvent | React.KeyboardEvent) => {
        e.stopPropagation();
    };

    return (
        <div
            className="group bg-dark-gray rounded-2xl shadow-lg border-2 border-white/10 hover:border-accent transition-all cursor-pointer overflow-hidden w-full max-w-sm md:max-w-[340px] flex flex-col"
            onClick={handleCardClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleCardClick();
                }
            }}
        >
            {/* Image */}
            {project.imageSrc && (
                <img
                    src={project.imageSrc}
                    alt={project.imageAlt || project.title}
                    className="w-full h-32 sm:h-36 object-cover"
                />
            )}

            {/* Body */}
            <div className="flex flex-col flex-1 p-4 sm:p-5">
                {/* Title + type */}
                <h3
                    className="text-lg sm:text-xl font-bold text-light-purple truncate"
                    title={project.title}
                >
                    {project.title}
                </h3>
                <span className="block text-accent text-xs sm:text-sm font-semibold mt-1 mb-3">
                    {project.type}
                </span>

                {/* Spacer to push buttons down */}
                <div className="flex-1" />

                {/* Buttons (bottomized) */}
                <div className="flex flex-col gap-2 w-full">
                    {/* External URLs row */}
                    <div className="flex gap-2">
                        {project.demoName && project.demoUrl && (
                            <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1"
                                onClick={stop}
                            >
                                <button
                                    type="button"
                                    onClick={stop}
                                    className="w-full px-3 py-1.5 text-sm bg-light-purple text-dark-gray font-bold rounded-lg shadow border-2 border-white
                                               transition-transform duration-200 ease-out transform-gpu
                                               hover:-translate-y-0.5 hover:scale-[1.02]
                                               active:translate-y-0 active:scale-[0.98]
                                               focus:outline-none focus-visible:ring-2 focus-visible:ring-light-purple/70"
                                    aria-label={`${project.demoName} (opens in new tab)`}
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
                                className="flex-1"
                                onClick={stop}
                            >
                                <button
                                    type="button"
                                    onClick={stop}
                                    className="w-full px-3 py-1.5 text-sm bg-dark-gray text-light-purple font-bold rounded-lg shadow border-2 border-light-purple
                                               transition-transform duration-200 ease-out transform-gpu
                                               hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-accent hover:text-dark-gray
                                               active:translate-y-0 active:scale-[0.98]
                                               focus:outline-none focus-visible:ring-2 focus-visible:ring-light-purple/70"
                                    aria-label="GitHub repository (opens in new tab)"
                                >
                                    GitHub
                                </button>
                            </a>
                        )}

                        {project.documentSrc && (
                            <a href={project.documentSrc} download className="flex-1" onClick={stop}>
                                <button
                                    type="button"
                                    onClick={stop}
                                    className="w-full px-3 py-1.5 text-sm bg-dark-gray text-light-purple font-bold rounded-lg shadow border-2 border-light-purple
                                               transition-transform duration-200 ease-out transform-gpu
                                               hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-accent hover:text-dark-gray
                                               active:translate-y-0 active:scale-[0.98]
                                               focus:outline-none focus-visible:ring-2 focus-visible:ring-light-purple/70"
                                    aria-label="Download paper"
                                >
                                    Paper
                                </button>
                            </a>
                        )}
                    </div>

                    {/* Open page button (primary) */}
                    <Link href={pagePath} onClick={stop} className="block">
                        <button
                            type="button"
                            onClick={stop}
                            className="w-full px-3 py-2 text-sm sm:text-base bg-light-purple text-dark-gray font-bold rounded-lg shadow border-2 border-white
                                       transition-transform duration-200 ease-out transform-gpu
                                       hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-accent
                                       active:translate-y-0 active:scale-[0.98]
                                       focus:outline-none focus-visible:ring-2 focus-visible:ring-light-purple/70"
                            aria-label={`Open ${project.title} page`}
                        >
                            Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectBlock;