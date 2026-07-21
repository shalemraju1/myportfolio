"use client";

import Reveal from "@/components/animations/reveal";
import SectionHeader from "@/components/ui/section-header";
import HackathonCard from "@/components/ui/hackathon-card";
import { hackathons } from "@/constants/hackathons";

export default function Hackathons() {
    return (
        <section
            id="hackathons"
            className="border-t border-white/10 py-24"
        >
            <div className="mx-auto max-w-7xl px-6">
                <SectionHeader
                    eyebrow="Hackathons"
                    title="Innovation Through"
                    highlight="Hackathons & Technical Events"
                />

                <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {hackathons.map((item, index) => (
                        <Reveal
                            key={item.title}
                            delay={index * 0.15}
                        >
                            <HackathonCard
                                title={item.title}
                                organizer={item.organizer}
                                duration={item.duration}
                                year={item.year}
                                certificate={item.certificate}
                            />
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}