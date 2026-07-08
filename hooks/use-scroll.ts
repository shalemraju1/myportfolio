"use client";

import { useState, useEffect } from "react";

/**
 * Custom hook that returns whether the page has been scrolled beyond a given threshold.
 * Optimized to run only on the client side.
 * 
 * @param threshold The scroll threshold in pixels (defaults to 40)
 */
export function useScroll(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // If we're not in the browser, do nothing
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return scrolled;
}
