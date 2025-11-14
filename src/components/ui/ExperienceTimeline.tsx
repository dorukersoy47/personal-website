// ExperienceTimeline.tsx
import React from "react";
import { experiences } from "../../data/experiences";

// Helper to alternate top/bottom
const isTop = (idx: number) => idx % 2 === 0;

export default function ExperienceTimeline() {
    // Filter to only show featured experiences
    const featuredExperiences = experiences.filter(exp => exp.featured);
    const sorted = [...featuredExperiences].sort((a, b) => a.dateStarted.getTime() - b.dateStarted.getTime());
    const n = sorted.length;
    const containerHeight = Math.max(65, Math.min(140, n * 18)); // in vh
    const getTop = (idx: number) => {
        if (n === 1) return `calc(${containerHeight * 0.10}vh - 1vw)`;
        if (n === 2) return idx === 0
            ? `calc(${containerHeight * 0.20}vh - 1vw)`
            : `calc(${containerHeight * 0.70}vh - 1vw)`;
        const percent = 0.10 + ((idx / (n - 1)) * 0.80);
        return `calc(${(containerHeight * percent)}vh - 1vw)`;
    };

    // Calculate mobile positions to prevent overlap
    const getMobileTop = (idx: number) => {
        // On mobile, space items more evenly and add extra spacing
        const baseSpacing = 120; // pixels between items
        const topOffset = 20; // initial offset from top
        return `${topOffset + (idx * baseSpacing)}px`;
    };
    return (
        <section className="w-full flex flex-col items-center my-[6vh]">
            {/* Mobile Layout: Simple vertical stack */}
            <div className="md:hidden w-full max-w-md mx-auto px-4 space-y-8">
                {sorted.map((exp, idx) => (
                    <div key={exp.title} className="flex items-start gap-4">
                        {/* Dot and line */}
                        <div className="flex flex-col items-center">
                            <div className="w-4 h-4 rounded-full bg-white shadow-lg flex-shrink-0 mt-2" />
                            {idx < sorted.length - 1 && (
                                <div className="w-px h-16 bg-gradient-to-b from-light-purple/80 to-light-purple/40 mt-2" />
                            )}
                        </div>
                        {/* Content */}
                        <div className="bg-dark-gray border border-light-purple rounded-lg shadow-lg p-4 flex-1 min-w-0">
                            <div className="font-bold text-light-purple text-lg">{exp.title}</div>
                            <div className="text-sm text-gray-300 mb-1">{exp.type.join(", ")}</div>
                            <div className="text-base text-white">{exp.company}</div>
                            <div className="text-sm text-gray-400 mt-2">{exp.period}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Desktop Layout: Original timeline */}
            <div className="hidden md:block relative" style={{ height: `${containerHeight}vh`, width: 'clamp(120px, 8vw, 220px)' }}>
                {/* SVG Dotted Vertical Line */}
                {/* CSS driven dotted vertical line that grows with container height */}
                <div
                    className="absolute left-1/2 -translate-x-1/2 top-0 z-0 flex items-stretch justify-center"
                    style={{ height: '100%', width: '28px', pointerEvents: 'none' }}
                >
                    {/* dotted line */}
                    <div
                        aria-hidden
                        style={{
                            width: '4px',
                            height: '100%',
                            borderRadius: '3px',
                            // repeating-linear-gradient to create the dotted/dashed look
                            background: 'repeating-linear-gradient(to bottom, #a78bfa 0px, #a78bfa 6px, transparent 6px, transparent 20px)',
                        }}
                    />
                    {/* arrow triangle at the bottom */}
                    <div
                        aria-hidden
                        style={{
                            position: 'absolute',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            bottom: '6px',
                            width: 0,
                            height: 0,
                            borderLeft: '12px solid transparent',
                            borderRight: '12px solid transparent',
                            borderTop: '18px solid #a78bfa',
                        }}
                    />
                </div>
                {/* Dots and Info */}
                {sorted.map((exp, idx) => {
                    const top = getTop(idx);
                    return (
                        <div key={exp.title} className="absolute z-10" style={{ top, left: '50%', transform: `translateX(-50%)` }}>
                            {/* Dot */}
                            <div className="relative flex flex-row items-center">
                                <div className="w-[1.2vw] h-[1.2vw] min-w-[12px] min-h-[12px] max-w-[24px] max-h-[24px] rounded-full bg-white shadow-lg z-30" />
                                {/* Desktop/Tablet info: alternates sides */}
                                <div
                                    className={
                                        `absolute top-1/2 -translate-y-1/2 w-[18vw] min-w-[120px] max-w-[260px] bg-dark-gray border border-light-purple rounded-lg shadow-lg p-3 text-center z-20 ` +
                                        (isTop(idx)
                                            ? 'right-full mr-[1.5vw]'
                                            : 'left-full ml-[1.5vw]')
                                    }
                                >
                                    <div className="font-bold text-light-purple text-lg">{exp.title}</div>
                                    <div className="text-xs text-gray-300 mb-1">{exp.type.join(", ")}</div>
                                    <div className="text-sm text-white">{exp.company}</div>
                                    <div className="text-xs text-gray-400 mt-1">{exp.period}</div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}