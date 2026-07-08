"use client";

import * as THREE from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

/**
 * Volumetric ambient light glow meshes simulating point-light bloom sources.
 * Uses large transparent spheres with emissive additive blending to create
 * soft gradient light pools without requiring post-processing effects.
 */
export function GradientLighting() {
  const blueRef = useRef<THREE.Mesh>(null);
  const purpleRef = useRef<THREE.Mesh>(null);
  const pinkRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // Breathe each glow orb with slow sine oscillation
    if (blueRef.current) {
      blueRef.current.position.x = Math.sin(t * 0.2) * 3;
      blueRef.current.position.y = Math.cos(t * 0.15) * 2;
      const mat = blueRef.current.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.06 + Math.sin(t * 0.5) * 0.02;
    }
    if (purpleRef.current) {
      purpleRef.current.position.x = Math.cos(t * 0.18) * 4 - 4;
      purpleRef.current.position.y = Math.sin(t * 0.12) * 2.5 + 1;
      const mat = purpleRef.current.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.05 + Math.cos(t * 0.4) * 0.02;
    }
    if (pinkRef.current) {
      pinkRef.current.position.x = Math.sin(t * 0.25) * 2 + 5;
      pinkRef.current.position.y = Math.cos(t * 0.2) * 1.5 - 2;
      const mat = pinkRef.current.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.04 + Math.sin(t * 0.6 + 1) * 0.015;
    }
  });

  return (
    <group>
      {/* Ambient lighting */}
      <ambientLight intensity={0.15} />
      <directionalLight position={[5, 5, 5]} intensity={0.3} color="#ffffff" />
      
      {/* Neon Blue volume glow - left center */}
      <mesh ref={blueRef} position={[-3, 0, -5]}>
        <sphereGeometry args={[6, 16, 16]} />
        <meshBasicMaterial
          color="#00f2fe"
          transparent
          opacity={0.06}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* Neon Purple volume glow - right upper */}
      <mesh ref={purpleRef} position={[4, 1, -8]}>
        <sphereGeometry args={[8, 16, 16]} />
        <meshBasicMaterial
          color="#9d4edd"
          transparent
          opacity={0.05}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* Neon Pink volume glow - lower right */}
      <mesh ref={pinkRef} position={[5, -2, -6]}>
        <sphereGeometry args={[5, 16, 16]} />
        <meshBasicMaterial
          color="#f43f5e"
          transparent
          opacity={0.04}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* Static ambient fill light - deep back */}
      <mesh position={[0, 0, -20]}>
        <sphereGeometry args={[15, 8, 8]} />
        <meshBasicMaterial
          color="#0f0520"
          transparent
          opacity={0.35}
          side={THREE.BackSide}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}
