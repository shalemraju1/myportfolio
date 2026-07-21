"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import SectionHeader from "@/components/ui/section-header";
import { GlassCard } from "@/components/ui/glass-card";
import StatCard from "@/components/ui/stat-card";
import { stats } from "@/constants/about";
import Reveal from "@/components/animations/reveal";
export default function About() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    return (
        <section
            id="about"
            className="flex min-h-screen items-center border-t border-white/10"
        >
            <div className="mx-auto max-w-7xl px-6 py-12">
                <Reveal>
                    <SectionHeader
                        eyebrow="About Me"
                        title="Building intelligent software with"
                        highlight="AI, Full Stack Development & Problem Solving."
                        className="mb-8"
                    />
                </Reveal>

                <p className="mt-10 max-w-5xl text-lg leading-8 text-muted-foreground">
                    I'm{" "}
                    <span className="font-semibold text-white">
                        Bejawada Shalem Raju
                    </span>
                    , someone who enjoys transforming ideas into real products. I love combining
                    Artificial Intelligence with modern full-stack development to build solutions
                    that solve practical problems and create meaningful user experiences.

                    <br />
                    <br />

                    Whether it's developing AI-powered healthcare applications, building scalable
                    web platforms, or participating in hackathons, I enjoy learning by building.
                    Every project is an opportunity to explore new technologies, improve my skills,
                    and create software that delivers real value.
                </p>
                <div
                    ref={ref}
                    className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4"
                >
                    {stats.map((stat) => (
                        <StatCard
                            key={stat.label}
                            value={stat.value}
                            label={stat.label}
                            suffix={stat.suffix}
                            inView={inView}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}