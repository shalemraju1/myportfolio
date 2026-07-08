import type { Project } from "@/types/project";
export const projects: Project[] = [
    {
        title: "Brain Tumor Detection using Deep Learning",
        type: "Personal Project",
        description:
            "AI-powered MRI brain tumor detection using TensorFlow, Keras, OpenCV and Flask.",
        image: "/images/projects/brain-tumor.png",
        github: "#",
        demo: "#",
        technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "Flask"],
    },
    {
        title: "Audit Management System",
        type: "Internship Project • Confidential",
        description:
            "Worked on an enterprise audit management platform by implementing the Auditee module, improving UI components, fixing bugs, and integrating role-based workflows using React and TypeScript.",
        image: "/images/projects/audit-management.png",
        github: "",
        demo: "",
        technologies: [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Context API",
        ],
    },
    {
        title: "Digital Krishi",
        type: "Hackathon Prototype",
        description:
            "Prototype AI assistant for agriculture with multilingual support, voice input, and intelligent crop recommendations.",
        image: "/images/projects/digital-krishi.png",
        github: "#",
        demo: "",
        technologies: [
            "Python",
            "Flask",
            "Whisper",
            "ChromaDB",
            "LLM",
        ],
    },
    {
        title: "Student Tutor Platform",
        type: "Team Project",
        description:
            "Android application connecting students and tutors with authentication, profiles, and booking features.",
        image: "/images/projects/student-tutor.png",
        github: "",
        demo: "",
        technologies: [
            "Kotlin",
            "Firebase",
            "Android",
            "Firestore",
        ],
    },
];