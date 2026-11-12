'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, ShieldCheck, Heart, Headphones } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-forest-800 text-[#FAF7F2] border-t border-forest-900/40 py-12 px-4 sm:px-6 lg:px-8 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand info */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-gold-400/40 shadow-sm bg-forest-900">
              <Image
                src="/covers/butterfly_headphones.jpg"
                alt="Bookly Mascot"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white font-serif tracking-tight">BOOKLY</h3>
              <p className="text-[10px] font-bold text-gold-400 tracking-widest">LISTEN • LEARN • GROW</p>
            </div>
          </div>
          <p className="text-xs text-cream-200 max-w-md leading-relaxed">
            Bookly is an accessible bilingual audio-learning platform for students and lifelong learners. We provide masterfully crafted ~15-minute educational audio summaries in English and Telugu (తెలుగు).
          </p>
          <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-700/60 border border-forest-600 text-cream-100">
              <Headphones className="w-3.5 h-3.5 text-gold-400" /> English & Telugu Audio
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-700/60 border border-forest-600 text-cream-100">
              <ShieldCheck className="w-3.5 h-3.5 text-mint-400" /> 19 Verified Summaries
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-3 font-serif">Explore Collections</h4>
          <ul className="space-y-2 text-xs text-cream-200">
            <li><Link href="/discover?genre=personal-growth" className="hover:text-gold-300 transition-colors">Personal Growth</Link></li>
            <li><Link href="/discover?genre=productivity" className="hover:text-gold-300 transition-colors">Productivity</Link></li>
            <li><Link href="/discover?genre=money-financial-literacy" className="hover:text-gold-300 transition-colors">Money & Financial Literacy</Link></li>
            <li><Link href="/discover?genre=psychology-human-behaviour" className="hover:text-gold-300 transition-colors">Psychology & Human Behaviour</Link></li>
            <li><Link href="/discover?genre=communication-relationships" className="hover:text-gold-300 transition-colors">Communication & Relationships</Link></li>
            <li><Link href="/categories" className="hover:text-gold-300 transition-colors">All 9 Categories →</Link></li>
          </ul>
        </div>

        {/* Educational Disclaimer */}
        <div>
          <h4 className="text-white font-semibold mb-3 font-serif">About Summaries</h4>
          <p className="text-xs text-cream-300 leading-relaxed mb-3">
            Bookly audio summaries are independently written educational companion materials designed to teach core principles to students. They are not official publisher audiobooks or complete reproductions of copyrighted books.
          </p>
          <div className="text-[11px] text-gold-300/90 font-mono">
            Zero runtime streaming delays • Fast offline-ready audio
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-forest-700 flex flex-col sm:flex-row items-center justify-between text-xs text-cream-300 gap-4">
        <p>© {new Date().getFullYear()} Bookly. All educational summaries are original creations.</p>
        <p className="flex items-center gap-1.5">
          Crafted with care for curious minds and students.
        </p>
      </div>
    </footer>
  );
};
