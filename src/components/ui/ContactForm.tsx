"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { site } from "../../data/site";

/** Small, stable field wrapper extracted outside the component to avoid re-creation on every keystroke. */
const Field = React.memo(function Field({
    label,
    htmlFor,
    required,
    error,
    helpText,
    children,
}: {
    label: string;
    htmlFor?: string;
    required?: boolean;
    error?: string;
    helpText?: React.ReactNode;
    children: React.ReactNode;
}) {
    return (
        <div>
            <div className="flex items-center justify-between">
                <label htmlFor={htmlFor} className="block text-gray-200 mb-1 font-medium">
                    {label} {required && <span className="text-accent">*</span>}
                </label>
                {helpText}
            </div>
            {children}
            {error && <p className="text-red-300 text-sm mt-1">{error}</p>}
        </div>
    );
});

type SubmitState = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [subject, setSubject] = useState("Hello Doruk 👋");
    const [submitState, setSubmitState] = useState<SubmitState>("idle");
    const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
    const [company, setCompany] = useState(""); // honeypot
    const maxChars = 1500;

    const remaining = useMemo(() => Math.max(0, maxChars - message.length), [message]);

    const inputClass = (hasError?: string) =>
        [
            "w-full",
            "px-4 py-3",
            "rounded-lg",
            "bg-[#0f0f0f]/70",
            "border-2",
            hasError ? "border-red-400/70" : "border-white/20 focus:border-white/40",
            "text-gray-100",
            "placeholder:text-gray-400",
            "outline-none",
            "transition-colors",
        ].join(" ");

    const textareaClass = (hasError?: string) =>
        [
            "w-full",
            "px-4 py-3",
            "rounded-lg",
            "bg-[#0f0f0f]/70",
            "border-2",
            hasError ? "border-red-400/70" : "border-white/20 focus:border-white/40",
            "text-gray-100",
            "placeholder:text-gray-400",
            "outline-none",
            "transition-colors",
            "resize-y",
        ].join(" ");

    const validate = () => {
        const next: typeof errors = {};
        if (!name.trim()) next.name = "Please tell me your name.";
        if (!email.trim()) next.email = "An email helps me reply to you.";
        else if (!/^\S+@\S+\.\S+$/.test(email)) next.email = "That doesn't look like a valid email.";
        if (!message.trim()) next.message = "Say hi! A short message is enough.";
        setErrors(next);
        return Object.keys(next).length === 0;
    };

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (company.trim().length > 0) return; // bot
        if (!validate()) return;

        setSubmitState("sending");

        const mailTo = site.email;
        const bodyLines = [
            `Name: ${name}`,
            `Email: ${email}`,
            "",
            message,
            "",
            "---",
            "Sent from dorukersoy.dev contact page",
        ];
        const body = encodeURIComponent(bodyLines.join("\n"));
        const subj = encodeURIComponent(subject);

        try {
            if (navigator.share && /Mobi|Android/i.test(navigator.userAgent)) {
                await navigator.share({
                    title: "Contact Doruk",
                    text: `Subject: ${subject}\n\n${message}\n\nFrom: ${name} (${email})`,
                });
                setSubmitState("success");
                return;
            }
            window.location.href = `mailto:${mailTo}?subject=${subj}&body=${body}`;
            setSubmitState("success");
        } catch {
            setSubmitState("error");
        }
    };

    return (
        <div className="bg-dark-gray/70 border-2 border-white/20 rounded-2xl shadow-lg backdrop-blur-lg p-5 sm:p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-light-purple">Send me a message</h2>
            <p className="text-gray-300 mt-2">
                I usually reply within a day. Required fields are marked with <span className="text-accent">*</span>.
            </p>

            {submitState === "success" && (
                <div className="mt-4 rounded-lg border-2 border-white/20 bg-linear-to-br from-light-purple/10 to-accent/10 p-4">
                    <p className="text-light-purple font-semibold">
                        Thanks! Your mail client should have opened. If it didn’t, email me at{" "}
                        <a className="underline hover:text-accent" href={`mailto:${site.email}`}>
                            {site.email}
                        </a>.
                    </p>
                </div>
            )}
            {submitState === "error" && (
                <div className="mt-4 rounded-lg border-2 border-white/20 bg-red-500/10 p-4">
                    <p className="text-red-200 font-semibold">
                        Something went wrong. You can email me directly at{" "}
                        <a className="underline hover:text-accent" href={`mailto:${site.email}`}>
                            {site.email}
                        </a>.
                    </p>
                </div>
            )}

            <form className="mt-6 space-y-5" onSubmit={onSubmit} noValidate>
                {/* Honeypot */}
                <div className="hidden">
                    <label htmlFor="company">Company</label>
                    <input
                        id="company"
                        name="company"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        autoComplete="off"
                        tabIndex={-1}
                        className="hidden"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field label="Your name" htmlFor="name" required error={errors.name}>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className={inputClass(errors.name)}
                            placeholder="Ada Lovelace"
                        />
                    </Field>
                    <Field label="Your email" htmlFor="email" required error={errors.email}>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={inputClass(errors.email)}
                            placeholder="ada@lovelabs.io"
                        />
                    </Field>
                </div>

                <Field label="Subject" htmlFor="subject">
                    <input
                        id="subject"
                        name="subject"
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className={inputClass()}
                        placeholder="Let’s build something cool"
                    />
                </Field>

                <Field
                    label="Message"
                    htmlFor="message"
                    required
                    error={errors.message}
                    helpText={<span className="text-sm text-gray-300">{remaining} characters left</span>}
                >
                    <textarea
                        id="message"
                        name="message"
                        rows={6}
                        maxLength={maxChars}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className={textareaClass(errors.message)}
                        placeholder="Tell me about your idea, timeline, and what success looks like."
                    />
                </Field>

                <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                    <p className="text-gray-300 text-sm">
                        This page uses your email client — no data is stored on the site.
                    </p>
                    <div className="flex items-center gap-3">
                        <button
                            type="submit"
                            disabled={submitState === "sending"}
                            className="inline-flex items-center gap-2 bg-light-purple text-dark-gray font-bold px-6 py-3 rounded-lg shadow hover:bg-accent transition-colors border-2 border-white disabled:opacity-70"
                        >
                            {submitState === "sending" ? (
                                <>
                                    <Spinner className="w-5 h-5" />
                                    Sending…
                                </>
                            ) : (
                                <>
                                    <SendIcon className="w-5 h-5" />
                                    Send
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

/* ---------- Local inline icons ---------- */
function SendIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L11 13" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M22 2l-7 20-4-9-9-4 20-7z" />
        </svg>
    );
}
function HomeIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 10.5L12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1v-10.5z" />
        </svg>
    );
}
function Spinner(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props} className={`animate-spin ${props.className ?? ""}`}>
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.2" strokeWidth="4" />
            <path d="M22 12a10 10 0 0 1-10 10" stroke="currentColor" strokeWidth="4" />
        </svg>
    );
}