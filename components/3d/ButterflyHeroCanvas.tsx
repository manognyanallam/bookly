'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

export const ButterflyHeroCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animFrame: number;
    let particles: { x: number; y: number; radius: number; vx: number; vy: number; alpha: number; color: string }[] = [];

    // Warm gold, sage, and ivory particles
    const colors = ['#C59B27', '#DFC056', '#8AC3A3', '#FAF7F2'];

    const resize = () => {
      canvas.width = canvas.parentElement?.clientWidth || 320;
      canvas.height = canvas.parentElement?.clientHeight || 280;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const numParticles = 24;
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 0.8,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3 - 0.15,
          alpha: Math.random() * 0.6 + 0.2,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    resize();
    window.addEventListener('resize', resize);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalAlpha = 1.0;
      animFrame = requestAnimationFrame(animate);
    };

    animFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-square mx-auto flex items-center justify-center">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />
      <div className="relative z-10 w-44 h-44 sm:w-52 sm:h-52 rounded-3xl overflow-hidden shadow-bookly-lg border-2 border-gold-400/40 bg-forest-900 group">
        <Image
          src="/covers/butterfly_headphones.jpg"
          alt="Bookly Butterfly with Headphones"
          fill
          sizes="(max-width: 640px) 176px, 208px"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 via-transparent to-transparent pointer-events-none" />
      </div>
    </div>
  );
};
