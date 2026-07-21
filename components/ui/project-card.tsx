import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
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
    const hasLinks = project.github || project.demo;

    return (
        <GlassCard
            interactive
            glowColor={index % 2 === 0 ? "blue" : "purple"}
            glowIntensity="medium"
            className="overflow-hidden p-6 md:p-8"
        >
            <div
                className={`flex flex-col items-center gap-8 ${index % 2 === 0
                        ? "lg:flex-row"
                        : "lg:flex-row-reverse"
                    }`}
            >
                {/* Project Image */}
                <div className="group relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 lg:w-1/2">
                    <Image
                        src={project.image}
                        alt={`${project.title} project preview`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>

                {/* Project Content */}
                <div className="flex-1">
                    <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-300">
                        {project.type}
                    </span>

                    <h3 className="mt-4 text-2xl font-bold tracking-tight md:text-3xl">
                        {project.title}
                    </h3>

                    <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
                        {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mt-6 flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-300"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Project Links */}
                    {hasLinks && (
                        <div className="mt-8 flex flex-wrap gap-4">
                            {project.demo && (
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20"
                                >
                                    Live Demo
                                    <HiArrowTopRightOnSquare size={18} />
                                </a>
                            )}

                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
                                >
                                    <FaGithub size={18} />
                                    GitHub
                                </a>
                            )}
                        </div>
                    )}

                    {!hasLinks &&
                        project.type
                            .toLowerCase()
                            .includes("confidential") && (
                            <div className="mt-8">
                                <span className="inline-flex rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-400">
                                    Private Internship Project
                                </span>
                            </div>
                        )}
                </div>
            </div>
        </GlassCard>
    );
}