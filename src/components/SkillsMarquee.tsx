import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { skills } from "../data/skills";

function getSkillIconAndLabel(skill: any) {
  if (typeof skill === "object" && skill && "icon" in skill && "name" in skill) {
    return { icon: skill.icon, label: skill.name };
  }
  return { icon: null, label: typeof skill === "string" ? skill : String(skill) };
}

const duration = 18;

export default function SkillsMarquee() {
  const shuffled = useMemo(() => {
    const arr = [...skills];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, []);

  const half = Math.ceil(shuffled.length / 2);
  const lines = [shuffled.slice(0, half), shuffled.slice(half)];

  const lineVariants = (dir: "left" | "right") => ({
    animate: {
      x: dir === "left" ? [0, "-50%", "0%"] : [0, "50%", "0%"],
      transition: {
        repeat: Infinity,
        repeatType: "loop" as const,
        duration,
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
      },
    },
  });

  const maskStyle = {
    maskImage:
      "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
    WebkitMaskImage:
      "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
  };

  return (
    <div className="w-full flex flex-col items-center gap-2 mt-8 mb-8">
      {[0, 1].map((i) => (
        <div
          key={i}
          className="overflow-hidden w-full flex justify-center"
          style={maskStyle}
        >
          <motion.div
            className="flex flex-nowrap gap-6 text-lg md:text-xl font-semibold text-light-purple whitespace-nowrap items-center justify-center"
            variants={lineVariants(i === 0 ? "left" : "right")}
            animate="animate"
            style={{ width: "max-content" }}
          >
            {[...lines[i], ...lines[i]].map((skill, idx) => {
              const { icon, label } = getSkillIconAndLabel(skill);
              return (
                <span
                  key={idx}
                  className="inline-flex items-center gap-2 px-4 py-1 rounded bg-dark-gray/60 border border-light-purple/30 mx-1"
                >
                  {icon && (
                    <span className="w-6 h-6 flex items-center justify-center">
                      {typeof icon === "string" ? (
                        <img src={icon} alt={label} className="w-6 h-6 object-contain" />
                      ) : (
                        icon
                      )}
                    </span>
                  )}
                  <span>{label}</span>
                </span>
              );
            })}
          </motion.div>
        </div>
      ))}
    </div>
  );
}
