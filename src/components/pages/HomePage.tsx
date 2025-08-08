"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "../../data/projects";
import SkillsMarquee from "../ui/SkillsMarquee";
import ExperienceTimeline from "../ui/ExperienceTimeline";
import ProjectBlock from "../ui/ProjectBlock";

const featuredProjects = projects.filter(project => project.featured);

export default function HomePage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-transparent">
            {/* Introduction */}
            <section className="w-full flex flex-col items-center justify-center min-h-screen">
                <div className="flex flex-col items-center justify-center min-h-screen w-full">
                    <motion.h1
                        className="text-7xl md:text-8xl font-extrabold text-center text-light-purple drop-shadow-lg"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.6, ease: 'backOut' }}
                    >
                        Hiya!
                    </motion.h1>
                    <motion.p
                        className="text-3xl md:text-4xl font-semibold text-light-purple text-center min-h-[3.5rem] mt-12"
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: 'easeOut' }}
                        viewport={{ once: true, amount: 0.7 }}
                    >
                        I&apos;m Doruk
                    </motion.p>
                    <motion.p
                        className="text-xl md:text-2xl text-gray-200 text-center max-w-xl min-h-[2.5rem]"
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.6, ease: 'easeOut' }}
                        viewport={{ once: true, amount: 0.7 }}
                    >
                        You might be asking...
                    </motion.p>
                </div>
            </section>
            {/* About Me */}
            <div className="h-[40vh]" />
            <section className="w-full flex flex-col items-center justify-center gap-8">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold text-light-purple text-center mb-6"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.7 }}
                >
                    Who is this bloke?
                </motion.h2>
                <motion.p
                    className="text-2xl text-gray-200 text-center max-w-2xl mb-2"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
                    viewport={{ once: true, amount: 0.7 }}
                >
                    I am a <b>Turkish</b> guy who is studying <b>computer science</b> in <b>University College London (UCL)</b> and living in <b>London</b>.
                </motion.p>
                <motion.p
                    className="text-xl text-gray-200 text-center max-w-2xl mb-8"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: 'easeOut', delay: 0.6 }}
                    viewport={{ once: true, amount: 0.7 }}
                >
                    I don&apos;t know how I ended up here but I am enjoying my time.
                </motion.p>
                <motion.p
                    className="text-xl text-gray-200 text-center max-w-2xl mt-5"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: 'easeOut', delay: 0.6 }}
                    viewport={{ once: true, amount: 0.7 }}
                >
                    See more about me...
                </motion.p>

                <div className="flex flex-col md:flex-row gap-8 w-full max-w-3xl justify-center items-stretch mb-15">
                    {/* About Me Link */}
                    <motion.div
                        className="flex-1 bg-dark-gray rounded-xl p-6 flex flex-col items-center border-2 border-white/20 shadow-lg"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}
                        viewport={{ once: true, amount: 0.7 }}
                    >
                        <span className="text-lg text-light-purple mb-4 text-center">Other info on the subject of me.</span>
                        <Link href="/about" className="mt-auto">
                            <button className="bg-light-purple text-dark-gray font-bold px-6 py-2 rounded-lg shadow hover:bg-accent transition-colors border-2 border-white">About Me</button>
                        </Link>
                    </motion.div>

                    {/* Education Link */}
                    <motion.div
                        className="flex-1 bg-dark-gray rounded-xl p-6 flex flex-col items-center border-2 border-white/20 shadow-lg"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.8 }}
                        viewport={{ once: true, amount: 0.7 }}
                    >
                        <span className="text-lg text-light-purple mb-4 text-center">See how I ended up here.</span>
                        <Link href="/education" className="mt-auto">
                            <button className="bg-light-purple text-dark-gray font-bold px-6 py-2 rounded-lg shadow hover:bg-accent transition-colors border-2 border-white">My Education</button>
                        </Link>
                    </motion.div>

                    {/* Extracurricular Link */}
                    <motion.div
                        className="flex-1 bg-dark-gray rounded-xl p-6 flex flex-col items-center border-2 border-white/20 shadow-lg"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: 'easeOut', delay: 1.0 }}
                        viewport={{ once: true, amount: 0.7 }}
                    >
                        <span className="text-lg text-light-purple mb-4 text-center">I like sports, video games, etc.</span>
                        <Link href="/extracurricular" className="mt-auto">
                            <button className="bg-light-purple text-dark-gray font-bold px-6 py-2 rounded-lg shadow hover:bg-accent transition-colors border-2 border-white">Extracurriculars</button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Work & Projects Intro Section */}
            <div className="h-[15vh] md:h-[65vh]" />
            <section className="w-full flex flex-col items-center justify-center gap-8">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-light-purple text-center mb-6"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.7 }}
                >
                    Unemployment is a big issue right now.
                </motion.h2>
                <motion.h2
                    className="text-2xl md:text-2xl text-light-purple text-center mb-[45vh]"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.7 }}
                >
                    According to &quot;Trust Me Bro News&quot; 100% of jobless people are unemployed right now.
                </motion.h2>
                <motion.p
                    className="text-xl md:text-3xl text-gray-200 text-center max-w-2xl"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
                    viewport={{ once: true, amount: 0.7 }}
                >
                    So, here are some cool stuff I did when I didn&apos;t have a j*b.
                </motion.p>
                <div className="h-10" />

                {/* Featured Projects Grid */}
                <section className="w-full flex flex-col items-center justify-center">
                    <div className="w-full flex justify-center">
                        <div className="grid grid-cols-3 grid-rows-2 gap-8 w-[80vw] max-w-6xl mx-auto px-2 md:px-8">
                            {/* Top row: 3 projects */}
                            {featuredProjects.slice(0, 3).map((project, idx) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, x: -80 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.35, ease: 'easeOut', delay: 0.2 * idx }}
                                    viewport={{ once: true, amount: 0.6 }}
                                >
                                    <React.Suspense fallback={<div className='h-48' />}>
                                        <ProjectBlock project={project} />
                                    </React.Suspense>
                                </motion.div>
                            ))}
                            {/* Fillers if less than 3 */}
                            {Array.from({ length: Math.max(0, 3 - featuredProjects.slice(0, 3).length) }).map((_, idx) => (
                                <div key={"empty-top-" + idx} />
                            ))}
                            {/* Bottom row: 2 projects */}
                            {featuredProjects.slice(3, 5).map((project, idx) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, x: 80 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.35, ease: 'easeOut', delay: 0.07 * idx }}
                                    viewport={{ once: true, amount: 0.6 }}
                                >
                                    <React.Suspense fallback={<div className='h-48' />}>
                                        <ProjectBlock project={project} />
                                    </React.Suspense>
                                </motion.div>
                            ))}
                            {/* More projects block in last cell: circular grid icon */}
                            <motion.div
                                initial={{ opacity: 0, x: -80 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.35, ease: 'easeOut', delay: 0.21 }}
                                viewport={{ once: true, amount: 0.6 }}
                                className="flex items-center justify-center w-full h-full"
                            >
                                <button
                                    className="flex flex-col items-center justify-center bg-gradient-to-br from-dark-gray to-light-purple/20 rounded-full border-2 border-dashed border-light-purple text-light-purple shadow-lg min-h-[180px] min-w-[180px] max-h-[220px] max-w-[220px] p-0 hover:scale-110 transition-transform cursor-pointer"
                                    style={{ aspectRatio: '1/1' }}
                                    onClick={() => window.location.href = '/projects'}
                                    aria-label="See all projects"
                                >
                                    {/* Grid icon */}
                                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mb-2">
                                        <rect x="3" y="3" width="6" height="6" rx="2" fill="currentColor" className="opacity-60" />
                                        <rect x="9" y="3" width="6" height="6" rx="2" fill="currentColor" className="opacity-80" />
                                        <rect x="15" y="3" width="6" height="6" rx="2" fill="currentColor" className="opacity-60" />
                                        <rect x="3" y="9" width="6" height="6" rx="2" fill="currentColor" className="opacity-80" />
                                        <rect x="9" y="9" width="6" height="6" rx="2" fill="currentColor" className="opacity-100" />
                                        <rect x="15" y="9" width="6" height="6" rx="2" fill="currentColor" className="opacity-80" />
                                        <rect x="3" y="15" width="6" height="6" rx="2" fill="currentColor" className="opacity-60" />
                                        <rect x="9" y="15" width="6" height="6" rx="2" fill="currentColor" className="opacity-80" />
                                        <rect x="15" y="15" width="6" height="6" rx="2" fill="currentColor" className="opacity-60" />
                                    </svg>
                                    <span className="text-base font-bold text-center leading-tight">See all projects</span>
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </section>

            {/* Experiences*/}
            <div>
                <motion.p
                    className="text-xl md:text-3xl text-gray-200 text-center max-w-2xl mb-30 mt-50"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: 'easeOut', delay: 0.4 }}
                    viewport={{ once: true, amount: 0.7 }}
                >
                    On the contrary, here are some cool stuff I did when I did have a j*b.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="flex flex-col items-center justify-center"
                >
                    <ExperienceTimeline />
                    <div className="flex justify-center w-full">
                        <button
                            className="mt-12 px-8 py-3 bg-light-purple text-dark-gray font-bold rounded-lg shadow hover:bg-accent transition-colors border-2 border-white text-lg"
                            onClick={() => window.location.href = '/experiences'}
                        >
                            Learn the details of my experiences
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* My Skills */}
            <section className="w-full flex flex-col items-center justify-center">
                <motion.p
                    className="text-xl md:text-3xl text-gray-200 text-center max-w-2xl mb-10 mt-50"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: 'easeOut', delay: 0.4 }}
                    viewport={{ once: true, amount: 0.7 }}
                >
                    I learned some interesting stuff along the way.
                </motion.p>
                <motion.p
                    className="text-xl md:text-2xl text-gray-200 text-center max-w-2xl mb-8"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: 'easeOut', delay: 0.4 }}
                    viewport={{ once: true, amount: 0.7 }}
                >
                    Languages, frameworks, tools...
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="flex flex-col items-center w-full"
                >
                    <SkillsMarquee />
                </motion.div>
                <div className="flex justify-center w-full">
                    <button
                        className="mb-30 mt-8 px-8 py-3 bg-light-purple text-dark-gray font-bold rounded-lg shadow hover:bg-accent transition-colors border-2 border-white text-lg"
                        onClick={() => window.location.href = '/skills'}
                    >
                        Check all my skills
                    </button>
                </div>
            </section>

            {/* Contact Me */}
            <section className="w-full flex flex-col items-center justify-center py-24">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold text-light-purple text-center mb-6 mt-30"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.7 }}
                >
                    Let&apos;s Contact?
                </motion.h2>
                <motion.p
                    className="text-xl md:text-2xl text-gray-200 text-center max-w-2xl mb-8"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
                    viewport={{ once: true, amount: 0.7 }}
                >
                    Want to get in touch? Whether it&apos;s for a project, a chat, or just to say hi, I&apos;d love to talk!
                </motion.p>
                <div className="flex justify-center">
                    <button
                        className=" mb-25 px-8 py-4 bg-light-purple text-dark-gray font-bold rounded-lg shadow hover:bg-accent transition-colors border-2 border-white text-lg flex items-center gap-3"
                        onClick={() => window.location.href = '/contact'}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 8V6a2 2 0 00-2-2H5a2 2 0 00-2 2v2m18 0v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8m18 0l-9 6-9-6" />
                        </svg>
                        Contact Me
                    </button>
                </div>
            </section>
        </main>
    );
}