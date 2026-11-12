'use client';

import React from 'react';
import { BookSummary } from '@/types/book';
import { BookOpen, CheckCircle, Lightbulb, Sparkles } from 'lucide-react';

interface WrittenSummaryViewProps {
  summary: BookSummary;
}

export const WrittenSummaryView: React.FC<WrittenSummaryViewProps> = ({ summary }) => {
  const { fullText } = summary;

  return (
    <div className="bg-white border border-[#E5DFD5] rounded-3xl p-6 sm:p-10 shadow-sm text-charcoal-800 space-y-8">
      <div className="flex items-center gap-3 border-b border-[#EAE3D6] pb-4">
        <div className="p-2 rounded-xl bg-forest-50 text-forest-700 border border-forest-200">
          <BookOpen className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-xl font-bold font-serif text-charcoal-900">Key Ideas Explained</h2>
          <p className="text-xs text-charcoal-500">In-depth concepts explained in clear, student-friendly language</p>
        </div>
      </div>

      {/* Introduction */}
      <section className="space-y-2">
        <h3 className="text-sm font-bold text-forest-800 uppercase tracking-wider font-sans">1. Overview</h3>
        <p className="text-sm text-charcoal-700 leading-relaxed">{fullText.introduction}</p>
      </section>

      {/* Core Idea */}
      <section className="space-y-2">
        <h3 className="text-sm font-bold text-forest-800 uppercase tracking-wider font-sans">2. The Central Thesis</h3>
        <p className="text-sm sm:text-base text-charcoal-900 font-serif leading-relaxed bg-[#FAF7F2] p-4 rounded-2xl border border-[#E5DFD5]">
          {fullText.coreIdea}
        </p>
      </section>

      {/* Major Concepts */}
      {fullText.majorConcepts && fullText.majorConcepts.length > 0 && (
        <section className="space-y-4">
          <h3 className="text-sm font-bold text-forest-800 uppercase tracking-wider font-sans">3. Major Concepts</h3>
          <div className="grid grid-cols-1 gap-4">
            {fullText.majorConcepts.map((concept, idx) => (
              <div key={idx} className="bg-[#FAF7F2] p-5 rounded-2xl border border-[#E5DFD5] space-y-1.5">
                <h4 className="text-sm sm:text-base font-bold text-charcoal-900 font-serif flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-gold-600 flex-shrink-0" /> {concept.title}
                </h4>
                <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">{concept.content}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Examples & Applications */}
      {fullText.examples && fullText.examples.length > 0 && (
        <section className="space-y-2">
          <h3 className="text-sm font-bold text-forest-800 uppercase tracking-wider font-sans">4. Real-World Applications</h3>
          <ul className="list-disc list-inside text-xs sm:text-sm text-charcoal-700 space-y-2 pl-2">
            {fullText.examples.map((ex, idx) => (
              <li key={idx} className="leading-relaxed">{ex}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Practical Applications / Actionable takeaways */}
      {fullText.practicalApplications && fullText.practicalApplications.length > 0 && (
        <section className="space-y-3">
          <h3 className="text-sm font-bold text-forest-800 uppercase tracking-wider font-sans">5. Practical Takeaways</h3>
          <div className="space-y-2">
            {fullText.practicalApplications.map((app, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal-700 bg-[#FAF7F2] p-3 rounded-xl border border-[#EAE3D6]">
                <CheckCircle className="w-4 h-4 text-forest-600 flex-shrink-0 mt-0.5" />
                <span>{app}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Final Takeaway */}
      <section className="pt-4 border-t border-[#EAE3D6] space-y-2">
        <h3 className="text-sm font-bold text-forest-800 uppercase tracking-wider font-sans">Final Action Insight</h3>
        <p className="text-sm sm:text-base text-charcoal-900 font-serif italic bg-gold-50 p-4 rounded-2xl border border-gold-300">
          {fullText.finalTakeaway}
        </p>
      </section>
    </div>
  );
};
