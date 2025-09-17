import type { Experience, ExperienceType } from "./types";
import { skillMap } from "./skills";
import { projectsMap } from "./projects";

const experiences: Experience[] = [
    /* Experience Template
    {
        id: "",
        title: "",
        type: [""],
        company: "",
        companyLink: ""
        period: "",
        dateStarted: new Date(0, 0),
        dateEnded: new Date(0, 0),
        description: "",
        projectsList: [],
        skillsList: [],
    }
    */
    {
        id: "selco-2025",
        title: "Software/AI Developer",
        type: ["Internship", "Full-time", "Part-time"],
        company: "Selco Consulting",
        companyLink: "https://www.linkedin.com/company/selco-consulting/",
        period: "August 2025 - Present",
        dateStarted: new Date(2025, 7),
        dateEnded: undefined,
        description: "",
        projectsList: [],
        skillsList: [skillMap.typescript, skillMap.react, skillMap.ai]
    },
    {
        id: "hepsiburada-2023",
        title: "Front-end Web Developer",
        type: ["Internship", "Full-time"],
        company: "Hepsiburada",
        companyLink: "https://www.linkedin.com/company/hepsiburada/",
        period: "January 2023 – February 2023",
        dateStarted: new Date(2023, 0),
        dateEnded: new Date(2023, 1),
        description: "At Hepsiburada, I developed the Elementify website using Vanilla JavaScript, HTML, and CSS. I expanded my skills with Node.js and React by building a to-do app. I also contributed to discussions on localization and package size optimization.",
        projectsList: [projectsMap.elementify],
        skillsList: [skillMap.javascript, skillMap.html, skillMap.nodejs, skillMap.react]
    },
    {
        id: "ibtech-2022",
        title: "Web Developer",
        type: ["Internship", "Full-time"],
        company: "IBTech Technologies",
        companyLink: "https://www.linkedin.com/company/ibtech-a-s-/",
        period: "August 2022",
        dateStarted: new Date(2022, 7),
        dateEnded: undefined,
        description: "During my time at IBTech, I analyzed QNB Finansbank's applications to learn about server architecture and quality assurance, and designed a basic MVC website using Visual Studio to understand application structure.",
        projectsList: [],
        skillsList: [skillMap.visualstudio, skillMap.csharp, ]
    }
];

export type { Experience, ExperienceType };
export { experiences };