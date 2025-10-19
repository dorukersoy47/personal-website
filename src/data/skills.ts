// skills.ts
import type { Skill, SkillCategory } from "./types";

const skills: SkillCategory[] = [
    {
        category: "Languages",
        skills: [
            { id: "c", name: "C", level: 7, proficiency: "Advanced", iconName: "SiC" },
            { id: "python", name: "Python", level: 7, proficiency: "Advanced", iconName: "SiPython" },
            { id: "java", name: "Java", level: 5, proficiency: "Advanced", iconName: "FaJava" },
            { id: "csharp", name: "C#", level: 2, proficiency: "Beginner", iconName: "PiFileCSharp" },
            { id: "gdscript", name: "GD Script", level: 4, proficiency: "Intermediate", iconName: "SiGodotengine" },
            { id: "haskell", name: "Haskell", level: 6, proficiency: "Advanced", iconName: "SiHaskell" },
            { id: "javascript", name: "JavaScript", level: 5, proficiency: "Intermediate", iconName: "SiJavascript" },
            { id: "typescript", name: "TypeScript", level: 5, proficiency: "Intermediate", iconName: "SiTypescript" },
            { id: "html", name: "HTML", level: 6, proficiency: "Advanced", iconName: "SiHtml5" },
            { id: "css", name: "CSS", level: 6, proficiency: "Advanced", iconName: "FaCss3Alt" },
            { id: "tailwind", name: "Tailwind", level: 6, proficiency: "Advanced", iconName: "SiTailwindcss" },
            { id: "json", name: "JSON", level: 6, proficiency: "Intermediate", iconName: "BsFiletypeJson"},
            { id: "sql", name: "SQL", level: 4, proficiency: "Advanced", iconName: ""},
        ]
    },
    {
        category: "Frameworks",
        skills: [
            { id: "react", name: "React", level: 6, proficiency: "Advanced", iconName: "SiReact" },
            { id: "nodejs", name: "Node.js", level: 5, proficiency: "Advanced", iconName: "SiNodedotjs" },
            { id: "nextjs", name: "Next.js", level: 6, proficiency: "Intermediate", iconName: "SiNextdotjs" },
            { id: "unity", name: "Unity", level: 3, proficiency: "Intermediate", iconName: "SiUnity" },
            { id: "godot", name: "Godot", level: 5, proficiency: "Intermediate", iconName: "SiGodotengine" },
            { id: "maven", name: "Maven", level: 4, proficiency: "Intermediate", iconName: ""},
        ]
    },
    {
        category: "Tools",
        skills: [
            { id: "git", name: "Git", level: 8, proficiency: "Expert", iconName: "SiGit" },
            { id: "mongodb", name: "MongoDB", level: 3, proficiency: "Intermediate", iconName: "SiMongodb" },
            { id: "visualstudio", name: "Visual Studio", level: 4, proficiency: "Advanced", iconName: "BiLogoVisualStudio" },
            { id: "figma", name: "Figma", level: 3, proficiency: "Intermediate", iconName: "FaFigma" },
            { id: "canva", name: "Canva", level: 7, proficiency: "Advanced", iconName: "SiCanva" },
            { id: "watsonx", name: "IBM Watsonx API", level: 4, proficiency: "Beginner", iconName: "GiArtificialHive"},
            { id: "esp32", name: "ESP32", level: 3, proficiency: "Intermediate", iconName: " "},
            { id: "arduino", name: "Arduino", level: 3, proficiency: "Intermediate", iconName: " "},
        ]
    },
    {
        category: "Concepts",
        skills: [
            { id: "oop", name: "Object-Oriented Programming", level: 8, proficiency: "Advanced", iconName: " "},
            { id: "dsa", name: "Data Structures and Algorithms", level: 7, proficiency: "Advanced", iconName: " "},
            { id: "oop", name: "Logic", level: 6, proficiency: "Advanced", iconName: " "},
            { id: "ai", name: "Artificial Intelligence", level: 3, proficiency: "Intermediate", iconName: " "},
            { id: "ml", name: "Machine Learning", level: 1, proficiency: "Beginner", iconName: " "},
        ]
    },
    {
        category: "Soft Skills",
        skills: [
            { id: "teamwork", name: "Teamwork", level: 10, proficiency: "Expert", iconName: ""},
            { id: "collaboration", name: "Collaboration", level: 9, proficiency: "Expert", iconName: ""},
            { id: "leadership", name: "Leadership", level: 7, proficiency: "Advanced", iconName: ""},
            { id: "communication", name: "Communication", level: 8, proficiency: "Advanced", iconName: ""},
            { id: "teaching", name: "Teaching", level: 8, proficiency: "Advanced", iconName: ""},
            { id: "projectmanagement", name: "Project Management", level: 6, proficiency: "Advanced", iconName: ""},
            { id: "socialmedia", name: "Social Media", level: 5, proficiency: "Intermediate", iconName: ""},
            { id: "publicspeaking", name: "Public Speaking", level: 7, proficiency: "Advanced", iconName: ""},
            { id: "research", name: "Research", level: 7, proficiency: "Advanced", iconName: ""},
            { id: "timemanagement", name: "Time Management", level: 6, proficiency: "Advanced", iconName: ""},
        ]
    },
    {
        category: "Learning",
        skills: [
            // { id: "unrealengine", name: "Unreal Engine", level: 0, proficiency: "Beginner", iconName: "SiUnrealengine" },
            { id: "cplusplus", name: "C++", level: 0, proficiency: "Beginner", iconName: "SiCplusplus" },
            // { id: "ai", name: "Artificial Intelligence", level: 0, proficiency: "Beginner", iconName: "GiArtificialIntelligence" },
            // { id: "ml", name: "Machine Learning", level: 0, proficiency: "Beginner", iconName: "GiArtificialHive" },
            // { id: "rust", name: "Rust", level: 0, proficiency: "Beginner", iconName: "FaRust" },
        ]
    }
];

const flatSkills: Skill[] = skills.flatMap(group => group.skills);
const skillMap: Record<string, Skill> = Object.fromEntries(flatSkills.map(s => [s.id, s]));

export type { Skill, SkillCategory };
export { skills, flatSkills, skillMap };