"use client";

import SectionHeader from "@/components/ui/section-header";
import EducationCard from "@/components/ui/education-card";
import Reveal from "@/components/animations/reveal";
import { education } from "@/constants/education";

export default function Education() {
    return (
        <section
            id="education"
            className="min-h-screen border-t border-white/10 py-24"
        >
            <div className="mx-auto max-w-7xl px-6">
                <SectionHeader
                    eyebrow="Education"
                    title="Academic"
                    highlight="Journey"
                />

                <div className="mt-16 space-y-8">
                    {education.map((item, index) => (
                        <Reveal
                            key={item.year}
                            delay={index * 0.15}
                        >
                            <EducationCard
                                year={item.year}
                                degree={item.degree}
                                institution={item.institution}
                                score={item.score}
                            />
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}