'use client';

import React from 'react';
import Link from 'next/link';
import { GENRES_LIST } from '@/lib/db/booksData';
import {
  TrendingUp,
  Briefcase,
  Brain,
  MessageSquare,
  ShieldAlert,
  Award,
  Zap,
  Sparkles,
  BookOpen,
  ArrowRight,
  Compass,
} from 'lucide-react';
import { BooklyWatermark } from '@/components/layout/BooklyWatermark';

const iconMap: Record<string, React.ElementType> = {
  TrendingUp,
  Briefcase,
  Brain,
  MessageSquare,
  ShieldAlert,
  Award,
  Zap,
  Sparkles,
  BookOpen,
};

export default function CategoriesPage() {
  return (
    <div className="relative overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-8">
      {/* Subtle Bookly Butterfly Watermark */}
      <BooklyWatermark position="top-right" size={420} opacity={0.05} />

      {/* Page Header */}
      <div className="relative z-10 space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-50 border border-forest-200 text-forest-800 text-xs font-semibold">
          <Compass className="w-3.5 h-3.5 text-gold-500" /> CURATED LEARNING PATHWAYS
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-charcoal-900 font-serif tracking-tight">
          Browse Categories
        </h1>
        <p className="text-sm text-charcoal-600 max-w-2xl leading-relaxed">
          Explore structured ~15-minute educational audio book summaries designed specifically for students and lifelong learners.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {GENRES_LIST.slice(0, 9).map((category) => {
          const IconComponent = iconMap[category.iconName] || BookOpen;

          return (
            <Link
              key={category.id}
              href={`/discover?genre=${encodeURIComponent(category.slug)}`}
              className="group bg-white rounded-2xl p-6 flex flex-col justify-between border border-[#E5DFD5] hover:border-forest-600 transition-all shadow-sm hover:shadow-bookly hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] border border-[#E2DCD0] flex items-center justify-center text-forest-700 group-hover:bg-forest-700 group-hover:text-white transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-semibold text-charcoal-500 bg-[#FAF7F2] px-2.5 py-1 rounded-full border border-[#E5DFD5]">
                    Audio Available
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-charcoal-900 group-hover:text-forest-700 transition-colors font-serif">
                    {category.name}
                  </h3>
                  <p className="text-xs text-charcoal-600 leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[#EAE3D6] flex items-center justify-between text-xs font-bold text-forest-700 group-hover:text-forest-800">
                <span>Explore Summaries</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
