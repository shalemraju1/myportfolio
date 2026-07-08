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
            <div className="mx-auto max-w-7xl px-6 py-24">
                <Reveal>
                    <SectionHeader
                        eyebrow="About Me"
                        title="Building intelligent software with"
                        highlight="AI, Full Stack Development & Problem Solving."
                    />
                </Reveal>

                <p className="mt-8 max-w-3xl text-lg leading-8 text-muted-foreground">
                    I'm{" "}
                    <span className="font-semibold text-white">
                        Bejawada Shalem Raju
                    </span>
                    , a final-year B.Tech student specializing in Artificial Intelligence
                    and Machine Learning at MLRIT, Hyderabad.
                    <br />
                    <br />
                    I enjoy building AI-powered applications, modern full-stack web
                    experiences, and solving real-world problems using Machine Learning,
                    React, TypeScript, Python, and SQL.
                    <br />
                    <br />
                    My goal is to become an AI Engineer while continuously exploring new
                    technologies and creating products that make an impact.
                </p>

                <div
                    ref={ref}
                    className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4"
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