"use client";

import Reveal from "@/components/animations/reveal";
import SectionHeader from "@/components/ui/section-header";
import CertificationCard from "@/components/ui/certification-card";
import { certifications } from "@/constants/certifications";

export default function Certifications() {
    return (
        <section
            id="certifications"
            className="border-t border-white/10 py-24"
        >
            <div className="mx-auto max-w-7xl px-6">
                <SectionHeader
                    eyebrow="Certifications"
                    title="Continuous Learning"
                    highlight="Industry Certifications"
                />

                <div className="mt-12 grid gap-6 md:grid-cols-2">
                    {certifications.map((item, index) => (
                        <Reveal
                            key={item.title}
                            delay={index * 0.15}
                        >
                            <CertificationCard
                                title={item.title}
                                issuer={item.issuer}
                                year={item.year}
                                credential={item.credential}
                            />
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}