"use client";

import Reveal from "@/components/animations/reveal";
import SectionHeader from "@/components/ui/section-header";
import HighlightCard from "@/components/ui/highlight-card";
import { highlights } from "@/constants/highlights";

export default function Highlights() {
    return (
        <section
            id="highlights"
            className="min-h-screen border-t border-white/10 py-24"
        >
            <div className="mx-auto max-w-7xl px-6">
                <SectionHeader
                    eyebrow="Highlights"
                    title="Awards,"
                    highlight="Leadership & Recognition"
                />

                <div className="mt-16 grid gap-8 md:grid-cols-2">
                    {highlights.map((item, index) => (
                        <Reveal
                            key={item.title}
                            delay={index * 0.15}
                        >
                            <HighlightCard {...item} />
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}