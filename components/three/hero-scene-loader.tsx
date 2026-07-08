"use client";

import dynamic from "next/dynamic";

/**
 * Lazy-loaded wrapper for the React Three Fiber Hero scene.
 * 
 * - `ssr: false` prevents Three.js from attempting to run during server-side rendering
 *   (Three.js requires browser APIs like WebGL, window, canvas, etc.)
 * - `loading` provides a transparent placeholder while the heavy JS bundle downloads
 * - Mobile devices that prefer reduced motion will get the CSS-only fallback
 */
const HeroScene = dynamic(() => import("./hero-scene"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-transparent" />,
});

export { HeroScene };
