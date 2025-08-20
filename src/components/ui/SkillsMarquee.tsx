import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { skills as skillCategories } from "../../data/skills";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as PiIcons from "react-icons/pi";
import * as BiIcons from "react-icons/bi";
import * as GiIcons from "react-icons/gi";

type IconModule = { [key: string]: React.ComponentType<unknown> };
const fa = FaIcons as IconModule;
const si = SiIcons as IconModule;
const pi = PiIcons as IconModule;
const bi = BiIcons as IconModule;
const gi = GiIcons as IconModule;

const duration = 40;

export default function SkillsMarquee() {
  // Flatten all skills from all categories except 'Learning' into a single array
  const allSkills = useMemo(() => {
    return skillCategories
      .filter(cat => cat.category !== "Learning")
      .flatMap(cat => cat.skills);
  }, []);

  // No shuffle: use original order for SSR/hydration safety
  const half = Math.ceil(allSkills.length / 2);
  const lines = [allSkills.slice(0, half), allSkills.slice(half)];

  const lineVariants = (dir: "left" | "right") => ({
    animate: {
      x: dir === "left" ? [0, "-50%", "0%"] : [0, "50%", "0%"],
      transition: {
        repeat: Infinity,
        repeatType: "loop" as const,
        duration,
        ease: "linear" as const,
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
            style={{ 
              width: "max-content",
              willChange: "transform",
              transform: "translate3d(0, 0, 0)"
            }}
          >
            {[...lines[i], ...lines[i]].map((skill, idx) => {
              // All skills are Skill objects with name and iconName
              const label = skill.name;
              // For icon, you may want to use a dynamic icon component, but fallback to iconName as alt text
              return (
                <span
                  key={idx}
                  className="inline-flex items-center gap-2 px-4 py-1 rounded bg-dark-gray/60 border border-light-purple/30 mx-1"
                >
                  <span className="w-6 h-6 flex items-center justify-center">
                    {(() => {
                      const iconName = skill.iconName;
                      const iconComponent =
                        fa[iconName] ||
                        si[iconName] ||
                        pi[iconName] ||
                        bi[iconName] ||
                        gi[iconName];
                      return iconComponent
                        ? React.createElement(iconComponent as React.ComponentType<{ className?: string }>, { className: "w-6 h-6" })
                        : null;
                    })()}
                  </span>
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
