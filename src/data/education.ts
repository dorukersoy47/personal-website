// Education data and utility functions
import type { Education, Certificate } from "./types";

// Education entries
const educationEntries: Education[] = [
    {
        id: "ucl",
        featured: true,
        institution: "University College London (UCL)",
        degree: "BSc Computer Science",
        type: "University",
        location: "London, UK",
        dateStarted: new Date(2024, 8), // September 2024
        dateEnded: new Date(2027, 5),   // June 2027
        period: "September 2024 - June 2027",
        description:
            "Studying Computer Science with a focus on software engineering, AI systems, and game development. Achieved a First Class average in Year 1.",
        grade: "78.6 / 100 (First-Year)",
        extracurriculars: [
            "Game Development Society - President",
            "Turkish Society - Sponsor & Outreach Officer",
            "Hiking Club, Computer Science Society - Member"
        ]
    },
    {
        id: "ib-diploma",
        featured: true,
        institution: "The Koç School",
        degree: "International Baccalaureate Diploma",
        type: "High School",
        location: "Istanbul, Turkey",
        dateStarted: new Date(2022, 8), // September 2022
        dateEnded: new Date(2024, 5),   // June 2024
        period: "September 2022 - June 2024",
        description:
            "Completed the IB Diploma Programme with a strong focus on science and mathematics alongside extended research in computer science for the Extended Essay.",
        grade: "40 / 45 Points",
        extracurriculars: []
    },
    {
        id: "koc-high-school",
        featured: false,
        institution: "The Koç School",
        degree: "Turkish National High School Diploma",
        type: "High School",
        location: "Istanbul, Turkey",
        dateStarted: new Date(2020, 8), // September 2020
        dateEnded: new Date(2024, 5),   // June 2024
        period: "September 2020 - June 2024",
        description:
            "Attended Koç High School on a 40% merit-based scholarship, completing the Turkish national curriculum in parallel with the IB. Maintained a strong academic record and developed early projects in programming and game development.",
        grade: "93.76 / 100",
        extracurriculars: [
            "Game Development Club - Co-Founder and President",
            "Track and Field Team - Captain"
        ]
    }
];

// Certificates
const certificates: Certificate[] = [
    {
        id: "c-linux-intro",
        name: "Introduction to C & Linux",
        issuer: "Linux Foundation",
        completionYear: 2022,
        description:
            "Comprehensive introduction to C programming language and Linux operating system fundamentals. Covered system programming, memory management, and command-line tools.",
        credentialUrl: undefined
    }
];

// Export functions to get data
export function getEducation(): Education[] {
    return educationEntries;
}

export function getFeaturedEducation(): Education[] {
    return educationEntries.filter((edu) => edu.featured);
}

export function getCertificates(): Certificate[] {
    return certificates;
}

export function getEducationById(id: string): Education | undefined {
    return educationEntries.find((edu) => edu.id === id);
}

// Export data
export { educationEntries, certificates };
