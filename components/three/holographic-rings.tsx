"use client";

import * as THREE from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";

interface HolographicRingProps {
  radius?: number;
  tubeRadius?: number;
  color?: string;
  position?: [number, number, number];
  rotation?: [number, number, number];
  floatSpeed?: number;
  floatIntensity?: number;
  rotationSpeed?: [number, number, number];
  opacity?: number;
}

function HolographicRing({
  radius = 3,
  tubeRadius = 0.015,
  color = "#00f2fe",
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  floatSpeed = 1,
  floatIntensity = 0.5,
  rotationSpeed = [0.001, 0.003, 0],
  opacity = 0.7,
}: HolographicRingProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += rotationSpeed[0];
    meshRef.current.rotation.y += rotationSpeed[1];
    meshRef.current.rotation.z += rotationSpeed[2];
  });

  return (
    <Float speed={floatSpeed} floatIntensity={floatIntensity} rotationIntensity={0.1}>
      <mesh ref={meshRef} position={position} rotation={new THREE.Euler(...rotation)}>
        <torusGeometry args={[radius, tubeRadius, 3, 128]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={opacity}
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </Float>
  );
}

/**
 * Collection of holographic floating torus rings with varied sizes, colors,
 * orientations and Float animation physics for organic movement.
 */
export function HolographicRings() {
  return (
    <group>
      {/* Primary large cyan ring - tilted on the right */}
      <HolographicRing
        radius={4.5}
        tubeRadius={0.018}
        color="#00f2fe"
        position={[5, 0, -6]}
        rotation={[Math.PI * 0.35, 0.3, 0]}
        floatSpeed={0.7}
        floatIntensity={0.4}
        rotationSpeed={[0.001, 0.0015, 0.0005]}
        opacity={0.55}
      />

      {/* Medium purple ring - left area */}
      <HolographicRing
        radius={3}
        tubeRadius={0.014}
        color="#9d4edd"
        position={[-6, 1.5, -4]}
        rotation={[Math.PI * 0.5, 0.6, 0.2]}
        floatSpeed={0.9}
        floatIntensity={0.55}
        rotationSpeed={[-0.0012, 0.002, 0.0008]}
        opacity={0.5}
      />

      {/* Small inner neon pink ring - centered lower */}
      <HolographicRing
        radius={2}
        tubeRadius={0.012}
        color="#f43f5e"
        position={[2, -3, -2]}
        rotation={[Math.PI * 0.15, 0, 0.8]}
        floatSpeed={1.2}
        floatIntensity={0.7}
        rotationSpeed={[0.002, -0.001, 0.003]}
        opacity={0.45}
      />

      {/* Thin wide ring - far back */}
      <HolographicRing
        radius={7}
        tubeRadius={0.01}
        color="#00f2fe"
        position={[0, 0, -15]}
        rotation={[Math.PI * 0.05, 0, 0]}
        floatSpeed={0.4}
        floatIntensity={0.2}
        rotationSpeed={[0.0005, 0.001, 0]}
        opacity={0.2}
      />

      {/* Second medium ring - upper right */}
      <HolographicRing
        radius={2.5}
        tubeRadius={0.013}
        color="#7dd3fc"
        position={[7, 3, -8]}
        rotation={[0.3, Math.PI * 0.4, 0.5]}
        floatSpeed={1.1}
        floatIntensity={0.6}
        rotationSpeed={[0.0018, -0.0022, 0.001]}
        opacity={0.4}
      />
    </group>
  );
}
