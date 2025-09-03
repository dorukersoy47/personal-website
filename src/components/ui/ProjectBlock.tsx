// ui/ProjectBlock.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Project } from "../../data/types";

interface ProjectBlockProps {
    project: Project;
}

const ProjectBlock: React.FC<ProjectBlockProps> = ({ project }) => {
    const pagePath =
        (project as { pagePath?: string })?.pagePath ??
        ((project as { slug?: string })?.slug
            ? `/projects/${(project as { slug?: string })?.slug}`
            : `/projects/${project.id}`);
    const stop = (
        e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
    ) => {
        e.stopPropagation();
    };

    return (
        <div
            className="bg-dark-gray rounded-2xl shadow-lg border-2 border-white/10 overflow-hidden 
                       w-full max-w-sm md:max-w-[340px] flex flex-col cursor-default" 
            // ⛔ card is not interactive → normal cursor
        >
            {/* Image */}
            {project.imageSrc && (
                <Image
                    src={project.imageSrc}
                    alt={project.imageAlt || project.title}
                    width={400}
                    height={144}
                    className="w-full h-32 sm:h-36 object-cover"
                    priority
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

                <div className="flex-1" />

                {/* Buttons */}
                <div className="flex flex-col gap-2 w-full">
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
                                    className="cursor-pointer w-full px-3 py-1.5 text-sm bg-light-purple text-dark-gray font-bold rounded-lg shadow border-2 border-white
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
                                className="flex-1"
                                onClick={stop}
                            >
                                <button
                                    type="button"
                                    className="cursor-pointer w-full px-3 py-1.5 text-sm bg-dark-gray text-light-purple font-bold rounded-lg shadow border-2 border-light-purple
                                               transition-transform duration-200 ease-out transform-gpu
                                               hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-accent hover:text-dark-gray
                                               active:translate-y-0 active:scale-[0.98]"
                                >
                                    GitHub
                                </button>
                            </a>
                        )}

                        {project.documentSrc && (
                            <a
                                href={project.documentSrc}
                                download
                                className="flex-1"
                                onClick={stop}
                            >
                                <button
                                    type="button"
                                    className="cursor-pointer w-full px-3 py-1.5 text-sm bg-dark-gray text-light-purple font-bold rounded-lg shadow border-2 border-light-purple
                                               transition-transform duration-200 ease-out transform-gpu
                                               hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-accent hover:text-dark-gray
                                               active:translate-y-0 active:scale-[0.98]"
                                >
                                    Paper
                                </button>
                            </a>
                        )}
                    </div>

                    {/* Details button */}
                    <Link href={pagePath} onClick={stop} className="block">
                        <button
                            type="button"
                            className="cursor-pointer w-full px-3 py-2 text-sm sm:text-base bg-light-purple text-dark-gray font-bold rounded-lg shadow border-2 border-white
                                       transition-transform duration-200 ease-out transform-gpu
                                       hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-accent
                                       active:translate-y-0 active:scale-[0.98]"
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