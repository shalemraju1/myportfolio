"use client";

export default function About() {
    return (
        <section
            id="about"
            className="flex min-h-screen items-center border-t border-white/10"
        >
            <div className="mx-auto max-w-7xl px-6 py-24">
                <p className="mb-3 text-cyan-400 font-semibold uppercase tracking-widest">
                    About Me
                </p>

                <h2 className="text-5xl font-bold">
                    Turning ideas into intelligent applications.
                </h2>

                <p className="mt-8 max-w-3xl text-lg leading-8 text-muted-foreground">
                    I'm <span className="font-semibold text-white">Bejawada Shalem Raju</span>, a
                    final-year B.Tech student specializing in Artificial Intelligence and Machine
                    Learning at MLRIT, Hyderabad.

                    I enjoy building AI-powered applications, modern full-stack web experiences,
                    and solving real-world problems using Machine Learning, React, TypeScript,
                    Python, and SQL.

                    My goal is to become an AI Engineer while continuously exploring new
                    technologies and creating products that make an impact.
                </p>
                <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                        <h3 className="text-3xl font-bold text-cyan-400">10+</h3>
                        <p className="mt-2 text-sm text-muted-foreground">Projects</p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                        <h3 className="text-3xl font-bold text-cyan-400">15+</h3>
                        <p className="mt-2 text-sm text-muted-foreground">Technologies</p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                        <h3 className="text-3xl font-bold text-cyan-400">1</h3>
                        <p className="mt-2 text-sm text-muted-foreground">Internship</p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                        <h3 className="text-3xl font-bold text-cyan-400">3+</h3>
                        <p className="mt-2 text-sm text-muted-foreground">Hackathons</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
