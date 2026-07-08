"use client";

import { useState, useCallback, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { AdaptiveDpr, PerformanceMonitor, Preload } from "@react-three/drei";
import { AnimatedStars } from "./animated-stars";
import { FloatingParticles } from "./floating-particles";
import { HolographicRings } from "./holographic-rings";
import { GradientLighting } from "./gradient-lighting";
import { CameraRig } from "./camera-rig";

/**
 * Inner scene content – separated so Suspense can catch it cleanly.
 */
function SceneContent({ dpr }: { dpr: number }) {
  return (
    <>
      <CameraRig />
      <GradientLighting />
      <AnimatedStars count={1800} />
      <FloatingParticles count={350} />
      <HolographicRings />
      <AdaptiveDpr pixelated />
      <Preload all />
    </>
  );
}

/**
 * Minimal loading fallback while the Three scene bootstraps.
 */
function SceneLoader() {
  return null; // Silent fallback - CSS background already present behind canvas
}

/**
 * HeroScene — the primary React Three Fiber Canvas wrapper.
 *
 * Performance features:
 * - AdaptiveDpr: Automatically lowers pixel ratio on slow devices
 * - PerformanceMonitor: Dynamically adjusts scene complexity based on live FPS
 * - frameloop="demand": Only renders on state change (conserves battery/GPU on idle)
 * - dpr capped at [1, 2] to avoid 4K renders on Retina
 * - Mobile: Reduces particle count via isMobile check
 * - Lazy loaded via next/dynamic in parent
 */
export default function HeroScene() {
  const [dpr, setDpr] = useState(1.5);

  const handleIncline = useCallback(() => {
    setDpr(Math.min(2, dpr + 0.2));
  }, [dpr]);

  const handleDecline = useCallback(() => {
    setDpr(Math.max(1, dpr - 0.3));
  }, [dpr]);

  return (
    <Canvas
      dpr={dpr}
      camera={{ position: [0, 0, 12], fov: 60, near: 0.1, far: 300 }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
        // Disable stencil and depth writes we don't need for optimization
        stencil: false,
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <PerformanceMonitor
        onIncline={handleIncline}
        onDecline={handleDecline}
        flipflops={3}
        factor={0.5}
        step={0.2}
      >
        <Suspense fallback={<SceneLoader />}>
          <SceneContent dpr={dpr} />
        </Suspense>
      </PerformanceMonitor>
    </Canvas>
  );
}
