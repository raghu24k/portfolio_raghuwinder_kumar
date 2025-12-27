import { Github, Instagram, Linkedin, Mail } from "lucide-react";

export const portfolioData = {
    personalInfo: {
        name: "Raghuwinder Kumar",
        title: "AI/ML Engineer & Full Stack Developer",
        role: "AI/ML Engineer & Full Stack Developer",
        tagline: "AI can fear you, not me, because I adopt.",
        about: "I am a dedicated 3rd-year B.Tech student with a burning passion for Artificial Intelligence and Machine Learning. Beyond algorithms, I am also a skilled Full Stack React Developer. I thrive on solving complex problems and building robust applications that merge cutting-edge AI with seamless user interfaces.",
        email: "raghuwinderkumar24k@gmail.com",
        cvUrl: "#" // Add CV Link here if available
    },
    socials: [
        { name: "GitHub", url: "https://github.com/raghu24k", icon: Github },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/raghuwinder-kumar", icon: Linkedin },
        { name: "Instagram", url: "https://www.instagram.com/raghuwinder17/", icon: Instagram },
        { name: "Email", url: "mailto:raghuwinderkumar24k@gmail.com", icon: Mail },
    ],
    skills: [
        "Python",
        "React",
        "HTML5",
        "CSS3",
        "SQL",
        "MySQL",
        "Java",
        "Machine Learning"
    ],
    projects: [
        {
            title: "Conversion Toolbox",
            description: "A robust web application designed to handle file conversions seamlessly (Docs to PDF, Images, etc.) and PDF merging. Designed for efficiency and ease of use.",
            techStack: ["React", "Java", "JavaScript", "CSS"],
            liveLink: "https://converstiontoolbox.vercel.app/",
            githubLink: "https://github.com/raghu24k/converstion_toolbox"
        },
        // Add more projects here
    ],
    education: [
        {
            institution: "RK University, Rajkot, Gujarat",
            degree: "B.Tech in Computer Science",
            period: "Present (3rd Year)",
            description: "Focusing on AI/ML and Software Development."
        }
    ]
};
