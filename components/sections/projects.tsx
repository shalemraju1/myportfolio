"use client";

import { projects } from "@/constants/projects";
import ProjectCard from "@/components/ui/project-card";
import StaggerReveal from "@/components/animations/stagger-reveal";
import Reveal from "@/components/animations/reveal";

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

                <StaggerReveal>
                    <div className="mt-16 space-y-10">
                        {projects.map((project, index) => (
                            <Reveal
                                key={project.title}
                                delay={index * 0.15}
                            >
                                <ProjectCard
                                    project={project}
                                    index={index}
                                />
                            </Reveal>
                        ))}
                    </div>
                </StaggerReveal>
            </div>
        </section>
    );
}