export interface Experience {
  title: string;
  company: string;
  period: string;
  dateStarted: Date;
  description: string;
  technologies: string[];
  type: string;
}

export const experiences: Experience[] = [
  {
    title: "Front-end Web Development Intern",
    company: "Hepsiburada",
    period: "January 2023 – February 2023",
    dateStarted: new Date(2023, 0),
    description: "At Hepsiburada, I developed the Elementify website using Vanilla JavaScript, HTML, and CSS, and expanded my skills with Node.js and React by building a to-do app. I also contributed to discussions on localization and package size optimization.",
    technologies: ["JavaScript", "HTML", "CSS", "Node.js", "React"],
    type: "Internship"
  },
  {
    title: "Back-end Web Development Intern",
    company: "IBTech International Information and Communication Technologies (QNB Finansbank)",
    period: "August 2022",
    dateStarted: new Date(2022, 0),
    description: "During my time at IBTech, I analyzed QNB Finansbank's applications to learn about server architecture and quality assurance, and designed a basic MVC website using Visual Studio to understand application structure.",
    technologies: ["MVC", "Visual Studio", "Quality Assurance", "Server Architecture"],
    type: "Internship"
  }
];
