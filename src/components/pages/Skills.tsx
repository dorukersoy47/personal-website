"use client";

import React, { useState, useMemo } from "react";
import { skills } from "../../data/skills";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as PiIcons from "react-icons/pi";
import * as BiIcons from "react-icons/bi";
import * as GiIcons from "react-icons/gi";
import * as BsIcons from "react-icons/bs";
import * as IoIcons from "react-icons/io5";
import * as FcIcons from "react-icons/fc";
import * as RiIcons from "react-icons/ri";

type IconModule = { [key: string]: React.ComponentType<unknown> };
const fa = FaIcons as IconModule;
const si = SiIcons as IconModule;
const pi = PiIcons as IconModule;
const bi = BiIcons as IconModule;
const gi = GiIcons as IconModule;
const bs = BsIcons as IconModule;
const io = IoIcons as IconModule;
const fc = FcIcons as IconModule;
const ri = RiIcons as IconModule;

type ProficiencyLevel = "Expert" | "Advanced" | "Intermediate" | "Beginner";

export default function Skills() {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");

    // Get unique skill categories for filter dropdown
    const categories = useMemo(() => {
        return skills.map(group => group.category).sort();
    }, []);

    // Filter skills by category
    const filteredSkills = useMemo(() => {
        if (selectedCategory === "All") {
            return skills;
        }
        return skills.filter(group => group.category === selectedCategory);
    }, [selectedCategory]);

    // Get proficiency color for skill names
    const getNameColor = (proficiency: string) => {
        switch (proficiency) {
            case "Expert":
                return "text-red-400";
            case "Advanced":
                return "text-amber-400";
            case "Intermediate":
                return "text-yellow-400";
            case "Beginner":
                return "text-green-400";
            default:
                return "text-white";
        }
    };

    // Get legend dot color
    const getLegendColor = (proficiency: ProficiencyLevel) => {
        switch (proficiency) {
            case "Expert":
                return "bg-red-500";
            case "Advanced":
                return "bg-amber-600";
            case "Intermediate":
                return "bg-yellow-500";
            case "Beginner":
                return "bg-green-500";
        }
    };

    // Count total skills
    const totalSkills = filteredSkills.reduce((acc, group) => acc + group.skills.length, 0);

    return (
        <div className="min-h-screen pt-20 px-4 sm:px-6 md:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills</h1>
                    <p className="text-gray-300 text-lg mb-6">
                        My technical expertise across programming languages, frameworks, tools, and soft skills.
                    </p>

                    {/* Proficiency Legend */}
                    <div className="bg-dark-gray/50 rounded-xl p-6 border border-white/10 mb-6">
                        <h3 className="text-lg font-semibold text-white mb-4">Proficiency Legend</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {(["Expert", "Advanced", "Intermediate", "Beginner"] as ProficiencyLevel[]).map(level => (
                                <div key={level} className="flex items-center gap-3">
                                    <div className={`w-4 h-4 rounded-full ${getLegendColor(level)}`}></div>
                                    <span className="text-gray-300 font-medium">{level}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Controls */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8 p-4 bg-dark-gray/50 rounded-xl border border-white/10">
                    {/* Filter Controls */}
                    <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
                        <span className="text-gray-300 font-bold whitespace-nowrap">Filter by category:</span>
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="px-4 py-2 rounded-lg bg-gray/20 text-gray-300 
                                     hover:bg-gray/30 focus:outline-none focus:ring-2 focus:ring-light-purple/50
                                     cursor-pointer transition-all duration-200"
                        >
                            <option value="All">All Categories</option>
                            {categories.map(category => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Results Count */}
                    <div className="flex items-center text-gray-400 text-sm ml-auto">
                        {totalSkills} skill{totalSkills !== 1 ? 's' : ''} found
                    </div>
                </div>

                {/* Skills Grid */}
                {filteredSkills.length > 0 ? (
                    <div className="space-y-8 mb-12">
                        {filteredSkills.map((skillGroup) => (
                            <div key={skillGroup.category} className="bg-dark-gray/50 rounded-xl p-6 md:p-8 border border-white/10">
                                {/* Category Header */}
                                <div className="mb-6">
                                    <h2 className="text-2xl md:text-3xl font-bold text-light-purple mb-2">
                                        {skillGroup.category}
                                    </h2>
                                    <p className="text-gray-400">
                                        {skillGroup.skills.length} skill{skillGroup.skills.length !== 1 ? 's' : ''}
                                    </p>
                                </div>

                                {/* Skills Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {skillGroup.skills.map((skill, index) => (
                                        <div
                                            key={`${skill.id}-${index}`}
                                            className="bg-white/5 rounded-lg p-4 border border-white/10 hover:border-white/20 transition-all duration-200"
                                        >
                                            {/* Skill Header with Icon */}
                                            <div className="flex items-center gap-3">
                                                <div className="text-2xl text-light-purple">
                                                    {(() => {
                                                        const iconName = skill.iconName;
                                                        const iconComponent =
                                                            fa[iconName] ||
                                                            si[iconName] ||
                                                            pi[iconName] ||
                                                            bi[iconName] ||
                                                            gi[iconName] ||
                                                            bs[iconName] ||
                                                            io[iconName] ||
                                                            fc[iconName] ||
                                                            ri[iconName];
                                                        return iconComponent
                                                            ? React.createElement(iconComponent as React.ComponentType<{ className?: string }>, { className: "w-8 h-8" })
                                                            : <span className="w-8 h-8 flex items-center justify-center">🔧</span>;
                                                    })()}
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className={`font-semibold text-lg ${getNameColor(skill.proficiency)}`}>
                                                        {skill.name}
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <div className="text-gray-400 text-lg mb-4">No skills found</div>
                        <p className="text-gray-500">
                            Try adjusting your filters or search criteria.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
