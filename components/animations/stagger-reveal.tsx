"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface StaggerRevealProps {
    children: React.ReactNode;
}

export default function StaggerReveal({
    children,
}: StaggerRevealProps) {
    const ref = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!ref.current) return;

        gsap.from(ref.current.querySelectorAll(":scope > *"), {
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ref.current,
                start: "top 80%",
                once: true,
            },
        });
    }, []);

    return <div ref={ref}>{children}</div>;
}