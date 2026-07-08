"use client";

import { HeroScene } from "@/components/three/hero-scene-loader";
import { siteConfig } from "@/constants/site";
import { socials } from "@/constants/socials";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
    return (
        <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
            {/* 3D Background */}
            <div className="absolute inset-0 -z-10">
                <HeroScene />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-background/10 to-background" />

            {/* Content */}
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6">
                <div className="max-w-3xl">
                    <div className="mb-6 flex flex-wrap gap-3">
                        <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 backdrop-blur-xl">
                            👋 Hello, I'm
                        </span>

                        <span className="rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300 backdrop-blur-xl">
                            📍 Hyderabad, India
                        </span>
                    </div>
                    <div className="mb-8">
                        <div className="inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-5 py-2 backdrop-blur-xl">
                            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400"></span>

                            <span className="text-sm font-medium text-emerald-300">
                                Currently Building AI Products & Full Stack Applications
                            </span>
                        </div>
                    </div>

                    <h1 className="text-6xl font-black tracking-tight md:text-8xl">
                        {siteConfig.firstName}
                        <br />
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                            {siteConfig.lastName}
                        </span>
                    </h1>

                    <div className="mt-8 max-w-2xl">
                        <TypeAnimation
                            sequence={[
                                "AI Engineer",
                                2000,
                                "Machine Learning Enthusiast",
                                2000,
                                "Full Stack Developer",
                                2000,
                                "Problem Solver",
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="text-2xl font-semibold text-cyan-400"
                        />

                        <p className="mt-6 text-lg leading-8 text-muted-foreground">
                            I build AI-powered applications and modern web experiences that solve
                            real-world problems using Machine Learning, React, TypeScript, and Python.
                        </p>
                    </div>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <button className="group rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-500/40">
                            Explore Projects →
                        </button>

                        <a
                            href={socials.resume}
                            target="_blank"
                            className="rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-semibold backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
                        >
                            Download Resume
                        </a>
                    </div>
                    <div className="mt-8 flex items-center gap-5">
                        <a href={socials.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 transition hover:text-cyan-400 hover:scale-110"
                        >
                            <FaGithub size={24} />
                        </a>

                        <a href={socials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 transition hover:text-cyan-400 hover:scale-110"
                        >
                            <FaLinkedin size={24} />
                        </a>

                        <a href={socials.email}
                            className="text-slate-400 transition hover:text-cyan-400 hover:scale-110"
                        >
                            <HiOutlineMail size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}