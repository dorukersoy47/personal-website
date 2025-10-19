export type ProjectType =
    | "Web Development"
    | "Game Development"
    | "App Development"
    | "Research"
    | "AI"
    | "Electronics"
    | "Systems & Engines"
    | "Other";

export type ProjectStatus =
    | "Active"
    | "Archived"
    | "Restricted"

export type ExperienceType =
    | "Internship"
    | "Part-time"
    | "Full-time"
    | "Research"
    | "Freelance"
    | "Leadership"
    | "Volunteering";

export type ProficiencyLevel = 
    | "Interested"
    | "Beginner" 
    | "Intermediate" 
    | "Advanced" 
    | "Expert";

export interface Skill {
    id: string;
    name: string;
    level: number;            // 0–10, used only for a UI progress bar
    proficiency: ProficiencyLevel; 
    iconName: string;         // react-icons key or similar
}

export interface SkillCategory {
    category: string;
    skills: Skill[];
}

export interface Project {
    id: string;
    featured: boolean;
    title: string;
    type: ProjectType;
    status: ProjectStatus;
    dateDone: Date;
    desc_tech: string;
    desc_refl: string;
    imageSrc?: string;
    imageAlt?: string;
    demoName?: string;
    demoUrl?: string;
    githubUrl?: string;
    docSrc?: string;
    skillsList?: Skill[];
}

export interface Experience {
    id: string;
    title: string;
    type: ExperienceType[];
    company: string;
    companyLink: string;
    period: string;
    dateStarted: Date;
    dateEnded?: Date;
    desc_tech: string;
    desc_refl: string;
    projectsList: Project[];
    skillsList?: Skill[];
}