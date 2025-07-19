import React from "react";
import { experiences } from "../data/experience";

// Helper to alternate top/bottom
const isTop = (idx: number) => idx % 2 === 0;

export default function ExperienceTimeline() {
  const sorted = [...experiences].sort((a, b) => a.dateStarted.getTime() - b.dateStarted.getTime());
  const n = sorted.length;
  const containerHeight = 65; // in vh
  const getTop = (idx: number) => {
    if (n === 1) return `calc(${containerHeight * 0.10}vh - 1vw)`;
    if (n === 2) return idx === 0
      ? `calc(${containerHeight * 0.20}vh - 1vw)`
      : `calc(${containerHeight * 0.70}vh - 1vw)`;
    const percent = 0.10 + ((idx / (n - 1)) * 0.80);
    return `calc(${(containerHeight * percent)}vh - 1vw)`;
  };
  return (
    <section className="w-full flex flex-col items-center my-[6vh]">
      <div className="relative" style={{ height: '65vh', width: '8vw', minWidth: '120px', maxWidth: '220px' }}>
        {/* SVG Dotted Vertical Line */}
        <svg width="8vw" height="65vh" viewBox="0 0 60 650" className="absolute left-1/2 -translate-x-1/2 top-0 z-0" style={{ minHeight: '100%', width: '8vw', height: '65vh' }}>
          {/* Dotted vertical line */}
          <line
            x1="30" y1="0" x2="30" y2="620"
            stroke="#a78bfa"
            strokeWidth="4"
            strokeDasharray="10,14"
            strokeLinecap="round"
          />
          {/* Arrowhead */}
          <polygon points="30,650 20,620 40,620" fill="#a78bfa" />
        </svg>
        {/* Dots and Info */}
        {sorted.map((exp, idx) => {
          const top = getTop(idx);
          return (
            <div key={exp.title} className="absolute z-10" style={{ top, left: '50%', transform: `translateX(-50%)` }}>
              {/* Dot */}
              <div className="relative flex flex-row items-center">
                <div className="w-[1.2vw] h-[1.2vw] min-w-[12px] min-h-[12px] max-w-[24px] max-h-[24px] rounded-full bg-white shadow-lg z-30" />
                {/* Info box */}
                <div
                  className={
                    `absolute top-1/2 -translate-y-1/2 w-[18vw] min-w-[120px] max-w-[260px] bg-dark-gray border border-light-purple rounded-lg shadow-lg p-3 text-center z-20 ` +
                    (isTop(idx)
                      ? 'right-full mr-[1.5vw]'
                      : 'left-full ml-[1.5vw]')
                  }
                >
                  <div className="font-bold text-light-purple text-lg">{exp.title}</div>
                  <div className="text-xs text-gray-300 mb-1">{exp.type}</div>
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
