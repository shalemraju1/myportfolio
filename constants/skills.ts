import type { Skill } from "@/types/skill";

import { FaJava } from "react-icons/fa6";
import {
    SiDocker,
    SiGit,
    SiMysql,
    SiNextdotjs,
    SiOpencv,
    SiPython,
    SiReact,
    SiTensorflow,
    SiTypescript,
} from "react-icons/si";

export const skills: Skill[] = [
    { name: "Python", icon: SiPython },
    { name: "Java", icon: FaJava },
    { name: "SQL", icon: SiMysql },
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "TensorFlow", icon: SiTensorflow },
    { name: "OpenCV", icon: SiOpencv },
    { name: "Docker", icon: SiDocker },
    { name: "Git", icon: SiGit },
];