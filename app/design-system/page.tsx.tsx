"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  GlassCard,
  GlassCardHeader,
  GlassCardTitle,
  GlassCardDescription,
  GlassCardContent,
  GlassCardFooter,
} from "@/components/ui/glass-card";
import {
  FiArrowRight,
  FiCode,
  FiLayers,
  FiSend,
  FiSmile,
  FiActivity,
  FiCheck,
  FiZap,
  FiExternalLink,
} from "react-icons/fi";

export default function Home() {
  const [btnLoading, setBtnLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [inputVal, setInputVal] = useState("");

  const triggerButtonLoading = () => {
    setBtnLoading(true);
    setTimeout(() => setBtnLoading(false), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setInputVal("");
    }, 3000);
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground bg-grid-pattern selection:bg-neon-blue/20 selection:text-neon-blue">
      {/* Radiant ambient background meshes */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-neon-blue/10 rounded-full blur-[140px] pointer-events-none -z-20" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-neon-purple/10 rounded-full blur-[160px] pointer-events-none -z-20" />
      <div className="absolute top-[40%] right-[15%] w-[35%] h-[35%] bg-neon-pink/5 rounded-full blur-[120px] pointer-events-none -z-20" />

      {/* Decorative linear grid overlay line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full border-x border-white/[0.02] pointer-events-none -z-10" />

      <main className="max-w-7xl mx-auto px-6 py-20 md:py-32 space-y-24 md:space-y-32">
        {/* Hero Title Section */}
        <section id="home" className="text-center space-y-6 max-w-3xl mx-auto scroll-mt-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs md:text-sm text-slate-300 backdrop-blur-md">
            <FiZap className="text-neon-blue animate-pulse" />
            <span>Tailwind CSS v4 + Next.js 16 Design System</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Premium Developer <br />
            <span className="text-gradient-neon glow-text-purple">Portfolio Design System</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed">
            An ultra-premium visual framework combining Apple design precision, Linear layout flow,
            Vercel developer aesthetics, and futuristic glassmorphic interactions.
          </p>
        </section>

        {/* Color Tokens Swatches */}
        <section id="about" className="space-y-8 scroll-mt-24">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white flex items-center gap-3">
              <span className="h-6 w-1 rounded-full bg-neon-blue" />
              1. Color Tokens System
            </h2>
            <p className="text-slate-400">Custom theme variables designed for ultra-contrast and glowing neon gradients.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="bg-[#050816] border border-white/[0.08] p-4 rounded-xl space-y-3 shadow-lg">
              <div className="h-16 w-full rounded-lg bg-[#050816] border border-white/[0.05]" />
              <div>
                <p className="text-sm font-semibold text-white">Deep Background</p>
                <p className="text-xs text-slate-400 font-mono">#050816</p>
              </div>
            </div>

            <div className="bg-slate-950/40 border border-white/[0.08] p-4 rounded-xl space-y-3 shadow-lg">
              <div className="h-16 w-full rounded-lg bg-neon-blue" />
              <div>
                <p className="text-sm font-semibold text-white">Neon Blue Accent</p>
                <p className="text-xs text-slate-400 font-mono">#00f2fe</p>
              </div>
            </div>

            <div className="bg-slate-950/40 border border-white/[0.08] p-4 rounded-xl space-y-3 shadow-lg">
              <div className="h-16 w-full rounded-lg bg-neon-purple" />
              <div>
                <p className="text-sm font-semibold text-white">Neon Purple Accent</p>
                <p className="text-xs text-slate-400 font-mono">#9d4edd</p>
              </div>
            </div>

            <div className="bg-slate-950/40 border border-white/[0.08] p-4 rounded-xl space-y-3 shadow-lg">
              <div className="h-16 w-full rounded-lg bg-neon-pink" />
              <div>
                <p className="text-sm font-semibold text-white">Neon Pink Accent</p>
                <p className="text-xs text-slate-400 font-mono">#f43f5e</p>
              </div>
            </div>

            <div className="bg-slate-950/40 border border-white/[0.08] p-4 rounded-xl space-y-3 shadow-lg col-span-2 md:col-span-1">
              <div className="h-16 w-full rounded-lg bg-linear-to-r from-neon-blue via-neon-purple to-neon-pink" />
              <div>
                <p className="text-sm font-semibold text-white">Accent Gradient</p>
                <p className="text-xs text-slate-400 font-mono">Linear Gradient</p>
              </div>
            </div>
          </div>
        </section>

        {/* Typography System */}
        <section id="skills" className="space-y-8 scroll-mt-24">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white flex items-center gap-3">
              <span className="h-6 w-1 rounded-full bg-neon-purple" />
              2. Typography System
            </h2>
            <p className="text-slate-400">Beautiful, high-contrast headings with neon drop-shadow gradients.</p>
          </div>

          <div className="glass-panel rounded-2xl p-6 md:p-8 space-y-6">
            <div className="space-y-2 pb-6 border-b border-white/[0.04]">
              <span className="text-xs font-mono text-neon-blue">DISPLAY 1</span>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                Extrabold Display Title
              </h1>
            </div>

            <div className="space-y-2 pb-6 border-b border-white/[0.04]">
              <span className="text-xs font-mono text-neon-purple">GRADIENT TEXT UTILITIES</span>
              <div className="space-y-3">
                <h2 className="text-3xl font-bold text-gradient-neon">
                  Futuristic neon triple-gradient text
                </h2>
                <h2 className="text-3xl font-bold text-gradient-blue-purple">
                  Linear indigo-blue-purple text gradient
                </h2>
                <h2 className="text-3xl font-bold text-gradient-silver">
                  Apple silver gradient text
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <span className="text-xs font-mono text-neon-pink">SANS BODY TEXT</span>
                <p className="text-slate-300 font-sans leading-relaxed">
                  Geist Sans is optimized for maximum visual clarity, sleek paragraph densities,
                  and clean structural alignments. Perfect for bio sections and item descriptions.
                </p>
              </div>
              <div className="space-y-2">
                <span className="text-xs font-mono text-neon-blue">MONOSPACE SYSTEM</span>
                <p className="text-slate-300 font-mono text-sm leading-relaxed">
                  Geist Mono renders console lines, code outputs, and technical metadata
                  with flawless line breaks, crisp letter spacings, and high legibility.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Buttons Section */}
        <section id="projects" className="space-y-8 scroll-mt-24">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white flex items-center gap-3">
              <span className="h-6 w-1 rounded-full bg-neon-pink" />
              3. Polymorphic Button System
            </h2>
            <p className="text-slate-400">
              Interactive button elements supporting standard clicks, routing links, loading states, and custom glow effects.
            </p>
          </div>

          <div className="glass-panel rounded-2xl p-6 md:p-8 space-y-10">
            {/* Grid of Variants */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-200">Button Style Variants</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary">Primary Gradient</Button>
                <Button variant="secondary">Secondary Dark</Button>
                <Button variant="glass">Glass Panel</Button>
                <Button variant="outline">Translucent Outline</Button>
                <Button variant="ghost">Ghost Style</Button>
              </div>
            </div>

            {/* Glowing Buttons */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-200">Neon Glowing Variants</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="glow-blue">Blue Glow</Button>
                <Button variant="glow-purple">Purple Glow</Button>
                <Button variant="glow-pink">Pink Glow</Button>
              </div>
            </div>

            {/* Button Sizes & Icons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-200">Sizes</h3>
                <div className="flex flex-wrap items-center gap-4">
                  <Button variant="glass" size="sm">Small (sm)</Button>
                  <Button variant="glass" size="md">Medium (md)</Button>
                  <Button variant="glass" size="lg">Large (lg)</Button>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-200">Icon Support & Loading Demo</h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="secondary" leftIcon={<FiCode />}>
                    Source Code
                  </Button>
                  <Button variant="primary" rightIcon={<FiArrowRight />}>
                    Get Started
                  </Button>
                  <Button
                    variant="glow-blue"
                    isLoading={btnLoading}
                    onClick={triggerButtonLoading}
                  >
                    {btnLoading ? "Processing" : "Trigger 2s Loading"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Glass Card Section */}
        <section id="experience" className="space-y-8 scroll-mt-24">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white flex items-center gap-3">
              <span className="h-6 w-1 rounded-full bg-neon-blue" />
              4. Futuristic Glass Cards
            </h2>
            <p className="text-slate-400">
              Responsive glass panels featuring backdrop blurs, customizable neon backdrops, and active hover transformations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlassCard glowColor="blue" glowIntensity="medium" interactive>
              <GlassCardHeader>
                <div className="h-10 w-10 rounded-lg bg-neon-blue/10 border border-neon-blue/20 flex items-center justify-center text-neon-blue text-lg">
                  <FiZap />
                </div>
                <GlassCardTitle className="pt-3">Blue Nebula Glow</GlassCardTitle>
                <GlassCardDescription>
                  Subtle blue glow refraction originating from the top-left corner, responding dynamically on mouse-over.
                </GlassCardDescription>
              </GlassCardHeader>
              <GlassCardContent>
                <p className="text-sm text-slate-300">
                  Perfect for highlighting tech stacks, code structures, or developer analytics logs.
                </p>
              </GlassCardContent>
              <GlassCardFooter>
                <span className="text-xs text-neon-blue flex items-center gap-1.5 font-mono">
                  GLOW_COLOR="blue" <FiArrowRight />
                </span>
              </GlassCardFooter>
            </GlassCard>

            <GlassCard glowColor="purple" glowIntensity="high" interactive>
              <GlassCardHeader>
                <div className="h-10 w-10 rounded-lg bg-neon-purple/10 border border-neon-purple/20 flex items-center justify-center text-neon-purple text-lg">
                  <FiLayers />
                </div>
                <GlassCardTitle className="pt-3">Purple Cascade</GlassCardTitle>
                <GlassCardDescription>
                  Premium high-intensity purple backdrop orb designed to reflect through complex glass surfaces.
                </GlassCardDescription>
              </GlassCardHeader>
              <GlassCardContent>
                <p className="text-sm text-slate-300">
                  Enhances card visual hierarchy, making the element stand out within grid layouts.
                </p>
              </GlassCardContent>
              <GlassCardFooter>
                <span className="text-xs text-neon-purple flex items-center gap-1.5 font-mono">
                  GLOW_COLOR="purple" <FiArrowRight />
                </span>
              </GlassCardFooter>
            </GlassCard>

            <GlassCard glowColor="pink" glowIntensity="medium" interactive>
              <GlassCardHeader>
                <div className="h-10 w-10 rounded-lg bg-neon-pink/10 border border-neon-pink/20 flex items-center justify-center text-neon-pink text-lg">
                  <FiActivity />
                </div>
                <GlassCardTitle className="pt-3">Pink Pulse Card</GlassCardTitle>
                <GlassCardDescription>
                  Vibrant pink gradient mesh that simulates refractions through heavy frosted glass.
                </GlassCardDescription>
              </GlassCardHeader>
              <GlassCardContent>
                <p className="text-sm text-slate-300">
                  Adds visual excitement and sets up high-impact call-to-actions for your users.
                </p>
              </GlassCardContent>
              <GlassCardFooter>
                <span className="text-xs text-neon-pink flex items-center gap-1.5 font-mono">
                  GLOW_COLOR="pink" <FiArrowRight />
                </span>
              </GlassCardFooter>
            </GlassCard>
          </div>
        </section>

        {/* Live UI Implementation Playground */}
        <section id="contact" className="space-y-8 scroll-mt-24">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white flex items-center gap-3">
              <span className="h-6 w-1 rounded-full bg-neon-purple" />
              5. Interactive Interface Demos
            </h2>
            <p className="text-slate-400">
              A responsive, functional demonstration of form inputs, focus rings, accessibility elements, and glass layouts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Project Showcase Section */}
            <div className="md:col-span-3 space-y-6">
              <h3 className="text-xl font-semibold text-slate-200">Featured Showcase Grid</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <GlassCard className="border-white/[0.05]" interactive>
                  <GlassCardHeader className="p-5">
                    <span className="text-xs font-mono text-neon-blue">01 / NEXT.JS ENGINE</span>
                    <GlassCardTitle className="text-lg pt-1">App Router Architecture</GlassCardTitle>
                  </GlassCardHeader>
                  <GlassCardContent className="p-5 pt-0">
                    <p className="text-sm text-slate-400">
                      Fully optimized client/server boundary controls, streaming rendering, dynamic metadata.
                    </p>
                  </GlassCardContent>
                </GlassCard>

                <GlassCard className="border-white/[0.05]" interactive>
                  <GlassCardHeader className="p-5">
                    <span className="text-xs font-mono text-neon-purple">02 / WEB GL</span>
                    <GlassCardTitle className="text-lg pt-1">Three.js Particle Meshes</GlassCardTitle>
                  </GlassCardHeader>
                  <GlassCardContent className="p-5 pt-0">
                    <p className="text-sm text-slate-400">
                      Immersive shaders, canvas rendering loops, custom shaders with gsap timeline hooks.
                    </p>
                  </GlassCardContent>
                </GlassCard>
              </div>

              {/* Large project bar card */}
              <GlassCard className="border-white/[0.05]" glowColor="purple" glowIntensity="low" interactive>
                <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-full bg-neon-blue/10 border border-neon-blue/30 text-[10px] font-mono text-neon-blue uppercase">
                        Active Project
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white">Framer Motion Animation Engines</h3>
                    <p className="text-sm text-slate-400 max-w-lg">
                      Custom parallax canvas layouts, spring-bound layouts, and smooth-scroll viewport triggers.
                    </p>
                  </div>
                  <Button variant="outline" rightIcon={<FiExternalLink />} size="sm" className="shrink-0">
                    Visit Project
                  </Button>
                </div>
              </GlassCard>
            </div>

            {/* Interactive Form Component */}
            <div className="md:col-span-2 space-y-6">
              <h3 className="text-xl font-semibold text-slate-200">Interactive Glass Form</h3>

              <GlassCard glowColor="purple" glowIntensity="medium">
                <form onSubmit={handleFormSubmit}>
                  <GlassCardHeader>
                    <GlassCardTitle className="flex items-center gap-2">
                      <FiSmile className="text-neon-purple" />
                      Get In Touch
                    </GlassCardTitle>
                    <GlassCardDescription>
                      Fill out the form below to test responsive glass-input states and animations.
                    </GlassCardDescription>
                  </GlassCardHeader>

                  <GlassCardContent className="space-y-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                        Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        className="glass-input w-full h-11 px-4 rounded-lg text-sm"
                        required
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="message" className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                        Message Preview
                      </label>
                      <textarea
                        id="message"
                        rows={3}
                        value={inputVal}
                        onChange={(e) => setInputVal(e.target.value)}
                        placeholder="Type something to preview it in real-time..."
                        className="glass-input w-full p-4 rounded-lg text-sm resize-none"
                        required
                      />
                    </div>

                    {inputVal && (
                      <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.04] text-xs text-slate-400 space-y-1 font-mono">
                        <p className="text-[10px] text-neon-blue font-semibold uppercase">Real-Time State Preview:</p>
                        <p className="line-clamp-2 italic">{inputVal}</p>
                      </div>
                    )}
                  </GlassCardContent>

                  <GlassCardFooter className="pt-4">
                    {formSubmitted ? (
                      <div className="flex items-center justify-center gap-2 w-full py-2.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-semibold rounded-lg">
                        <FiCheck /> Message Transmitted Successfully!
                      </div>
                    ) : (
                      <Button
                        type="submit"
                        variant="primary"
                        rightIcon={<FiSend />}
                        className="w-full"
                      >
                        Transmit Message
                      </Button>
                    )}
                  </GlassCardFooter>
                </form>
              </GlassCard>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.04] bg-slate-950/20 backdrop-blur-md py-8 mt-12 text-center text-xs text-slate-500 font-mono">
        <p>Premium Design System // Locks: Dark Mode // ACCENT: Blue + Purple + Pink // © 2026</p>
      </footer>
    </div>
  );
}
