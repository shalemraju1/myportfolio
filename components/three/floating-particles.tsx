"use client";

import * as THREE from "three";
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";

interface FloatingParticlesProps {
  count?: number;
}

/**
 * Dense floating particle field using instanced mesh-like Points geometry.
 * Particles drift upward and shimmer with sine-wave offsets for organic motion.
 */
export function FloatingParticles({ count = 400 }: FloatingParticlesProps) {
  const meshRef = useRef<THREE.Points>(null);

  const [positions, speeds, offsets] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    const offsets = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      // Scatter particles within a contained volume around the hero area
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;

      speeds[i] = 0.3 + Math.random() * 0.7;
      offsets[i] = Math.random() * Math.PI * 2;
    }
    return [positions, speeds, offsets];
  }, [count]);

  // Store mutable copy of positions for animation
  const posRef = useRef(new Float32Array(positions));

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    const geo = meshRef.current.geometry;
    const pos = posRef.current;

    for (let i = 0; i < count; i++) {
      // Gentle sine-wave horizontal drift
      pos[i * 3] += Math.sin(t * speeds[i] * 0.2 + offsets[i]) * 0.002;
      // Slow upward float
      pos[i * 3 + 1] += speeds[i] * 0.003;
      // Wrap around when particle floats out of frame
      if (pos[i * 3 + 1] > 10) pos[i * 3 + 1] = -10;
      // Depth oscillation
      pos[i * 3 + 2] = Math.sin(t * 0.3 + offsets[i]) * 7.5;
    }

    // Mark positions as needing GPU update
    const attr = geo.getAttribute("position") as THREE.BufferAttribute;
    attr.array = pos;
    attr.needsUpdate = true;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#00f2fe"
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
