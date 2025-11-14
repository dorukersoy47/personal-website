"use client";

import React, { useState, useMemo } from "react";
import { projects } from "../../data/projects";
import { useModal } from "../../contexts/ModalContext";
import ProjectBlock from "../ui/ProjectBlock";
import ProjectModal from "../ui/ProjectModal";
import type { Project, ProjectType } from "../../data/types";

type SortOrder = "newest" | "oldest";

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [sortOrder, setSortOrder] = useState<SortOrder>("newest");
    const [selectedType, setSelectedType] = useState<ProjectType | "All">("All");
    const { isModalOpen, setIsModalOpen } = useModal();

    // Get unique project types for filter dropdown
    const projectTypes: ProjectType[] = useMemo(() => {
        const types = new Set<ProjectType>();
        projects.forEach(project => {
            project.type.forEach(type => types.add(type));
        });
        return Array.from(types).sort();
    }, []);

    // Filter and sort projects
    const filteredAndSortedProjects = useMemo(() => {
        let filtered = projects;
        
        // Filter by type
        if (selectedType !== "All") {
            filtered = projects.filter(project => 
                project.type.includes(selectedType as ProjectType)
            );
        }

        // Sort by date
        const sorted = [...filtered].sort((a, b) => {
            const dateA = a.dateDone.getTime();
            const dateB = b.dateDone.getTime();
            return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
        });

        return sorted;
    }, [selectedType, sortOrder]);

    const handleProjectDetailsClick = (project: Project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
        // Force scroll restoration as a safety measure
        if (typeof document !== 'undefined') {
            document.body.style.overflow = '';
        }
    };

    return (
        <div className="min-h-screen pt-20 px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Projects</h1>
                    <p className="text-gray-300 text-lg">
                        A collection of my work across web development, AI, game development, and research.
                    </p>
                </div>

                {/* Controls */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8 p-4 bg-dark-gray/50 rounded-xl border border-white/10">
                    {/* Sort Controls */}
                    <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
                        <span className="text-gray-300 font-bold whitespace-nowrap">Sort by:</span>
                        <div className="flex gap-2">
                            <button
                                onClick={() => setSortOrder("newest")}
                                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                                    sortOrder === "newest"
                                        ? "bg-light-purple text-dark-gray border-2 border-white"
                                        : "bg-gray/20 text-gray-300 hover:bg-gray/30"
                                }`}
                            >
                                Newest First
                            </button>
                            <button
                                onClick={() => setSortOrder("oldest")}
                                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                                    sortOrder === "oldest"
                                        ? "bg-light-purple text-dark-gray border-2 border-white"
                                        : "bg-gray/20 text-gray-300 hover:bg-gray/30"
                                }`}
                            >
                                Oldest First
                            </button>
                        </div>
                    </div>

                    {/* Filter Controls */}
                    <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
                        <span className="text-gray-300 font-bold whitespace-nowrap">Filter by:</span>
                        <select
                            value={selectedType}
                            onChange={(e) => setSelectedType(e.target.value as ProjectType | "All")}
                            className="px-4 py-2 rounded-lg bg-gray/20 text-gray-300 
                                     hover:bg-gray/30 focus:outline-none focus:ring-2 focus:ring-light-purple/50
                                     cursor-pointer transition-all duration-200"
                        >
                            <option value="All">All Types</option>
                            {projectTypes.map(type => (
                                <option key={type} value={type}>
                                    {type}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Results Count */}
                    <div className="flex items-center text-gray-400 text-sm ml-auto">
                        {filteredAndSortedProjects.length} project{filteredAndSortedProjects.length !== 1 ? 's' : ''} found
                    </div>
                </div>

                {/* Projects Grid */}
                {filteredAndSortedProjects.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {filteredAndSortedProjects.map((project) => (
                            <div key={project.id} className="flex justify-center">
                                <ProjectBlock
                                    project={project}
                                    onDetailsClick={handleProjectDetailsClick}
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <div className="text-gray-400 text-lg mb-4">No projects found</div>
                        <p className="text-gray-500">
                            Try adjusting your filters or search criteria.
                        </p>
                    </div>
                )}

                {/* Project Modal */}
                <ProjectModal
                    project={selectedProject}
                    isOpen={isModalOpen}
                    onClose={closeModal}
                />
            </div>
        </div>
    );
}
