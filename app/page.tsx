import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import Education from "@/components/sections/education";
import Highlights from "@/components/sections/highlights";
import Certifications from "@/components/sections/certifications";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import Hackathons from "@/components/sections/hackathons";


export default function Home() {
    return (
        <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
            <Hero />
            <About />
            <Education />
            <Skills />
            <Experience />
            <Projects />
            <Highlights />
            <Hackathons />
            <Certifications />
            <Contact />
            <Footer />
        </main>
    );
}