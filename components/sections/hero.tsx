"use client";

import { HeroScene } from "@/components/three/hero-scene-loader";

export default function Hero() {
    return (
        <section className="relative flex min-h-screen items-center overflow-hidden">
            {/* 3D Background */}
            <div className="absolute inset-0 -z-10">
                <HeroScene />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-background/10 to-background" />

            {/* Content */}
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6">
                <div className="max-w-3xl">
                    <p className="mb-4 text-lg font-medium text-cyan-400">
                        👋 Hello, I'm
                    </p>

                    <h1 className="text-6xl font-black tracking-tight md:text-8xl">
                        Shalem
                        <br />
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                            Raju
                        </span>
                    </h1>

                    <p className="mt-8 max-w-2xl text-xl leading-9 text-muted-foreground">
                        AI Engineer • Machine Learning Enthusiast • Full Stack Developer
                    </p>

                    <div className="mt-10 flex gap-4">
                        <button className="rounded-xl bg-cyan-500 px-7 py-4 font-semibold text-black transition hover:scale-105">
                            Explore Projects
                        </button>

                        <button className="rounded-xl border border-white/20 px-7 py-4 font-semibold backdrop-blur-lg transition hover:bg-white/10">
                            Download Resume
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}