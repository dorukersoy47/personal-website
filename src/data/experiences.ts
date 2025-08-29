// experience.ts

import type { Experience, ExperienceType } from "./types";
import { skillMap } from "./skills";

const experiences: Experience[] = [
    {
        id: "selco-2025",
        title: "Software/AI Developer",
        company: "Selco Consulting",
        period: "August 2025 - Present",
        dateStarted: new Date(2025, 0),
        description: "",
        skillsList: [skillMap.typescript, skillMap.react, skillMap.ai],
        type: ["Internship", "Full-time", "Part-time"]
    },
    {
        id: "hepsiburada-2023",
        title: "Front-end Web Developer",
        company: "Hepsiburada",
        period: "January 2023 – February 2023",
        dateStarted: new Date(2023, 0),
        dateEnded: new Date(2023, 1),
        description: "At Hepsiburada, I developed the Elementify website using Vanilla JavaScript, HTML, and CSS, and expanded my skills with Node.js and React by building a to-do app. I also contributed to discussions on localization and package size optimization.",
        skillsList: [skillMap.javascript, skillMap.html, skillMap["css-tailwind"], skillMap.nodejs, skillMap.react],
        type: ["Internship", "Full-time"]
    },
    {
        id: "ibtech-2022",
        title: "Web Developer",
        company: "IBTech Technologies",
        period: "August 2022",
        dateStarted: new Date(2022, 0),
        description: "During my time at IBTech, I analyzed QNB Finansbank's applications to learn about server architecture and quality assurance, and designed a basic MVC website using Visual Studio to understand application structure.",
        skillsList: [skillMap.visualstudio],
        type: ["Internship", "Full-time"]
    }
];

export type { Experience, ExperienceType };
export { experiences };