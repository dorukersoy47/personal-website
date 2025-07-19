interface Skill {
  id: string;
  name: string;
  level: number;
  iconName: string; 
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

const skills: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { id: "c", name: "C", level: 7, iconName: "SiC" },
      { id: "python", name: "Python", level: 7, iconName: "SiPython" },
      { id: "java", name: "Java", level: 5, iconName: "FaJava" },
      { id: "csharp", name: "C#", level: 2, iconName: "PiFileCSharp" },
      { id: "gdscript", name: "GD Script", level: 3, iconName: "SiGodotengine" },
      { id: "haskell", name: "Haskell", level: 6, iconName: "SiHaskell" },
      { id: "javascript", name: "JavaScript", level: 4, iconName: "SiJavascript" },
      { id: "typescript", name: "TypeScript", level: 4, iconName: "SiTypescript" },
      { id: "html", name: "HTML", level: 6, iconName: "SiHtml5" },
      { id: "css-tailwind", name: "CSS/Tailwind", level: 6, iconName: "SiTailwindcss" }
    ]
  },
  {
    category: "Frameworks",
    skills: [
      { id: "react", name: "React", level: 6, iconName: "SiReact" },
      { id: "nodejs", name: "Node.js", level: 6, iconName: "SiNodedotjs" },
      { id: "nextjs", name: "Next.js", level: 4, iconName: "SiNextdotjs" },
      { id: "unity", name: "Unity", level: 3, iconName: "SiUnity" },
      { id: "godot", name: "Godot", level: 4, iconName: "SiGodotengine" }
    ]
  },
  {
    category: "Tools",
    skills: [
      { id: "git", name: "Git", level: 8, iconName: "SiGit" },
      { id: "mongodb", name: "MongoDB", level: 3, iconName: "SiMongodb" },
      { id: "visualstudio", name: "Visual Studio", level: 5, iconName: "BiLogoVisualStudio" },
      { id: "figma", name: "Figma", level: 3, iconName: "FaFigma" },
      { id: "canva", name: "Canva", level: 7, iconName: "SiCanva" }
    ]
  },
  {
    category: "Learning",
    skills: [
      { id: "unrealengine", name: "Unreal Engine", level: 0, iconName: "SiUnrealengine" },
      { id: "cplusplus", name: "C++", level: 0, iconName: "SiCplusplus" },
      { id: "ai", name: "Artificial Intelligence", level: 0, iconName: "GiArtificialIntelligence" },
      { id: "ml", name: "Machine Learning", level: 0, iconName: "GiArtificialHive" },
      { id: "rust", name: "Rust", level: 0, iconName: "FaRust" }
    ]
  }
];

export type { Skill, SkillCategory };
export { skills };
