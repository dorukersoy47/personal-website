'use client';

import { useEffect, useRef, useState } from "react";
import { SiReact, SiCplusplus, SiUnrealengine, SiHaskell, SiTypescript, SiNextdotjs, SiNodedotjs, SiMongodb, SiTailwindcss, SiGit, SiC, SiPython, SiJavascript, SiHtml5, SiUnity, SiGodotengine, SiCanva } from "react-icons/si";
import { FaJava, FaRust, FaFigma } from "react-icons/fa";
import { PiFileCSharp } from "react-icons/pi";
import { BiLogoVisualStudio } from "react-icons/bi";
import { GiArtificialHive, GiArtificialIntelligence } from "react-icons/gi";

import type { ReactElement } from "react";


type SkillLevel = "beginner" | "intermediate" | "advanced";

interface Skill {
  name: string;
  level: SkillLevel;
  icon: ReactElement;
}

const skillList = {
  Languages: [
    { name: "C", level: "intermediate", icon: <SiC /> },
    { name: "Python", level: "intermediate", icon: <SiPython /> },
    { name: "Java", level: "intermediate", icon: <FaJava /> },
    { name: "C#", level: "beginner", icon: <PiFileCSharp /> },
    { name: "GD Script", level: "beginner", icon: <SiGodotengine /> },
    { name: "Haskell", level: "intermediate", icon: <SiHaskell /> },
    { name: "JavaScript", level: "intermediate", icon: <SiJavascript /> },
    { name: "TypeScript", level: "intermediate", icon: <SiTypescript /> },
    { name: "HTML", level: "intermediate", icon: <SiHtml5 />},
    { name: "Tailwind CSS", level: "beginner", icon: <SiTailwindcss /> }
  ],
  Frameworks: [
    { name: "React", level: "intermediate", icon: <SiReact /> },
    { name: "Node.js", level: "intermediate", icon: <SiNodedotjs /> },
    { name: "Next.js", level: "beginner", icon: <SiNextdotjs /> },
    { name : "Unity", level: "beginner", icon: <SiUnity />},
    { name: "Godot", level: "beginner", icon: <SiGodotengine />}
  ],
  Tools: [
    { name: "Git", level: "intermediate", icon: <SiGit /> },
    { name: "MongoDB", level: "beginner", icon: <SiMongodb /> },
    { name: "Visual Studio", level: "beginner", icon: <BiLogoVisualStudio />},
    { name: "Figma", level: "beginner", icon: <FaFigma /> },
    { name: "Canva", level: "intermediate", icon: <SiCanva /> }
  ],
  Learning: [
    { name: "Unreal Engine", level: "", icon: <SiUnrealengine /> },
    { name: "C++", level: "", icon: <SiCplusplus /> },
    { name: "Artificial Intelligence", level: "", icon: <GiArtificialIntelligence /> },
    { name: "Machine Learning", level: "", icon: <GiArtificialHive /> },
    { name: "Rust", level: "", icon: <FaRust /> }
  ]
}

export default function SkillsPage() {
  // Level slider and color mapping
  const levelSlider = {
    beginner: { value: 33, color: 'bg-blue-400' },
    intermediate: { value: 66, color: 'bg-yellow-400' },
    advanced: { value: 100, color: 'bg-green-500' },
  } as const;

  // Helper to get level info
  function getLevelInfo(level: string) {
    const l = level.toLowerCase() as keyof typeof levelSlider;
    return levelSlider[l] || levelSlider.beginner;
  }

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // UI
  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-dark-gray via-deep-purple to-purple min-h-screen text-center relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-light-purple/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      {hasMounted && (
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-light-purple to-accent bg-clip-text text-transparent">Skills</span>
          </h2>

          {/* Languages */}
          <section className="mb-10">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Languages</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 px-10 mx-auto max-w-5xl">
              {skillList.Languages.map((skill) => (
                
                <div key={skill.name} className="bg-gray-800/80 backdrop-blur-md rounded-xl border border-purple/20 hover:border-light-purple/40 transition-all duration-300 p-2 flex flex-col min-h-fit">
                  {/* Top Row: Name and Icon */}
                  <div className="flex justify-between items-start">
                    <div className="text-white font-medium text-left">{skill.name}</div>
                    <div className="text-4xl text-light-purple">{skill.icon}</div>
                  </div>
                  {/* Level Text slightly under top row */}
                  <div className="text-xs text-gray-400 text-center mt-5">
                    {skill.level.charAt(0).toUpperCase() + skill.level.slice(1)}
                  </div>
                  {/* Slider directly under level text */}
                  <div className="w-5/6 mx-auto mt-1">
                    <div className="h-2 w-full bg-gray-700 rounded-full">
                      <div 
                        className={`h-2 rounded-full transition-all duration-300 ${getLevelInfo(skill.level).color}`}
                        style={{ width: `${getLevelInfo(skill.level).value}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Frameworks */}
          <section className="mb-10">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Frameworks</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 px-10 mx-auto max-w-5xl">
              {skillList.Frameworks.map((skill) => (
                <div key={skill.name} className="bg-gray-800/80 backdrop-blur-md rounded-xl border border-purple/20 hover:border-light-purple/40 transition-all duration-300 p-2 flex flex-col min-h-fit">
                  {/* Top Row: Name and Icon */}
                  <div className="flex justify-between items-start">
                    <div className="text-white font-medium text-left">{skill.name}</div>
                    <div className="text-4xl text-light-purple">{skill.icon}</div>
                  </div>
                  {/* Level Text slightly under top row */}
                  <div className="text-xs text-gray-400 text-center mt-5">
                    {skill.level.charAt(0).toUpperCase() + skill.level.slice(1)}
                  </div>
                  {/* Slider directly under level text */}
                  <div className="w-5/6 mx-auto mt-1">
                    <div className="h-2 w-full bg-gray-700 rounded-full">
                      <div 
                        className={`h-2 rounded-full transition-all duration-300 ${getLevelInfo(skill.level).color}`}
                        style={{ width: `${getLevelInfo(skill.level).value}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Tools */}
          <section>
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Tools</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 px-10 mx-auto max-w-5xl">
              {skillList.Tools.map((skill) => (
                <div key={skill.name} className="bg-gray-800/80 backdrop-blur-md rounded-xl border border-purple/20 hover:border-light-purple/40 transition-all duration-300 p-2 flex flex-col min-h-fit">
                  {/* Top Row: Name and Icon */}
                  <div className="flex justify-between items-start">
                    <div className="text-white font-medium text-left">{skill.name}</div>
                    <div className="text-4xl text-light-purple">{skill.icon}</div>
                  </div>
                  {/* Level Text slightly under top row */}
                  <div className="text-xs text-gray-400 text-center mt-5">
                    {skill.level.charAt(0).toUpperCase() + skill.level.slice(1)}
                  </div>
                  {/* Slider directly under level text */}
                  <div className="w-5/6 mx-auto mt-1">
                    <div className="h-2 w-full bg-gray-700 rounded-full">
                      <div 
                        className={`h-2 rounded-full transition-all duration-300 ${getLevelInfo(skill.level).color}`}
                        style={{ width: `${getLevelInfo(skill.level).value}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Learning */}
          <section className="mt-10">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Currently Learning</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 px-10 mx-auto max-w-5xl">
              {skillList.Learning.map((skill) => (
                <div key={skill.name} className="bg-gray-800/80 backdrop-blur-md rounded-xl border border-purple/20 hover:border-light-purple/40 transition-all duration-300 p-2 flex flex-col min-h-fit">
                  {/* Top Row: Name and Icon */}
                  <div className="flex justify-between items-start">
                    <div className="text-white font-medium text-left">{skill.name}</div>
                    <div className="text-4xl text-light-purple">{skill.icon}</div>
                  </div>
                  {/* Only show level and slider if level is not empty */}
                  {skill.level && (
                    <>
                      <div className="text-xs text-gray-400 text-center mt-5">
                        {skill.level.charAt(0).toUpperCase() + skill.level.slice(1)}
                      </div>
                      <div className="w-5/6 mx-auto mt-1">
                        <div className="h-2 w-full bg-gray-700 rounded-full">
                          <div 
                            className={`h-2 rounded-full transition-all duration-300 ${getLevelInfo(skill.level).color}`}
                            style={{ width: `${getLevelInfo(skill.level).value}%` }}
                          />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      )}
    </section>
  );
} 