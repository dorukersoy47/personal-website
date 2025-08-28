import React from "react";

export default function ContactCard({
    title,
    subtitle,
    icon,
    children,
}: {
    title: string;
    subtitle?: string;
    icon?: React.ReactNode;
    children: React.ReactNode;
}) {
    return (
        <div className="bg-dark-gray/70 border-2 border-white/20 rounded-2xl shadow-lg backdrop-blur-lg p-5 sm:p-6">
            <div className="flex items-center gap-3">
                {icon}
                <div>
                    <h3 className="text-xl font-bold text-light-purple">{title}</h3>
                    {subtitle && <p className="text-gray-300 text-sm">{subtitle}</p>}
                </div>
            </div>
            <div className="mt-4">{children}</div>
        </div>
    );
}