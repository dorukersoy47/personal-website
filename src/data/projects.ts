type ProjectType = "Web Development" | "Game Development" | "Paper" | "AI" | "Electronics" | "Other";

interface Project {
    featured: boolean;
    title: string;
    type: ProjectType;
    dateDone: Date;
    description: string;
    imageSrc?: string;
    imageAlt?: string;
    demoName?: string;
    demoUrl?: string;
    githubUrl?: string;
    documentSrc?: string;
    technologies: string[];
}

const projects: Project[] = [
    {
        featured: true,
        title: "Elementify",
        type: "Web Development",
        dateDone: new Date(2024, 0),
        description: "A website that turns names into elements according to the symbols of the elements.",
        imageSrc: "/elementify.jpg",
        imageAlt: "Elementify Web App",
        demoName: "Website",
        demoUrl: "https://elementify.vercel.app/",
        githubUrl: "https://github.com/dorukersoy47/Elementify",
        technologies: ["HTML", "CSS", "JavaScript", "JSON"]
    },
    {
        featured: false,
        title: "Pixel Bounce",
        type: "Game Development",
        dateDone: new Date(2023, 0),
        description: "A video game about juggling a football as much as you can. Developed by the Koç (my high school) Game Dev Club. Published to the Google Play Store (sadly removed due to inactivity).",
        imageSrc: "/pixel-bounce.jpg",
        imageAlt: "Pixel Bounce Game",
        demoName: "Video Demo",
        demoUrl: "https://youtube.com/shorts/OTOP6wANBuQ",
        githubUrl: "https://github.com/dorukersoy47/Pixel-Bounce",
        technologies: ["C#", "Unity", "Git"]
    },
    {
        featured: true,
        title: "Untitled Bubble Game",
        type: "Game Development",
        dateDone: new Date(2025, 0),
        description: "A fast-paced bubble shooter video game developed for the UCL Global Game Jam in 12 hours with two people. The game jam page can be accessed from the GitHub repo.",
        imageSrc: "/untitled-bubble-game.jpg",
        imageAlt: "Untitled Bubble Game",
        demoName: "Video Demo",
        demoUrl: "https://youtu.be/w_5sIsqwhzc",
        githubUrl: "https://github.com/dorukersoy47/untitled-bubble-game/tree/main",
        technologies: ["Godot", "GDScript", "Git"]
    },
    {
        featured: true,
        title: "Class Manager",
        type: "Web Development",
        dateDone: new Date(2024, 0),
        description: "A web app for my piano teacher to help him manage his students' information, lessons, and payments. Also, including realtime translation, students talent analysis, and class availability checker modules.",
        imageSrc: "/class-manager.jpg",
        imageAlt: "Class Manager Web App",
        demoName: "Video Demo",
        demoUrl: "https://youtu.be/WSGepJqu414",
        githubUrl: "https://github.com/dorukersoy47/Class-Manager",
        technologies: ["HTML", "CSS", "JavaScript", "React", "MongoDB", "Git"]
    },
    {
        featured: true,
        title: "Search Filter Extension",
        type: "Web Development",
        dateDone: new Date(2025, 0),
        description: "Chrome extension for advanced search filtering, saving filters, and highlighting/hiding sites via uploaded .txt files.",
        imageSrc: "/search-filter.jpg",
        imageAlt: "Search Filter Extension",
        demoName: "Video Demo",
        demoUrl: "https://youtu.be/-q3bH_ZxtIk",
        githubUrl: "https://github.com/dorukersoy47/search-filter-extension",
        technologies: ["JavaScript", "HTML", "CSS", "Git"]
    },
    {
        featured: false,
        title: "Beyin Gocu Website",
        type: "Web Development",
        dateDone: new Date(2023, 0),
        description: "A website for the student teaching organization 'beyin gocu' created by 3 people including me. Beyin gocu aims on teaching people IB/AP concepts through YouTube videos by recruiting other students.",
        imageSrc: "/beyin-gocu.jpg",
        imageAlt: "Beyin Gocu Web App",
        demoName: "Website",
        demoUrl: "https://beyin-gocu.vercel.app/index.html",
        githubUrl: "https://github.com/dorukersoy47/beyin-gocu",
        technologies: ["JavaScript", "HTML", "CSS"]
    },
    {
        featured: true,
        title: "Procedural Content Generation Research",
        type: "Paper",
        dateDone: new Date(2024, 0),
        description: "Researched and compared cellular automata and Perlin noise algorithms in 2D game map generation using Unity. Analyzed results with Python.",
        imageSrc: "/pcg-research.jpg",
        imageAlt: "Procedural Content Generation Research",
        documentSrc: "/CS%20Extended%20Essay-Doruk%20Ersoy",
        technologies: ["Unity", "C#", "Python", "matplotlib"]
    },
    {
        featured: false,
        title: "Tetris Autoplayer AI Bot",
        type: "AI",
        dateDone: new Date(2025, 0),
        description: "Developed an AI bot in Python to play Tetris autonomously using heuristics and reinforcement learning techniques. Sadly, can't put GitHub repo since UCL regulations.",
        imageSrc: "/tetris-ai.jpg",
        imageAlt: "Tetris Autoplayer AI Bot",
        demoName: "Video Demo",
        demoUrl: "https://youtube.com/shorts/NrdgoBHuWJY",
        technologies: ["Python", "Pygame", "Reinforcement Learning"]
    },
    {
        featured: false,
        title: "Pathfinding Robot",
        type: "Other",
        dateDone: new Date(2025, 0),
        description: "Built a pathfinding bot in a randomly generated map with obstacles and markers using backtracking algorithms in C. Sadly, can't put GitHub repo since UCL regulations.",
        imageSrc: "/pathfinding-robot.jpg",
        imageAlt: "Pathfinding Robot",
        demoName: "Video Demo",
        demoUrl: "https://youtu.be/43KRZqkZhwg",
        technologies: ["C"]
    },
    {
        featured: false,
        title: "Bioreactor Project",
        type: "Electronics",
        dateDone: new Date(2025, 0),
        description: "Designed a small bioreactor that controls temperature, pH, and stirring for optimal yeast growth using Arduino, ESP32, and C for automated monitoring and adjustment of environmental parameters. Sadly, can't put GitHub repo since UCL regulations.",
        imageSrc: "/bioreactor.jpg",
        imageAlt: "Bioreactor Project",
        technologies: ["C", "Arduino", "ESP32", "Control Systems"]
    },
    {
        featured: false,
        title: "Post It Web App",
        type: "Web Development",
        dateDone: new Date(2025, 0),
        description: "Created a Java-based web app for posting, managing, and sorting notes as post-its. Sadly, can't put GitHub repo since UCL regulations.",
        imageSrc: "/post-it-app.jpg",
        imageAlt: "Post It Web App",
        demoName: "Video Demo",
        demoUrl: "https://youtu.be/4EDFYj8ph-I",
        technologies: ["Java", "Maven", "CVS"]
    },
    {
        featured: false,
        title: "Greather Hackathon Project",
        type: "Web Development",
        dateDone: new Date(2023, 0),
        description: "A website developed with 4 people for IB Celo Hackathon with the idea of shaping the world into a more sustainable place by pushing people to do good in return for rewards.",
        imageSrc: "/greather.jpg",
        imageAlt: "Greather Web App",
        demoName: "Website",
        demoUrl: "https://greather.vercel.app",
        githubUrl: "https://github.com/dorukersoy47/greather",
        technologies: ["TypeScript", "Svelte", "Tailwind", "Prisma"]
    }
];

export type { Project, ProjectType };
export { projects };
