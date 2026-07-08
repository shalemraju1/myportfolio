"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface RevealProps {
    children: React.ReactNode;
    delay?: number;
}

export default function Reveal({
    children,
    delay = 0,
}: RevealProps) {
    const ref = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!ref.current) return;

        gsap.fromTo(
            ref.current,
            {
                opacity: 0,
                y: 60,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1.2,
                delay,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ref.current,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            }
        );
    }, []);

    return <div ref={ref}>{children}</div>;
}