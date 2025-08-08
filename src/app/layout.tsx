"use client";

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap' });
import Header from "../components/layout/Header";
import "./globals.css";
import React, { useEffect } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const root = document.documentElement;
    const deepPurple = getComputedStyle(root).getPropertyValue('--deep-purple').trim();
    const purple = getComputedStyle(root).getPropertyValue('--purple').trim();
    const lightPurple = getComputedStyle(root).getPropertyValue('--light-purple').trim();
    const accent = getComputedStyle(root).getPropertyValue('--accent').trim();

    document.body.style.background = `repeating-linear-gradient(180deg, ${deepPurple} 0vh, ${purple} 50vh, ${lightPurple} 100vh, ${accent} 150vh, ${lightPurple} 200vh, ${purple} 250vh, ${deepPurple} 299vh, ${deepPurple} 300vh)`;
  }, []);

  return (
    <html lang="en" className={inter.className}>
      <body className="bg-gradient-to-b from-dark-gray to-black min-h-screen">
        <Header />
        {children}
      </body>
    </html>
  );
}
