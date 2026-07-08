"use client";

import * as THREE from "three";
import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";

/**
 * Subtle camera rig that slowly orbits and breathes, giving the scene
 * a sense of depth and life without being distracting.
 * Also reacts gently to mouse position for a parallax feel.
 */
export function CameraRig() {
  const { camera, gl } = useThree();
  const mouseRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });

  // Capture mouse position from canvas events
  const canvas = gl.domElement;
  if (typeof window !== "undefined") {
    // Use a passive event listener for performance
    canvas.onmousemove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseRef.current.y = -((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
  }

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // Smooth mouse tracking with lerp (easing factor)
    targetRef.current.x += (mouseRef.current.x - targetRef.current.x) * 0.04;
    targetRef.current.y += (mouseRef.current.y - targetRef.current.y) * 0.04;

    // Combine slow autonomous orbit with mouse parallax
    const autoX = Math.sin(t * 0.08) * 0.8;
    const autoY = Math.cos(t * 0.06) * 0.4;

    camera.position.x = autoX + targetRef.current.x * 1.2;
    camera.position.y = autoY + targetRef.current.y * 0.8;
    // Keep Z position stable but add subtle push/pull
    camera.position.z = 12 + Math.sin(t * 0.04) * 0.5;

    // Always look toward a slightly elevated center
    camera.lookAt(new THREE.Vector3(0, 0.5, 0));
  });

  return null;
}
