"use client";

import * as THREE from "three";
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";

interface AnimatedStarsProps {
  count?: number;
}

/**
 * Custom animated starfield using Points geometry for maximum performance.
 * Stars subtly drift and have a gentle breathing opacity pulse.
 */
export function AnimatedStars({ count = 2000 }: AnimatedStarsProps) {
  const meshRef = useRef<THREE.Points>(null);

  // Generate randomized star positions, sizes and opacities once
  const [positions, sizes, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const colors = new Float32Array(count * 3);

    // Color palette: neon-blue, neon-purple, white, slate
    const palette = [
      new THREE.Color("#00f2fe"),
      new THREE.Color("#9d4edd"),
      new THREE.Color("#ffffff"),
      new THREE.Color("#94a3b8"),
      new THREE.Color("#7dd3fc"),
    ];

    for (let i = 0; i < count; i++) {
      // Spherical distribution across a large radius
      const r = 80 + Math.random() * 120;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      // Varied star sizes - mostly tiny, a few bigger
      sizes[i] = 0.3 + Math.random() * (Math.random() > 0.95 ? 2.5 : 0.8);

      // Pick a color from palette
      const color = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    return [positions, sizes, colors];
  }, [count]);

  // Slow rotation animation
  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.y = t * 0.015;
    meshRef.current.rotation.x = Math.sin(t * 0.008) * 0.05;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[sizes, 1]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.5}
        vertexColors
        sizeAttenuation
        transparent
        opacity={0.75}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
