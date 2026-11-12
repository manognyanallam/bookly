'use client';

import React, { useEffect, useRef } from 'react';

interface AudioWaveformProps {
  isPlaying: boolean;
  color?: string;
  barCount?: number;
  height?: number;
}

export const AudioWaveform: React.FC<AudioWaveformProps> = ({
  isPlaying,
  color = '#1B4332',
  barCount = 36,
  height = 48,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let phase = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const width = canvas.width;
      const h = canvas.height;
      const barWidth = (width / barCount) * 0.6;
      const gap = (width / barCount) * 0.4;

      phase += isPlaying ? 0.08 : 0.01;

      for (let i = 0; i < barCount; i++) {
        const x = i * (barWidth + gap) + gap / 2;

        let amp;
        if (isPlaying) {
          amp = Math.sin(phase + i * 0.3) * 0.4 + Math.cos(phase * 0.7 + i * 0.2) * 0.4 + 0.5;
          amp = Math.max(0.15, Math.min(1.0, amp));
        } else {
          amp = 0.12 + Math.sin(i * 0.5) * 0.05;
        }

        const barHeight = h * amp;
        const y = (h - barHeight) / 2;

        const gradient = ctx.createLinearGradient(0, y, 0, y + barHeight);
        gradient.addColorStop(0, color);
        gradient.addColorStop(1, '#C59B27');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        if (ctx.roundRect) {
          ctx.roundRect(x, y, barWidth, barHeight, 3);
        } else {
          ctx.rect(x, y, barWidth, barHeight);
        }
        ctx.fill();
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [isPlaying, color, barCount]);

  return (
    <canvas
      ref={canvasRef}
      width={360}
      height={height}
      className="w-full max-w-md h-12 rounded-xl bg-white border border-[#E5DFD5] p-1"
    />
  );
};
