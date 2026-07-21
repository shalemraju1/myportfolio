"use client";

import { projects } from "@/constants/projects";
import ProjectCard from "@/components/ui/project-card";
import SectionHeader from "@/components/ui/section-header";
import StaggerReveal from "@/components/animations/stagger-reveal";
import Reveal from "@/components/animations/reveal";

export default function Projects() {
    return (
        <section
            id="projects"
            className="border-t border-white/10 py-24"
        >
            <div className="mx-auto max-w-7xl px-6">
                <Reveal>
                    <SectionHeader
                        eyebrow="Projects"
                        title="Featured Work"
                        highlight="Built to Solve Real Problems"
                    />
                </Reveal>

                <StaggerReveal>
                    <div className="space-y-10">
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