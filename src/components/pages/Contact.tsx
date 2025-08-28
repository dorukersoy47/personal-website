"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ContactCard from "../ui/ContactCard";
import ContactForm from "../ui/ContactForm";
import { site } from "../../data/site";

export default function Contact() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-start bg-transparent relative">
            {/* Hero */}
            <section className="w-full flex flex-col items-center justify-center min-h-[60vh] px-4 sm:px-6 md:px-20 lg:px-28">
                <div className="flex flex-col items-center justify-center w-full">
                    <motion.h1
                        className="text-5xl md:text-7xl font-extrabold text-center text-light-purple drop-shadow-lg"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                    >
                        Let’s talk.
                    </motion.h1>
                    <motion.p
                        className="text-lg md:text-2xl text-gray-200 text-center max-w-2xl mt-6"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                    >
                        Whether it’s a project, collaboration, internship, or just a hello — I’d love to hear from you.
                    </motion.p>
                </div>
            </section>

            {/* Content */}
            <section className="w-full px-4 sm:px-6 md:px-20 lg:px-28 pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                    {/* Contact Cards */}
                    <motion.div
                        className="lg:col-span-1 space-y-4"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <ContactCard
                            title="Email"
                            subtitle="The fastest way to reach me"
                            icon={
                                <svg className="w-6 h-6 text-light-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1l-9 6-9-6V7z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8" />
                                </svg>
                            }
                        >
                            <a
                                href={`mailto:${site.email}`}
                                className="inline-flex items-center gap-2 text-light-purple font-semibold hover:text-accent transition-colors"
                            >
                                {site.email}
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                                </svg>
                            </a>
                        </ContactCard>

                        <ContactCard
                            title="LinkedIn"
                            subtitle="Let’s connect professionally"
                            icon={
                                <svg className="w-6 h-6 text-light-purple" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-.9 1.8-2.2 3.7-2.2 4 0 4.7 2.6 4.7 6V24h-4v-7.1c0-1.7 0-3.9-2.4-3.9-2.4 0-2.8 1.9-2.8 3.8V24h-4V8z" />
                                </svg>
                            }
                        >
                            <a
                                href={site.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-light-purple font-semibold hover:text-accent transition-colors"
                            >
                                linkedin.com/in/doruk-ersoy
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                                </svg>
                            </a>
                        </ContactCard>

                        <ContactCard
                            title="GitHub"
                            subtitle="See what I’m building"
                            icon={
                                <svg className="w-6 h-6 text-light-purple" viewBox="0 0 24 24" fill="currentColor">
                                    <path
                                        fillRule="evenodd"
                                        d="M12 2C6.48 2 2 6.6 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.48 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.36-3.37-1.36-.46-1.19-1.12-1.51-1.12-1.51-.92-.64.07-.63.07-.63 1.02.07 1.56 1.07 1.56 1.07.9 1.58 2.36 1.12 2.94.85.09-.68.35-1.13.63-1.39-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.73 0 0 .85-.28 2.78 1.05A9.33 9.33 0 0 1 12 6.8c.86 0 1.73.12 2.54.36 1.92-1.33 2.77-1.05 2.77-1.05.56 1.42.21 2.47.11 2.73.64.72 1.03 1.64 1.03 2.76 0 3.93-2.34 4.8-4.57 5.06.36.33.68.98.68 1.98 0 1.43-.01 2.58-.01 2.93 0 .27.18.59.69.48A10.03 10.03 0 0 0 22 12.26C22 6.6 17.52 2 12 2Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            }
                        >
                            <a
                                href={site.social.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-light-purple font-semibold hover:text-accent transition-colors"
                            >
                                github.com/dorukersoy47
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                                </svg>
                            </a>
                        </ContactCard>

                        <ContactCard
                            title="Résumé / CV"
                            subtitle="Request or view my latest CV"
                            icon={
                                <svg className="w-6 h-6 text-light-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 3h6l5 5v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 3v5h5" />
                                </svg>
                            }
                        >
                            <Link
                                href="/resume"
                                className="inline-flex items-center gap-2 text-light-purple font-semibold hover:text-accent transition-colors"
                            >
                                View CV
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                                </svg>
                            </Link>
                        </ContactCard>
                    </motion.div>

                    {/* Form (simple enter animation; no whileInView) */}
                    <motion.div
                        className="lg:col-span-2"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <ContactForm />
                    </motion.div>
                </div>
            </section>
        </main>
    );
}