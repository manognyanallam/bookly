'use client';

import React from 'react';
import { QuickLearn } from '@/types/book';
import { Lightbulb, CheckCircle2, Users, Tag, Clock, Sparkles } from 'lucide-react';

interface QuickLearnSectionProps {
  quickLearn: QuickLearn;
  estimatedDurationMinutes: number;
}

export const QuickLearnSection: React.FC<QuickLearnSectionProps> = ({
  quickLearn,
  estimatedDurationMinutes,
}) => {
  return (
    <div className="bg-white border border-[#E5DFD5] rounded-3xl p-6 sm:p-8 shadow-sm space-y-8">
      <div className="flex items-center justify-between border-b border-[#EAE3D6] pb-4">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-forest-50 text-forest-700 border border-forest-200">
            <Sparkles className="w-5 h-5 text-gold-500" />
          </div>
          <div>
            <h2 className="text-xl font-bold font-serif text-charcoal-900">What You Will Learn</h2>
            <p className="text-xs text-charcoal-500">Core intelligence and key takeaways at a glance</p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FAF7F2] border border-[#E5DFD5] text-xs font-mono text-forest-800">
          <Clock className="w-3.5 h-3.5 text-forest-700" /> ~{estimatedDurationMinutes} Min Summary
        </div>
      </div>

      {/* 3 Biggest Ideas */}
      <div>
        <h3 className="text-xs font-bold text-forest-800 uppercase tracking-wider mb-4 flex items-center gap-2">
          <Lightbulb className="w-4 h-4 text-gold-500" /> 3 Central Ideas
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {quickLearn.biggestIdeas.map((idea, idx) => (
            <div
              key={idx}
              className="bg-[#FAF7F2] border border-[#E5DFD5] rounded-2xl p-4 relative overflow-hidden group hover:border-forest-600 transition-colors"
            >
              <span className="absolute top-2 right-3 text-3xl font-black text-charcoal-200/40 font-serif">
                0{idx + 1}
              </span>
              <div className="w-6 h-6 rounded-full bg-gold-100 text-gold-800 text-xs font-bold flex items-center justify-center mb-2 border border-gold-300">
                {idx + 1}
              </div>
              <p className="text-xs text-charcoal-700 leading-relaxed relative z-10">{idea}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Key Lessons / Learning Outcomes */}
      <div>
        <h3 className="text-xs font-bold text-forest-800 uppercase tracking-wider mb-4 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-forest-700" /> Learning Outcomes
        </h3>
        <div className="space-y-2.5">
          {quickLearn.keyLessons.map((lesson, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 bg-[#FAF7F2] border border-[#E5DFD5] rounded-xl p-3.5"
            >
              <span className="w-5 h-5 rounded-full bg-forest-100 text-forest-800 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <p className="text-xs sm:text-sm text-charcoal-800 leading-relaxed">{lesson}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Target Audience & Topics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-[#EAE3D6]">
        <div className="bg-[#FAF7F2] border border-[#E5DFD5] rounded-2xl p-4 space-y-1.5">
          <div className="flex items-center gap-2 text-xs font-bold text-forest-800 uppercase tracking-wider">
            <Users className="w-4 h-4 text-forest-700" /> Recommended For
          </div>
          <p className="text-xs text-charcoal-600 leading-relaxed">{quickLearn.whoShouldListen}</p>
        </div>

        <div className="bg-[#FAF7F2] border border-[#E5DFD5] rounded-2xl p-4 space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-forest-800 uppercase tracking-wider">
            <Tag className="w-4 h-4 text-forest-700" /> Core Topics Covered
          </div>
          <div className="flex flex-wrap gap-1.5">
            {quickLearn.mainTopics.map((topic, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-white text-charcoal-700 border border-[#E5DFD5]"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
