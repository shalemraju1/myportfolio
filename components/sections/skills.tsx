"use client";
import { FaJava } from "react-icons/fa6";
import {
    SiPython,
    SiMysql,
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiTensorflow,
    SiOpencv,
    SiDocker,
    SiGit,
} from "react-icons/si";

const skills = [
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

export default function Skills() {
    return (
        <section
            id="skills"
            className="min-h-screen border-t border-white/10 py-24"
        >
            <div className="mx-auto max-w-7xl px-6">
                <p className="mb-3 text-cyan-400 font-semibold uppercase tracking-widest">
                    Skills
                </p>

                <h2 className="text-5xl font-bold">
                    Technologies I work with
                </h2>

                <div className="mt-16 flex flex-wrap gap-4">
                    {skills.map(({ name, icon: Icon }) => (
                        <div
                            key={name}
                            className="group flex items-center gap-3 rounded-full border border-cyan-500/30 bg-white/5 px-6 py-3 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-500/10 hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]"
                        >
                            <Icon className="text-xl text-cyan-400 transition-transform duration-300 group-hover:rotate-12" />
                            <span>{name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}