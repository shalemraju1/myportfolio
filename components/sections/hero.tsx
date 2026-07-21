"use client";

import { HeroScene } from "@/components/three/hero-scene-loader";
import { siteConfig } from "@/constants/site";
import { socials } from "@/constants/socials";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import HeroVideo from "@/components/ui/hero-video";
import Link from "next/link";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative flex min-h-screen items-center overflow-hidden"
        >
            {/* 3D Background */}
            <div className="absolute inset-0 -z-10">
                <HeroScene />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-background/10 to-background" />

            {/* Content */}
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 px-6 lg:grid-cols-2">                <div className="max-w-3xl pt-12 md:pt-16">

                {/* Top Badges */}
                <div className="mb-6 flex flex-wrap gap-3">
                    <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 backdrop-blur-xl">
                        👋 Final Year AI & ML Student
                    </span>

                    <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur-xl">
                        📍 Hyderabad, India
                    </span>
                </div>

                {/* Availability Badge */}
                <div className="mb-8">
                    <div className="inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-5 py-2 backdrop-blur-xl">
                        <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400" />

                        <span className="text-sm font-medium text-emerald-300">
                            Available for Full-Time Opportunities • 2027
                        </span>
                    </div>
                </div>

                {/* Name */}
                <h1 className="text-6xl font-black tracking-tight md:text-8xl">
                    {siteConfig.firstName}
                    <br />
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                        {siteConfig.lastName}
                    </span>
                </h1>

                {/* Profession */}
                <p className="mt-6 text-2xl font-semibold text-cyan-400">
                    AI Engineer • Full Stack Developer • Machine Learning Enthusiast
                </p>

                {/* Description */}
                <div className="mt-8 max-w-2xl">
                    <p className="text-lg leading-8 text-muted-foreground md:text-xl">
                        I'm{" "}
                        <span className="font-semibold text-white">
                            Bejawada Shalem Raju
                        </span>
                        , a final-year Artificial Intelligence & Machine
                        Learning student specializing in building intelligent
                        applications.
                    </p>
                </div>

                {/* Buttons */}
                <div className="mt-9 flex flex-wrap gap-20">
                    <button className="group rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-500/40">
                        <Link
                            href="#projects"
                            className="group rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-500/40"
                        >
                            Explore Projects →
                        </Link>
                    </button>

                    <a
                        href={socials.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-semibold backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
                    >
                        Download Resume
                    </a>
                </div>

                {/* Social Links */}



            </div>
                <div className="hidden lg:flex flex-col items-center justify-center pt-24 xl:pt-28 xl:pl-6 shadow-[0_0_100px_rgba(34,211,238,0.18)]">
                    <HeroVideo />

                    <div className="mt-14 flex items-center justify-center gap-20">
                        <a
                            href={socials.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20"
                        >
                            <FaGithub size={30} />
                        </a>

                        <a
                            href={socials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20"
                        >
                            <FaLinkedin size={30} />
                        </a>

                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=bejawadashalem@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20"
                        >
                            <HiOutlineMail size={30} />
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}