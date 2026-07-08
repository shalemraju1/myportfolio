"use client";

import { useEffect, useState } from "react";

/**
 * Custom hook to track which section is currently active in the viewport.
 * Uses IntersectionObserver for high performance, and falls back to scroll checks
 * for edge cases like reaching the absolute bottom of the document.
 * 
 * @param sectionIds Array of section element IDs to track
 * @param rootMargin Options for the intersection observer
 */
export function useActiveSection(
  sectionIds: string[],
  rootMargin = "-25% 0px -55% 0px"
) {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    if (typeof window === "undefined" || sectionIds.length === 0) return;

    // Set up the intersection observer
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      rootMargin,
      threshold: [0, 0.1, 0.2],
    });

    // Observe each section
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    // Scroll listener for bottom-of-page fallback
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // If we are at the bottom of the page, activate the last section (typically contact)
      if (Math.abs(documentHeight - scrollPosition) < 20) {
        setActiveSection(sectionIds[sectionIds.length - 1]);
      } else if (window.scrollY === 0) {
        // If we're at the top, activate the first section (typically home)
        setActiveSection(sectionIds[0]);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds, rootMargin]);

  return activeSection;
}
