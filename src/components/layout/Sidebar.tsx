"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { site } from "../../data/site";

export default function Sidebar({
    isOpen,
    setIsOpen,
}: {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
}) {
    return (
        <>
            {/* Sidebar Overlay */}
            <div
                className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
                    isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
                onClick={() => setIsOpen(false)}
                aria-hidden={!isOpen}
            />

            {/* Transparent Sidebar */}
            <nav
                className={`fixed top-0 left-0 h-full max-h-[100vh] w-72 z-50 transform transition-transform duration-300 ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                } bg-gradient-to-br from-[#0d031a99] via-[#1a0b2e99] to-[#0f0f0f99] backdrop-blur-lg border-r-2 border-black flex flex-col overflow-y-auto`}
                aria-label="Main navigation"
            >
                {/* Page Links (upper part) */}
                <ul className="flex flex-col gap-3 px-8 pt-16 text-lg text-light-purple mt-5">
                    {site.nav.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="inline-block hover:scale-110 transition-transform"
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="flex-grow" />

                {/* Social / Actions */}
                <div className="grid grid-cols-3 gap-3 place-items-center px-6 py-3 mb-10">

                    {/* LinkedIn */}
                    <a
                        href={site.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="hover:scale-110 transition-transform"
                    >
                        <Image
                            src="/icons/linkedin.svg"
                            alt="LinkedIn"
                            width={36}
                            height={36}
                            className="invert"
                        />
                    </a>

                    {/* Instagram */}
                    <a
                        href={site.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="hover:scale-110 transition-transform"
                    >
                        <Image
                            src="/icons/instagram.svg"
                            alt="Instagram"
                            width={36}
                            height={36}
                            className="invert"
                        />
                    </a>

                    {/* X (Twitter) */}
                    <a
                        href={site.social.x}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="X (Twitter)"
                        className="hover:scale-110 transition-transform"
                    >
                        <Image
                            src="/icons/x.svg"
                            alt="X (Twitter)"
                            width={36}
                            height={36}
                            className="invert"
                        />
                    </a>
                    
                    {/* GitHub */}
                    <a
                        href={site.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="hover:scale-110 transition-transform"
                    >
                        <Image
                            src="/icons/github.svg"
                            alt="GitHub"
                            width={36}
                            height={36}
                            className="invert"
                        />
                    </a>

                    {/* Itch.io */}
                    <a
                        href={site.social.itchio}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Itch.io"
                        className="hover:scale-110 transition-transform"
                    >
                        <Image
                            src="/icons/itchio.svg"
                            alt="Itch.io"
                            width={50}
                            height={50}
                            className="invert"
                        />
                    </a>

                    {/* Steam */}
                    <a
                        href={site.social.steam}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Steam"
                        className="hover:scale-110 transition-transform"
                    >
                        <Image
                            src="/icons/steam.svg"
                            alt="Steam"
                            width={40}
                            height={40}
                            className="invert"
                        />
                    </a>
                </div>
            </nav>
        </>
    );
}