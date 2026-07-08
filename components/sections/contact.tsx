"use client";

import SectionHeader from "@/components/ui/section-header";
import ContactCard from "@/components/ui/contact-card";
import Reveal from "@/components/animations/reveal";
import { siteConfig } from "@/constants/site";

export default function Contact() {
    return (
        <section
            id="contact"
            className="min-h-screen border-t border-white/10 py-24"
        >
            <div className="mx-auto max-w-7xl px-6">
                <SectionHeader
                    eyebrow="Contact"
                    title="Let's Build Something"
                    highlight="Amazing Together"
                />

                <div className="mt-16 grid gap-8 md:grid-cols-3">
                    <Reveal delay={0}>
                        <ContactCard
                            title="Email"
                            value={siteConfig.email}
                            href={`mailto:${siteConfig.email}`}
                        />
                    </Reveal>

                    <Reveal delay={0.15}>
                        <ContactCard
                            title="GitHub"
                            value="github.com/shalemraju1"
                            href={siteConfig.github}
                        />
                    </Reveal>

                    <Reveal delay={0.3}>
                        <ContactCard
                            title="LinkedIn"
                            value="linkedin.com/in/your-profile"
                            href={siteConfig.linkedin}
                        />
                    </Reveal>
                </div>
            </div>
        </section>
    );
}