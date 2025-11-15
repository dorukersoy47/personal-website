"use client";

import React, { useState, useMemo } from "react";
import { experiences } from "../../data/experiences";
import type { Experience, ExperienceType } from "../../data/types";

type SortOrder = "newest" | "oldest";

export default function Experience() {
    const [sortOrder, setSortOrder] = useState<SortOrder>("newest");
    const [selectedType, setSelectedType] = useState<ExperienceType | "All">("All");

    // Get unique experience types for filter dropdown
    const experienceTypes: ExperienceType[] = useMemo(() => {
        const types = new Set<ExperienceType>();
        experiences.forEach(experience => {
            experience.type.forEach(type => types.add(type));
        });
        return Array.from(types).sort();
    }, []);

    // Filter and sort experiences
    const filteredAndSortedExperiences = useMemo(() => {
        let filtered = experiences;
        
        // Filter by type
        if (selectedType !== "All") {
            filtered = experiences.filter(experience => 
                experience.type.includes(selectedType as ExperienceType)
            );
        }

        // Sort by date
        const sorted = [...filtered].sort((a, b) => {
            const dateA = a.dateStarted.getTime();
            const dateB = b.dateStarted.getTime();
            return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
        });

        return sorted;
    }, [selectedType, sortOrder]);

    return (
        <div className="min-h-screen pt-20 px-4 sm:px-6 md:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Experience</h1>
                    <p className="text-gray-300 text-lg">
                        My professional journey, internships, and leadership roles.
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
                            onChange={(e) => setSelectedType(e.target.value as ExperienceType | "All")}
                            className="px-4 py-2 rounded-lg bg-gray/20 text-gray-300 
                                     hover:bg-gray/30 focus:outline-none focus:ring-2 focus:ring-light-purple/50
                                     cursor-pointer transition-all duration-200"
                        >
                            <option value="All">All Types</option>
                            {experienceTypes.map(type => (
                                <option key={type} value={type}>
                                    {type}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Results Count */}
                    <div className="flex items-center text-gray-400 text-sm ml-auto">
                        {filteredAndSortedExperiences.length} experience{filteredAndSortedExperiences.length !== 1 ? 's' : ''} found
                    </div>
                </div>

                {/* Experiences Grid */}
                {filteredAndSortedExperiences.length > 0 ? (
                    <div className="space-y-6 mb-12">
                        {filteredAndSortedExperiences.map((experience) => (
                            <div key={experience.id} className="bg-dark-gray/50 rounded-xl p-6 md:p-8 border border-white/10">
                                {/* Header */}
                                <div className="mb-6">
                                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                                        <div className="flex-1">
                                            <h2 className="text-2xl md:text-3xl font-bold text-light-purple mb-2">
                                                {experience.title}
                                            </h2>
                                            <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                                                {experience.companyLink ? (
                                                    <a 
                                                        href={experience.companyLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="hover:text-accent transition-colors duration-200"
                                                    >
                                                        {experience.company}
                                                    </a>
                                                ) : (
                                                    experience.company
                                                )}
                                            </h3>
                                            <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                                                <span className="flex items-center gap-1">
                                                    📅 {experience.period}
                                                </span>
                                                <div className="flex gap-2">
                                                    {experience.type.map((type, index) => (
                                                        <span key={index} className="inline-block px-2 py-1 bg-accent/20 text-accent rounded-full text-xs font-medium">
                                                            {type}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="space-y-6">
                                    {/* Technical Description */}
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-3">Technical Overview</h4>
                                        <p className="text-gray-300 leading-relaxed">{experience.desc_tech}</p>
                                    </div>

                                    {/* Reflection */}
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-3">Reflection</h4>
                                        <p className="text-gray-300 leading-relaxed">{experience.desc_refl}</p>
                                    </div>

                                    {/* Skills */}
                                    {experience.skillsList && experience.skillsList.length > 0 && (
                                        <div>
                                            <h4 className="text-lg font-semibold text-white mb-3">Skills & Technologies</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {experience.skillsList.map((skill, index) => (
                                                    <span
                                                        key={`${skill.id}-${index}`}
                                                        className="px-3 py-1 bg-light-purple/20 text-light-purple text-sm rounded-full border border-light-purple/30"
                                                    >
                                                        {skill.name}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Related Projects */}
                                    {experience.projectsList && experience.projectsList.length > 0 && (
                                        <div>
                                            <h4 className="text-lg font-semibold text-white mb-3">Related Projects</h4>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                {experience.projectsList.map((project, index) => (
                                                    <div key={`${project.id}-${index}`} className="p-3 bg-white/5 rounded-lg border border-white/10">
                                                        <h5 className="text-white font-medium mb-1">{project.title}</h5>
                                                        <p className="text-xs text-gray-400">
                                                            {Array.isArray(project.type) ? project.type.join(' • ') : project.type}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <div className="text-gray-400 text-lg mb-4">No experiences found</div>
                        <p className="text-gray-500">
                            Try adjusting your filters or search criteria.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
