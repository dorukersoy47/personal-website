"use client";

import React, { useEffect, ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/layout/Sidebar";
import MenuIcon from "../components/layout/MenuIcon";
import { ModalProvider, useModal } from "../contexts/ModalContext";

const inter = Inter({ subsets: ["latin"], display: "swap" });

function LayoutContent({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = React.useState(false);
    const { isModalOpen } = useModal();

    // Gradient Wallpaper
    useEffect(() => {
        const root = document.documentElement;
        const deepPurple = getComputedStyle(root).getPropertyValue("--deep-purple").trim();
        const purple = getComputedStyle(root).getPropertyValue("--purple").trim();
        const lightPurple = getComputedStyle(root).getPropertyValue("--light-purple").trim();
        const accent = getComputedStyle(root).getPropertyValue("--accent").trim();

        document.body.style.background = `repeating-linear-gradient(180deg, ${deepPurple} 0vh, ${purple} 50vh, ${lightPurple} 100vh, ${accent} 150vh, ${lightPurple} 200vh, ${purple} 250vh, ${deepPurple} 299vh, ${deepPurple} 300vh)`;
    }, []);

    return (
        <body className="bg-linear-to-b from-dark-gray to-black min-h-screen">
            {/* Hide sidebar elements when modal is open */}
            {!isModalOpen && (
                <>
                    <button
                        className="fixed top-6 left-6 z-[60] bg-transparent p-2 rounded-full text-light-purple hover:text-accent focus:outline-none transition-colors duration-200"
                        onClick={() => setIsOpen((v) => !v)}
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-pressed={isOpen}
                        type="button"
                    >
                        <MenuIcon isOpen={isOpen} />
                    </button>
                    <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
                </>
            )}
            {children}
        </body>
    );
}

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" className={inter.className}>
            <ModalProvider>
                <LayoutContent>{children}</LayoutContent>
            </ModalProvider>
        </html>
    );
}