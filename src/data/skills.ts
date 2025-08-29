// skills.ts
import type { Skill, SkillCategory } from "./types";

const skills: SkillCategory[] = [
    {
        category: "Languages",
        skills: [
            { id: "c",            name: "C",               level: 7,    iconName: "SiC",              proficiency: "Advanced" },
            { id: "python",       name: "Python",          level: 7,    iconName: "SiPython",         proficiency: "Advanced" },
            { id: "java",         name: "Java",            level: 5,    iconName: "FaJava",           proficiency: "Advanced" },
            { id: "csharp",       name: "C#",              level: 2,    iconName: "PiFileCSharp",     proficiency: "Beginner" },
            { id: "gdscript",     name: "GD Script",       level: 3,    iconName: "SiGodotengine",    proficiency: "Intermediate" },
            { id: "haskell",      name: "Haskell",         level: 6,    iconName: "SiHaskell",        proficiency: "Advanced" },
            { id: "javascript",   name: "JavaScript",      level: 4,    iconName: "SiJavascript",     proficiency: "Intermediate" },
            { id: "typescript",   name: "TypeScript",      level: 4,    iconName: "SiTypescript",     proficiency: "Intermediate" },
            { id: "html",         name: "HTML",            level: 6,    iconName: "SiHtml5",          proficiency: "Advanced" },
            { id: "css",          name: "CSS",             level: 6,    iconName: "FaCss3Alt",        proficiency: "Advanced" },
            { id: "tailwind",     name: "Tailwind",        level: 6,    iconName: "SiTailwindcss",    proficiency: "Advanced" }
        ]
    },
    {
        category: "Frameworks",
        skills: [
            { id: "react",   name: "React",   level: 6, iconName: "SiReact",      proficiency: "Advanced" },
            { id: "nodejs",  name: "Node.js", level: 6, iconName: "SiNodedotjs",  proficiency: "Advanced" },
            { id: "nextjs",  name: "Next.js", level: 4, iconName: "SiNextdotjs",  proficiency: "Intermediate" },
            { id: "unity",   name: "Unity",   level: 3, iconName: "SiUnity",      proficiency: "Intermediate" },
            { id: "godot",   name: "Godot",   level: 4, iconName: "SiGodotengine",proficiency: "Intermediate" }
        ]
    },
    {
        category: "Tools",
        skills: [
            { id: "git",           name: "Git",           level: 8, iconName: "SiGit",             proficiency: "Expert" },
            { id: "mongodb",       name: "MongoDB",       level: 3, iconName: "SiMongodb",         proficiency: "Intermediate" },
            { id: "visualstudio",  name: "Visual Studio", level: 5, iconName: "BiLogoVisualStudio",proficiency: "Advanced" },
            { id: "figma",         name: "Figma",         level: 3, iconName: "FaFigma",           proficiency: "Intermediate" },
            { id: "canva",         name: "Canva",         level: 7, iconName: "SiCanva",           proficiency: "Advanced" }
        ]
    },
    {
        category: "Learning",
        skills: [
            { id: "unrealengine", name: "Unreal Engine",   level: 0, iconName: "SiUnrealengine",  proficiency: "Beginner" },
            { id: "cplusplus",    name: "C++",             level: 0, iconName: "SiCplusplus",     proficiency: "Beginner" },
            { id: "ai",           name: "Artificial Intelligence", level: 0, iconName: "GiArtificialIntelligence", proficiency: "Beginner" },
            { id: "ml",           name: "Machine Learning", level: 0, iconName: "GiArtificialHive", proficiency: "Beginner" },
            { id: "rust",         name: "Rust",            level: 0, iconName: "FaRust",          proficiency: "Beginner" }
        ]
    }
];

const flatSkills: Skill[] = skills.flatMap(group => group.skills);
const skillMap: Record<string, Skill> = Object.fromEntries(flatSkills.map(s => [s.id, s]));

export type { Skill, SkillCategory };
export { skills, flatSkills, skillMap };