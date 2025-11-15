import type { Experience, ExperienceType } from "./types";
import { skillMap } from "./skills";
import { projectsMap } from "./projects";

const experiences: Experience[] = [
    // ────────────────────────────────
    //  Template Experience
    // ────────────────────────────────
    /*
    {
        id: "",
        featured: ,
        title: "",
        type: [""],
        company: "",
        companyLink: "",
        period: "",
        dateStarted: new Date(2025, 0),
        dateEnded: new Date(2025, 0),
        desc_tech: "",   
        desc_refl: "",
        projectsList: [],
        skillsList: []
    },
    */
    {
        id: "mentor-2025",
        featured: true,
        title: "Programming Mentor",
        type: ["Part-time"],
        company: "University College London (UCL)",
        companyLink: "",
        period: "October 2025 - Present",
        dateStarted: new Date(2025, 9),
        dateEnded: undefined,
        desc_tech: "As a Programming Mentor in the UCL Department of Computer Science, I support first-year students in developing their programming skills and understanding of core computer science concepts. I conduct weekly sessions, helping students debug assignments, grasp class concepts, and apply software engineering principles effectively. I also provide feedback on coding style, problem decomposition, and documentation practices to help them adopt professional workflows early in their degree.",
        desc_refl: "Through this experience, I've strengthened my ability to explain complex technical ideas clearly and adapt my teaching approach to diverse learning styles. Mentoring has not only refined my communication and leadership skills but also reinforced my own understanding of foundational programming concepts through teaching.",
        projectsList: [],
        skillsList: [skillMap.logic, skillMap.oop, skillMap.dsa, skillMap.c, skillMap.python, skillMap.java, skillMap.haskell, skillMap.git, skillMap.teaching, skillMap.leadership, skillMap.communication, skillMap.publicspeaking]
    },
    {
        id: "gamedev-2025",
        featured: true,
        title: "President",
        type: ["Leadership"],
        company: "UCL Game Development Society",
        companyLink: "",
        period: "June 2025 - Present",
        dateStarted: new Date(2025, 5),
        dateEnded: undefined,
        desc_tech:"As President of the UCL Game Development Society, I lead a community of over 90 active members passionate about creating, learning, and experimenting with game design and development. I organize workshops, game jams, and industry talks covering engines like Unity, Unreal, and Godot, as well as core concepts such as AI behavior trees and level design. I manage a small executive team, oversee project groups, and coordinate with the UCL Students' Union to secure funding and event venues.",
        desc_refl: "My leadership focuses on fostering collaboration and making technical creativity approachable for developers of all skill levels. Through this role, I've improved my ability to manage large projects, mentor diverse teams, and connect academic theory with practical game development. It has also taught me how to balance technical direction with community building and strategic planning.",
        projectsList: [projectsMap["flame-n-bake"], projectsMap["untitled-bubble-game"]],
        skillsList: [ skillMap.unity, skillMap.csharp, skillMap.gdscript, skillMap.godot, skillMap.leadership, skillMap.teamwork, skillMap.projectmanagement, skillMap.communication, skillMap.socialmedia, skillMap.publicspeaking ]
    },
    {
        id: "selco-2025",
        title: "Software and AI Developer",
        featured: true,
        type: ["Internship", "Full-time"],
        company: "Selco Consulting",
        companyLink: "https://www.linkedin.com/company/selco-consulting/",
        period: "August 2025 - Present",
        dateStarted: new Date(2025, 7),
        dateEnded: undefined,
        desc_tech: "At Selco Consulting, I work on full-stack and AI-driven systems used by clients in logistics and analytics. I designed internal web tools like Ship360 Maps for visualizing route data and built the SQL-Python Compare Tool to automate data integrity checks across databases. I also developed a benchmarking pipeline for IBM Watsonx agents, testing Turkish prompt handling using ROUGE metrics. Additionally, I wrote 2 research papers on the topics of ML in retail and memory in LLMs.",
        desc_refl: "Working full-time for a month and now continuing part-time allowed me to combine front-end engineering in React and TypeScript with backend scripting in Python. Collaborating with consultants and data scientists has helped me grow as a cross-disciplinary developer who can bridge research, software architecture, and client-facing deployment.",
        projectsList: [ projectsMap["ibm-watsonx-benchmark"], projectsMap["ship360-maps"], projectsMap["database-comparison-tool"], projectsMap["llm-research"], projectsMap["ml-research"]],
        skillsList: [skillMap.typescript, skillMap.react, skillMap.python, skillMap.ai, skillMap.git, skillMap.collaboration]
    },
    {
        id: "hepsiburada-2023",
        title: "Front-end Web Developer Intern",
        featured: true,
        type: ["Internship", "Full-time"],
        company: "Hepsiburada",
        companyLink: "https://www.linkedin.com/company/hepsiburada/",
        period: "January 2023 - February 2023",
        dateStarted: new Date(2023, 0),
        dateEnded: new Date(2023, 1),
        desc_tech: "As a front-end developer intern at Hepsiburada, I contributed to internal UI feature prototypes while learning enterprise-scale web development workflows. I built the Elementify project using vanilla JavaScript, HTML, and CSS, focusing on responsive design and usability. I also experimented with React and Node.js by creating a personal to-do app that followed modular component design.",
        desc_refl: "My time at Hepsiburada exposed me to localization practices and techniques to reduce bundle sizes for faster load times. It gave me insight into professional front-end architecture and how engineering decisions affect scalability in large-scale e-commerce platforms.",
        projectsList: [projectsMap["elementify"]],
        skillsList: [ skillMap.javascript, skillMap.html, skillMap.css, skillMap.nodejs, skillMap.react ]
    },
    {
        id: "ibtech-2022",
        title: "Web Developer Intern",
        featured: false,
        type: ["Internship", "Full-time"],
        company: "IBTech Technologies",
        companyLink: "https://www.linkedin.com/company/ibtech-a-s-/",
        period: "August 2022",
        dateStarted: new Date(2022, 7),
        dateEnded: new Date(2022, 7),
        desc_tech: "During my internship at IBTech, I explored QNB Finansbank's software architecture to understand enterprise-level application design and deployment. I learned about server-side quality assurance and CI testing pipelines while observing how modularity improves maintainability. I built a basic MVC web application in C# using Visual Studio, integrating routing, form handling, and templated views.",
        desc_refl: "This project introduced me to version control in a professional team setting and the fundamentals of .NET development. It marked my transition from theoretical coding knowledge to hands-on software engineering practice in a corporate environment.",
        projectsList: [],
        skillsList: [skillMap.visualstudio, skillMap.csharp]
    },
    // ────────────────────────────────
    //  Volunteering
    // ────────────────────────────────
    {
        id: "gymnastics-2022",
        featured: false,
        title: "Assistant Gymnastics Coach",
        type: ["Volunteering", "Part-time"],
        company: "Atasehir Cimnastik Akademi",
        companyLink: "",
        period: "September 2022 - April 2023",
        dateStarted: new Date(2022, 8),
        dateEnded: new Date(2023, 3),
        desc_tech: "As an assistant gymnastics coach, I supported the lead coaches during training sessions for children and young athletes. I helped plan warm ups and basic drills, demonstrated movements, spotted students during balance and tumbling exercises, and monitored safety on the equipment. I also gave simple individual feedback to help students improve their form and confidence over time.",
        desc_refl: "Coaching taught me how to communicate clearly with younger students, stay patient under pressure, and manage a group while keeping everyone engaged and safe. I became more confident speaking in front of a class, learned how to motivate different personalities, and developed a stronger sense of responsibility by acting as a role model on and off the mat.",
        projectsList: [],
        skillsList: [skillMap.teaching, skillMap.communication, skillMap.leadership, skillMap.publicspeaking]
    },
    {
        id: "beyingocu-2024",
        featured: false,
        title: "Beyin Gocu Tutoring Platform",
        type: ["Volunteering"],
        company: "Beyin Gocu Organisation",
        companyLink: "",
        period: "September 2023 - June 2024",
        dateStarted: new Date(2023, 8),
        dateEnded: new Date(2024, 5),
        desc_tech: "I co founded Beyin Gocu, a student led tutoring platform that shares IB and AP study resources through a website and video content. I helped design and maintain the site using HTML and CSS, organised subject pages and blog style posts, and coordinated the upload workflow for our YouTube channel with more than twenty videos. I also contributed to lesson scripts and example solutions so that our materials stayed consistent, clear, and helpful for students preparing for exams.",
        desc_refl: "This experience showed me how to turn my own subject knowledge into structured resources that others can actually use. Working with a small team improved my project planning skills, from deciding which topics to cover first to scheduling content releases. It also strengthened my communication and teaching skills as I learned to explain complex ideas in simple language for a wide range of students.",
        projectsList: [projectsMap["beyin-gocu"]],
        skillsList: [skillMap.oop, skillMap.java, skillMap.css, skillMap.html, skillMap.socialmedia, skillMap.collaboration, skillMap.teaching, skillMap.communication, skillMap.projectmanagement]
    },
];

export type { Experience, ExperienceType };
export { experiences };