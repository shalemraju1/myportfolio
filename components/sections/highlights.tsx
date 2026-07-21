"use client";

import Reveal from "@/components/animations/reveal";
import SectionHeader from "@/components/ui/section-header";
import HighlightCard from "@/components/ui/highlight-card";
import { highlights } from "@/constants/highlights";

export default function Highlights() {
    return (
        <section
            id="achievements"
            className="border-t border-white/10 py-24"
        >
            <div className="mx-auto max-w-7xl px-6">
                <SectionHeader
                    eyebrow="Achievements"
                    title="Recognition Through"
                    highlight="Competitions & Technical Excellence"
                />

                <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {highlights.map((item, index) => (
                        <Reveal
                            key={item.title}
                            delay={index * 0.15}
                        >
                            <HighlightCard
                                icon={item.icon}
                                title={item.title}
                                subtitle={item.subtitle}
                                description={item.description}
                                link={item.link}
                            />
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}