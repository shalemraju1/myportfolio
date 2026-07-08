"use client";
import { skills } from "@/constants/skills";
import SkillGroupCard from "@/components/ui/skill-group-card";
import { skillGroups } from "@/constants/skill-groups";
import Reveal from "@/components/animations/reveal";

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

                {skillGroups.map((group, index) => (
                    <Reveal
                        key={group.title}
                        delay={index * 0.15}
                    >
                        <SkillGroupCard title={group.title}>
                            {group.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 transition-colors duration-300 hover:border-cyan-400 hover:bg-cyan-500/20"
                                >
                                    {skill}
                                </span>
                            ))}
                        </SkillGroupCard>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}