"use client";

import { projects } from "@/constants/projects";
import ProjectCard from "@/components/ui/project-card";

export default function Projects() {
    return (
        <section
            id="projects"
            className="min-h-screen border-t border-white/10 py-24"
        >
            <div className="mx-auto max-w-7xl px-6">
                <p className="mb-3 font-semibold uppercase tracking-widest text-cyan-400">
                    Projects
                </p>

                <h2 className="text-5xl font-bold">
                    Featured Work
                </h2>

                <div className="mt-16 space-y-10">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.title}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}