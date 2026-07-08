import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";

export default function Home() {
    return (
        <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
            <Hero />
            <About />
            <Skills />
        </main>
    );
}