"use client";

import SectionHeader from "@/components/ui/section-header";
import ContactCard from "@/components/ui/contact-card";
import Reveal from "@/components/animations/reveal";

export default function Contact() {
    return (
        <section
            id="contact"
            className="border-t border-white/10 py-24"
        >
            <div className="mx-auto max-w-7xl px-6">
                <SectionHeader
                    eyebrow="Get In Touch"
                    title="Let's Build Something"
                    highlight="Together"
                />
                <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                    I'm always open to discussing new opportunities, collaborations,
                    and innovative projects. Feel free to reach out—I'd love to connect.
                </p>

                <div className="mt-16 grid gap-8 md:grid-cols-3">
                    <Reveal delay={0}>
                        <ContactCard
                            title="Email"
                            value="bejawadashalem@gmail.com"
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=bejawadashalem@gmail.com"
                        />
                    </Reveal>

                    <Reveal delay={0.15}>
                        <ContactCard
                            title="GitHub"
                            value="@shalemraju1"
                            href="https://github.com/shalemraju1"
                        />
                    </Reveal>

                    <Reveal delay={0.3}>
                        <ContactCard
                            title="LinkedIn"
                            value="Shalem Raju"
                            href="https://www.linkedin.com/in/shalem-raju-bejawada-170b40290/"
                        />
                    </Reveal>
                </div>
            </div>
        </section>
    );
}