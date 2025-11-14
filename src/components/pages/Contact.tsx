"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ContactForm from "../ui/ContactForm";
import { site } from "../../data/site";

export default function Contact() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-start bg-transparent relative">
            {/* Hero */}
            <section className="w-full flex flex-col items-center justify-center min-h-[50vh] px-4 sm:px-6 md:px-20 lg:px-28">
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
                        Whether it’s a project, collaboration, or just a hello, I’d love to hear from you.
                    </motion.p>
                </div>
            </section>

            {/* Social Links Section */}
            <section className="w-full px-4 sm:px-6 md:px-20 lg:px-28 pb-12 flex justify-center">
                <div className="w-full max-w-4xl">
                    <motion.div
                        className="mx-auto w-full max-w-2xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    >
                        <div className="bg-dark-gray rounded-2xl p-6 md:p-8 border-2 border-white/20 shadow-lg">
                            <h2 className="text-2xl md:text-3xl font-bold text-light-purple text-center mb-6">
                                Connect with me
                            </h2>
                            {/* Mobile-friendly grid: 3 columns on mobile, 6 on desktop */}
                            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6 items-center justify-center">
                                {/* LinkedIn */}
                                <motion.a
                                    href={site.social.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    className="hover:scale-110 transition-transform duration-200 flex justify-center"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Image
                                        src="/icons/linkedin.svg"
                                        alt="LinkedIn"
                                        width={40}
                                        height={40}
                                        className="invert"
                                    />
                                </motion.a>

                                {/* Instagram */}
                                <motion.a
                                    href={site.social.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                    className="hover:scale-110 transition-transform duration-200 flex justify-center"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Image
                                        src="/icons/instagram.svg"
                                        alt="Instagram"
                                        width={40}
                                        height={40}
                                        className="invert"
                                    />
                                </motion.a>

                                {/* X (Twitter) */}
                                <motion.a
                                    href={site.social.x}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="X (Twitter)"
                                    className="hover:scale-110 transition-transform duration-200 flex justify-center"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Image
                                        src="/icons/x.svg"
                                        alt="X (Twitter)"
                                        width={40}
                                        height={40}
                                        className="invert"
                                    />
                                </motion.a>

                                {/* GitHub */}
                                <motion.a
                                    href={site.social.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub"
                                    className="hover:scale-110 transition-transform duration-200 flex justify-center"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Image
                                        src="/icons/github.svg"
                                        alt="GitHub"
                                        width={40}
                                        height={40}
                                        className="invert"
                                    />
                                </motion.a>

                                {/* Itch.io */}
                                <motion.a
                                    href={site.social.itchio}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Itch.io"
                                    className="hover:scale-110 transition-transform duration-200 flex justify-center"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Image
                                        src="/icons/itchio.svg"
                                        alt="Itch.io"
                                        width={40}
                                        height={40}
                                        className="invert"
                                    />
                                </motion.a>

                                {/* Steam */}
                                <motion.a
                                    href={site.social.steam}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Steam"
                                    className="hover:scale-110 transition-transform duration-200 flex justify-center"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Image
                                        src="/icons/steam.svg"
                                        alt="Steam"
                                        width={40}
                                        height={40}
                                        className="invert"
                                    />
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Content */}
            <section className="w-full px-4 sm:px-6 md:px-20 lg:px-28 pb-24 flex justify-center">
                <div className="w-full max-w-4xl">
                    {/* Form (simple enter animation; no whileInView) */}
                    <motion.div
                        className="mx-auto w-full max-w-2xl"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
                    >
                        <ContactForm />
                    </motion.div>
                </div>
            </section>
        </main>
    );
}