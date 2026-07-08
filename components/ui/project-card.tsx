import Image from "next/image";
import { GlassCard } from "@/components/ui/glass-card";

import type { Project } from "@/types/project";
interface ProjectCardProps {
    project: Project;
    index: number;
}

export default function ProjectCard({
    project,
    index,
}: ProjectCardProps) {
    return (
        <GlassCard
            interactive
            glowColor={index % 2 === 0 ? "blue" : "purple"}
            glowIntensity="medium"
            className="p-8"
        >
            <div
                className={`flex flex-col gap-8 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
            >
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl lg:w-1/2">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                </div>

                <div className="flex-1">
                    <span className="inline-block rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-300">
                        {project.type}
                    </span>

                    <h3 className="mt-4 text-3xl font-bold">
                        {project.title}
                    </h3>

                    <p className="mt-4 leading-8 text-muted-foreground">
                        {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                        {project.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full border border-cyan-500/30 px-4 py-2 text-sm"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="mt-8 flex gap-4">
                        {project.github ? (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:scale-105"
                            >
                                GitHub
                            </a>
                        ) : null}

                        {project.demo ? (
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-xl border border-white/20 px-6 py-3 transition hover:bg-white/10"
                            >
                                Live Demo
                            </a>
                        ) : null}

                        {!project.github && !project.demo && (
                            <span className="rounded-xl border border-yellow-400/30 bg-yellow-500/10 px-6 py-3 text-yellow-300">
                                Confidential / Private Project
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </GlassCard>
    );
}