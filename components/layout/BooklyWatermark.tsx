'use client';

import React from 'react';
import Image from 'next/image';

interface BooklyWatermarkProps {
  position?: 'hero' | 'top-right' | 'bottom-right' | 'center' | 'subtle-corner' | 'card';
  className?: string;
  size?: number;
  opacity?: number; // default 0.05 to 0.08
  colorClass?: string; // backwards compatibility
}

/**
 * Premium Bookly Butterfly Watermark Component.
 * Renders the genuine Bookly 3D butterfly with headphones artwork
 * with all text, bookmarks, and background completely removed, leaving
 * strictly the iconic butterfly with headphones as an elegant background watermark.
 * Designed with pointer-events-none, z-0, and overflow-hidden so it never interferes
 * with clicks, buttons, text selection, or audio playback.
 */
export const BooklyWatermark: React.FC<BooklyWatermarkProps> = ({
  position = 'top-right',
  className = '',
  size = 440,
  opacity = 0.07,
}) => {
  const positionClasses = {
    hero: 'absolute -top-10 -right-12 sm:-right-8 md:right-4 lg:right-10 pointer-events-none select-none z-0',
    'top-right': 'absolute -top-6 -right-6 sm:right-2 md:right-6 pointer-events-none select-none z-0',
    'bottom-right': 'absolute -bottom-8 -right-8 sm:right-2 pointer-events-none select-none z-0',
    center: 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0',
    'subtle-corner': 'absolute top-4 right-4 pointer-events-none select-none z-0',
    card: 'absolute bottom-2 right-2 pointer-events-none select-none z-0',
  }[position];

  return (
    <div
      aria-hidden="true"
      className={`${positionClasses} ${className} overflow-hidden pointer-events-none select-none`}
      style={{
        opacity,
        maxWidth: '100%',
      }}
    >
      <div
        style={{
          width: size,
          aspectRatio: '878 / 636',
          position: 'relative',
        }}
        className="transform transition-none"
      >
        <Image
          src="/brand/butterfly_watermark.png"
          alt=""
          fill
          sizes={`${size}px`}
          className="object-contain pointer-events-none select-none filter contrast-105"
          priority
        />
      </div>
    </div>
  );
};
