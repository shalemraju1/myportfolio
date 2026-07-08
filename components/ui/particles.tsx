"use client";

import React, { useEffect, useRef } from "react";

interface ParticlesProps {
  quantity?: number;
  staticity?: number;
  ease?: number;
  color?: string;
}

export function Particles({
  quantity = 80,
  staticity = 50,
  ease = 50,
  color = "#00f2fe",
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const circles = useRef<any[]>([]);
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;

  useEffect(() => {
    if (canvasRef.current) {
      context.current = canvasRef.current.getContext("2d");
    }
    
    initCanvas();
    
    let animationFrameId: number;
    const animate = () => {
      if (context.current) {
        context.current.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h);
        circles.current.forEach((circle, i) => {
          // Fade in
          if (circle.alpha < circle.targetAlpha) {
            circle.alpha += 0.01;
          }

          // Move particle
          circle.x += circle.dx;
          circle.y += circle.dy;

          // Parallax / mouse repulsion logic
          const dx = mouse.current.x - (circle.x + circle.translateX);
          const dy = mouse.current.y - (circle.y + circle.translateY);
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Force field within a 150px mouse radius
          if (distance < 150) {
            const force = (150 - distance) / 150;
            // Particles are pushed away based on their individual magnetism weight
            const pushX = (dx / distance) * force * circle.magnetism * 0.8;
            const pushY = (dy / distance) * force * circle.magnetism * 0.8;

            circle.translateX -= pushX;
            circle.translateY -= pushY;
          } else {
            // Smoothly ease back toward the base path
            circle.translateX *= 0.98;
            circle.translateY *= 0.98;
          }

          // Boundary check: Wrap around or reset
          if (
            circle.x + circle.translateX < 0 ||
            circle.x + circle.translateX > canvasSize.current.w ||
            circle.y + circle.translateY < 0 ||
            circle.y + circle.translateY > canvasSize.current.h
          ) {
            circles.current[i] = circleParams();
            circles.current[i].alpha = 0; // Fade in fresh particles
          } else {
            drawCircle(circle, true);
          }
        });
      }
      animationFrameId = window.requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (event: MouseEvent) => {
      if (canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect();
        mouse.current.x = event.clientX - rect.left;
        mouse.current.y = event.clientY - rect.top;
      }
    };

    window.addEventListener("resize", initCanvas);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("resize", initCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [color, quantity]);

  const initCanvas = () => {
    resizeCanvas();
    drawParticles();
  };

  const resizeCanvas = () => {
    if (canvasContainerRef.current && canvasRef.current && context.current) {
      circles.current = [];
      canvasSize.current.w = canvasContainerRef.current.offsetWidth;
      canvasSize.current.h = canvasContainerRef.current.offsetHeight;
      canvasRef.current.width = canvasSize.current.w * dpr;
      canvasRef.current.height = canvasSize.current.h * dpr;
      canvasRef.current.style.width = `${canvasSize.current.w}px`;
      canvasRef.current.style.height = `${canvasSize.current.h}px`;
      context.current.scale(dpr, dpr);
    }
  };

  const circleParams = (): any => {
    const x = Math.random() * canvasSize.current.w;
    const y = Math.random() * canvasSize.current.h;
    const translateX = 0;
    const translateY = 0;
    const size = Math.random() * 1.8 + 0.6; // Thin premium dot sizes
    const alpha = 0;
    const targetAlpha = Math.random() * 0.45 + 0.15; // Sleek translucent alpha
    const dx = (Math.random() - 0.5) * 0.15; // Subtle float speed
    const dy = (Math.random() - 0.5) * 0.15;
    const magnetism = 0.5 + Math.random() * 3.5; // Custom repulsion resistance
    return {
      x,
      y,
      translateX,
      translateY,
      size,
      alpha,
      targetAlpha,
      dx,
      dy,
      magnetism,
    };
  };

  // Convert Hex string color to RGB array
  const hexToRgb = (hex: string): number[] => {
    let cleanHex = hex.replace("#", "");
    if (cleanHex.length === 3) {
      cleanHex = cleanHex.split("").map((char) => char + char).join("");
    }
    const num = parseInt(cleanHex, 16);
    return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
  };

  const rgb = hexToRgb(color);

  const drawCircle = (circle: any, update = false) => {
    if (context.current) {
      const { x, y, translateX, translateY, size, alpha } = circle;
      context.current.beginPath();
      context.current.arc(x + translateX, y + translateY, size, 0, 2 * Math.PI);
      context.current.fillStyle = `rgba(${rgb.join(", ")}, ${alpha})`;
      context.current.fill();

      if (!update) {
        circles.current.push(circle);
      }
    }
  };

  const drawParticles = () => {
    context.current?.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h);
    for (let i = 0; i < quantity; i++) {
      const circle = circleParams();
      drawCircle(circle);
    }
  };

  return (
    <div className="absolute inset-0 -z-10 w-full h-full" ref={canvasContainerRef} aria-hidden="true">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
