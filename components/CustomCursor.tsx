
"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
  maxLife: number;
  color: string;
  sparkle: boolean;
};

export default function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (reducedMotion.matches) return;

    let particles: Particle[] = [];
    let animationFrame = 0;
    let isAnimating = false;

    const colors = [
      "138, 191, 69",
      "57, 151, 100",
      "0, 107, 60",
      "190, 230, 125",
      "220, 255, 170",
    ];

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const createParticle = (x: number, y: number) => {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 1.2 + 0.2;
      const maxLife = Math.random() * 25 + 30;

      particles.push({
        x: x + (Math.random() - 0.5) * 8,
        y: y + (Math.random() - 0.5) * 8,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 0.3,
        size: Math.random() * 3 + 1.5,
        life: maxLife,
        maxLife,
        color: colors[Math.floor(Math.random() * colors.length)],
        sparkle: Math.random() > 0.78,
      });

      // Batasi jumlah partikel agar tetap ringan
      if (particles.length > 110) {
        particles.splice(0, particles.length - 110);
      }
    };

    const drawSparkle = (
      x: number,
      y: number,
      size: number
    ) => {
      ctx.beginPath();
      ctx.moveTo(x, y - size * 2);
      ctx.lineTo(x + size * 0.35, y - size * 0.35);
      ctx.lineTo(x + size * 2, y);
      ctx.lineTo(x + size * 0.35, y + size * 0.35);
      ctx.lineTo(x, y + size * 2);
      ctx.lineTo(x - size * 0.35, y + size * 0.35);
      ctx.lineTo(x - size * 2, y);
      ctx.lineTo(x - size * 0.35, y - size * 0.35);
      ctx.closePath();
      ctx.fill();
    };

    const animate = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];

        particle.x += particle.vx;
        particle.y += particle.vy;

        particle.vx *= 0.985;
        particle.vy *= 0.985;
        particle.vy -= 0.008;

        particle.life -= 1;

        if (particle.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        const progress = particle.life / particle.maxLife;
        const alpha = progress * 0.85;
        const size = particle.size * (0.4 + progress * 0.6);

        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = `rgba(${particle.color}, 1)`;
        ctx.shadowColor = `rgba(${particle.color}, 0.8)`;
        ctx.shadowBlur = particle.sparkle ? 16 : 10;

        if (particle.sparkle) {
          drawSparkle(particle.x, particle.y, size);
        } else {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }

      if (particles.length > 0) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        isAnimating = false;
      }
    };

    const startAnimation = () => {
      if (isAnimating) return;

      isAnimating = true;
      animationFrame = requestAnimationFrame(animate);
    };

    const handlePointerMove = (event: PointerEvent) => {
      // Hanya mouse dan stylus
      if (
        event.pointerType !== "mouse" &&
        event.pointerType !== "pen"
      ) {
        return;
      }

      const x = event.clientX;
      const y = event.clientY;

      const particleCount = Math.random() > 0.5 ? 2 : 3;

      for (let i = 0; i < particleCount; i++) {
        createParticle(x, y);
      }

      startAnimation();
    };

    const handleResize = () => {
      resizeCanvas();
    };

    const handlePointerLeave = () => {
      // Biarkan partikel yang tersisa memudar secara alami
    };

    resizeCanvas();

    window.addEventListener("resize", handleResize);
    window.addEventListener("pointermove", handlePointerMove);
    document.documentElement.addEventListener(
      "pointerleave",
      handlePointerLeave
    );

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener(
        "pointerleave",
        handlePointerLeave
      );

      cancelAnimationFrame(animationFrame);
      particles = [];
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="custom-cursor-particles"
      aria-hidden="true"
    />
  );
}
