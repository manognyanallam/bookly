'use client';

import React from 'react';
import { CollegeLesson } from '@/types/book';
import { GraduationCap, Lightbulb, Compass, Award } from 'lucide-react';

interface CollegeLessonsSectionProps {
  lessons?: CollegeLesson[];
  bookTitle: string;
}

export const CollegeLessonsSection: React.FC<CollegeLessonsSectionProps> = ({
  lessons,
  bookTitle,
}) => {
  if (!lessons || lessons.length === 0) return null;

  return (
    <div className="bg-white border border-[#E5DFD5] rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#EAE3D6] pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-forest-50 text-forest-700 border border-forest-200">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold font-serif text-charcoal-900 tracking-tight flex items-center gap-2">
              Student Playbook
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-gold-100 text-gold-800 border border-gold-300">
                PRACTICAL ACTION
              </span>
            </h2>
            <p className="text-xs text-charcoal-500">
              Actionable lessons from <span className="text-charcoal-800 font-semibold">{bookTitle}</span> for university and early-career life
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {lessons.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#FAF7F2] border border-[#E5DFD5] hover:border-forest-600 rounded-2xl p-5 flex flex-col justify-between space-y-4 transition-all duration-300 hover:shadow-sm"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-gold-100 text-gold-800 border border-gold-200 flex items-center gap-1.5">
                  <Lightbulb className="w-3 h-3 text-gold-600" /> Lesson 0{idx + 1}
                </span>
                <span className="text-xl font-serif font-black text-charcoal-300">
                  0{idx + 1}
                </span>
              </div>

              <h3 className="text-sm sm:text-base font-bold font-serif text-charcoal-900 leading-snug">
                {item.title}
              </h3>

              <div className="text-xs text-charcoal-700 leading-relaxed bg-white p-3 rounded-xl border border-[#EAE3D6]">
                <p className="font-semibold text-forest-700 mb-1 flex items-center gap-1 text-[11px] uppercase tracking-wider">
                  <Award className="w-3 h-3 text-gold-500" /> Core Principle
                </p>
                {item.takeaway}
              </div>
            </div>

            <div className="pt-2 border-t border-[#EAE3D6] space-y-1">
              <p className="text-[10px] font-bold uppercase tracking-wider text-charcoal-600 flex items-center gap-1">
                <Compass className="w-3 h-3 text-forest-700" /> Campus Context & Practice
              </p>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                {item.studentContext}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
