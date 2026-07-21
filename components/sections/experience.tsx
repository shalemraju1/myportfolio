"use client";

import SectionHeader from "@/components/ui/section-header";
import TimelineItem from "@/components/ui/timeline-item";
import { experiences } from "@/constants/experience";
import Reveal from "@/components/animations/reveal";

export default function Experience() {
    return (
        <section
            id="experience"
            className="min-h-screen border-t border-white/10 py-24"
        >
            <div className="mx-auto max-w-7xl px-6">
                <SectionHeader
                    eyebrow="Experience"
                    title="My Journey"
                    highlight="Learning, Building & Growing"
                />

                <div className="relative mt-16 border-l border-cyan-500/20 pl-8 space-y-10">
                    {experiences.map((item, index) => (
                        <Reveal
                            key={`${item.period}-${item.title}`}
                            delay={index * 0.15}
                        >
                            <TimelineItem
                                year={item.period}
                                title={item.title}
                                company={item.company}
                                description={item.description}
                                technologies={item.technologies}
                                link={item.link}
                            />
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}