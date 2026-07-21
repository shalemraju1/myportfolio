import type { Project } from "@/types/project";

export const projects: Project[] = [
    {
        title: "Brain Tumor Detection – Web Platform",
        type: "Full Stack AI",
        description:
            "AI-powered web application for brain tumor detection using TensorFlow Lite. Features secure authentication, MRI upload, heatmap visualization, prediction reports, history management, and PostgreSQL integration.",
        image: "/images/projects/brain-web.png",
        github: "https://github.com/shalemraju1/brain-tumor-api",
        demo: "https://brain-tumor-api-zg3b.onrender.com",
        technologies: [
            "Flask",
            "TensorFlow Lite",
            "PostgreSQL",
            "Render",
            "HTML",
            "CSS",
            "JavaScript",
        ],
    },

    {
        title: "Brain Tumor Detection – Flutter App",
        type: "Mobile AI",
        description:
            "Cross-platform Flutter application for AI-powered brain tumor detection with MRI upload, heatmap visualization, prediction reports, profile management, and REST API integration.",
        image: "/images/projects/brain-flutter.png",
        github: "https://github.com/shalemraju1/brain-tumor-flutter-app",
        demo: "https://github.com/shalemraju1/brain-tumor-flutter-app/releases/download/v1.0.0/BrainTumorDetection-v1.0.0.apk", // change if needed
        technologies: [
            "Flutter",
            "Dart",
            "REST API",
            "SharedPreferences",
            "TensorFlow Lite",
        ],
    },

    {
        title: "SafetyEye AI",
        type: "Computer Vision",
        description:
            "Real-time PPE compliance monitoring system using YOLOv8 for detecting helmets, safety vests, gloves, and other protective equipment with violation analytics and image logging.",
        image: "/images/projects/safetyeye.png",
        github: "https://github.com/shalemraju1/SafetyEye",
        demo: "",
        technologies: [
            "Python",
            "YOLOv8",
            "OpenCV",
            "Streamlit",
            "Pandas",
        ],
    },
];