"use client";

import React from "react";
import { getEducation, getCertificates } from "../../data/education";
import type { Education, Certificate } from "../../data/types";

export default function Education() {
    const educationEntries = getEducation();
    const certificates = getCertificates();

    return (
        <div className="min-h-screen pt-20 px-4 sm:px-6 md:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Page Header */}
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Education</h1>
                    <p className="text-lg md:text-xl text-gray-300">
                        My academic journey and professional certifications.
                    </p>
                </div>

                {/* Education Entries */}
                <div className="space-y-8 mb-16">
                    {educationEntries.map((education) => (
                        <div key={education.id} className="bg-dark-gray/50 rounded-xl p-6 md:p-8 border border-white/10">
                            {/* Institution Header */}
                            <div className="mb-6">
                                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                                    <div>
                                        <h2 className="text-2xl md:text-3xl font-bold text-light-purple mb-2">
                                            {education.institution}
                                        </h2>
                                        <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                                            {education.degree}
                                        </h3>
                                        <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                                            <span className="flex items-center gap-1">
                                                📍 {education.location}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                📅 {education.period}
                                            </span>
                                            <span className="inline-block px-2 py-1 bg-accent/20 text-accent rounded-full text-xs font-medium">
                                                {education.type}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="mb-6">
                                <p className="text-gray-300 leading-relaxed">
                                    {education.description}
                                </p>
                            </div>

                            {/* Grade Section */}
                            {education.grade && (
                                <div className="mt-6">
                                    <div className="p-3 bg-light-purple/10 rounded-lg border border-light-purple/30">
                                        <div className="flex justify-between items-center">
                                            <span className="text-light-purple font-semibold">Grade</span>
                                            <span className="text-light-purple font-bold text-lg">{education.grade}</span>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Extracurricular Activities */}
                            {education.extracurriculars && education.extracurriculars.length > 0 && (
                                <div className="mt-6">
                                    <h4 className="text-lg font-semibold text-white mb-3">Extracurricular Activities</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                        {education.extracurriculars.map((activity, index) => (
                                            <div key={index} className="flex items-center gap-2 text-gray-300">
                                                <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                                                <span className="text-sm">{activity}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Certificates Section */}
                {certificates.length > 0 && (
                    <div className="mb-12">
                        <div className="mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-light-purple mb-4">Certificates</h2>
                            <p className="text-gray-300">
                                Professional certifications and specialized training completed.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {certificates.map((certificate) => (
                                <div key={certificate.id} className="bg-dark-gray/30 rounded-lg p-6 border border-white/5 hover:border-light-purple/30 transition-colors duration-200">
                                    <div className="mb-4">
                                        <h3 className="text-xl font-bold text-white mb-2">
                                            {certificate.name}
                                        </h3>
                                        <div className="text-sm text-gray-300 space-y-1">
                                            <p>
                                                <span className="text-accent font-medium">Issuer:</span> {certificate.issuer}
                                            </p>
                                            <p>
                                                <span className="text-accent font-medium">Completed:</span> {certificate.completionYear}
                                            </p>
                                        </div>
                                    </div>

                                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                        {certificate.description}
                                    </p>

                                    {certificate.credentialUrl && (
                                        <a
                                            href={certificate.credentialUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block px-4 py-2 bg-light-purple text-dark-gray font-medium rounded-lg hover:bg-accent transition-colors duration-200"
                                        >
                                            View Credential
                                        </a>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
