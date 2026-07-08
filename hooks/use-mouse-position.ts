"use client";

import { useEffect } from "react";
import { useMotionValue, useSpring } from "framer-motion";

/**
 * Custom hook to track mouse position normalized around the viewport center.
 * Returns spring-smoothed motion values perfect for mouse parallax animations.
 * 
 * Range is -0.5 (left/top) to 0.5 (right/bottom).
 * 
 * @param springConfig Framer motion spring physics settings
 */
export function useMousePosition(
  springConfig = { stiffness: 80, damping: 25 }
) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Wrap in spring values to smooth out sudden pointer movements
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleMouseMove = (event: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      
      // Calculate coordinates normalized between -0.5 and 0.5
      const normalizedX = event.clientX / innerWidth - 0.5;
      const normalizedY = event.clientY / innerHeight - 0.5;

      x.set(normalizedX);
      y.set(normalizedY);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [x, y]);

  return { x: springX, y: springY };
}
