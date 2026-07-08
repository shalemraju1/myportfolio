"use client";

import Reveal from "@/components/animations/reveal";
import SectionHeader from "@/components/ui/section-header";
import CertificationCard from "@/components/ui/certification-card";
import { certifications } from "@/constants/certifications";

export default function Certifications() {
    return (
        <section
            id="certifications"
            className="min-h-screen border-t border-white/10 py-24"
        >
            <div className="mx-auto max-w-7xl px-6">
                <SectionHeader
                    eyebrow="Certifications"
                    title="Learning"
                    highlight="Never Stops"
                />

                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {certifications.map((cert, index) => (
                        <Reveal
                            key={cert.title}
                            delay={index * 0.15}
                        >
                            <CertificationCard {...cert} />
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}