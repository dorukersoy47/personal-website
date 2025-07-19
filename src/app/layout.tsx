"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap' });
import Header from "../components/Header";
import "./globals.css";
import React, { useEffect } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
