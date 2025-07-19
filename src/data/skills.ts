interface Skill {
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
      { name: "C", level: 7, iconName: "SiC" },
      { name: "Python", level: 7, iconName: "SiPython" },
      { name: "Java", level: 5, iconName: "FaJava" },
      { name: "C#", level: 2, iconName: "PiFileCSharp" },
      { name: "GD Script", level: 3, iconName: "SiGodotengine" },
      { name: "Haskell", level: 6, iconName: "SiHaskell" },
      { name: "JavaScript", level: 4, iconName: "SiJavascript" },
      { name: "TypeScript", level: 4, iconName: "SiTypescript" },
      { name: "HTML", level: 6, iconName: "SiHtml5" },
      { name: "CSS/Tailwind", level: 6, iconName: "SiTailwindcss" }
    ]
  },
  {
    category: "Frameworks",
    skills: [
      { name: "React", level: 6, iconName: "SiReact" },
      { name: "Node.js", level: 6, iconName: "SiNodedotjs" },
      { name: "Next.js", level: 4, iconName: "SiNextdotjs" },
      { name: "Unity", level: 3, iconName: "SiUnity" },
      { name: "Godot", level: 4, iconName: "SiGodotengine" }
    ]
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", level: 8, iconName: "SiGit" },
      { name: "MongoDB", level: 3, iconName: "SiMongodb" },
      { name: "Visual Studio", level: 5, iconName: "BiLogoVisualStudio" },
      { name: "Figma", level: 3, iconName: "FaFigma" },
      { name: "Canva", level: 7, iconName: "SiCanva" }
    ]
  },
  {
    category: "Learning",
    skills: [
      { name: "Unreal Engine", level: 0, iconName: "SiUnrealengine" },
      { name: "C++", level: 0, iconName: "SiCplusplus" },
      { name: "Artificial Intelligence", level: 0, iconName: "GiArtificialIntelligence" },
      { name: "Machine Learning", level: 0, iconName: "GiArtificialHive" },
      { name: "Rust", level: 0, iconName: "FaRust" }
    ]
  }
];

export type { Skill, SkillCategory };
export { skills };
