'use client';

import React from 'react';
import { Sparkles, Quote } from 'lucide-react';

interface KeyTakeawayCardProps {
  keyTakeaway: string;
}

export const KeyTakeawayCard: React.FC<KeyTakeawayCardProps> = ({ keyTakeaway }) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-gold-50 via-[#FAF7F2] to-forest-50 border border-gold-400/60 rounded-3xl p-6 sm:p-8 shadow-sm my-6">
      <div className="absolute top-0 right-0 p-8 opacity-10 text-gold-600 pointer-events-none">
        <Quote className="w-24 h-24" />
      </div>

      <div className="relative z-10 space-y-3">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold-500 text-white shadow-sm flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 fill-current" /> Core Takeaway
          </span>
        </div>

        <blockquote className="text-base sm:text-xl font-serif italic text-charcoal-900 leading-relaxed pt-2">
          &ldquo;{keyTakeaway}&rdquo;
        </blockquote>
      </div>
    </div>
  );
};
