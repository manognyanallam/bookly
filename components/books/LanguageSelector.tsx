'use client';

import React from 'react';
import { AudioLanguage } from '@/types/book';
import { Headphones, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';

interface LanguageSelectorProps {
  currentLanguage: AudioLanguage;
  hasEnglishAudio: boolean;
  hasTeluguAudio: boolean;
  onSelectLanguage: (lang: AudioLanguage) => void;
  englishDurationMinutes?: number;
  teluguDurationMinutes?: number;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLanguage,
  hasEnglishAudio,
  hasTeluguAudio,
  onSelectLanguage,
  englishDurationMinutes = 15,
  teluguDurationMinutes,
}) => {
  return (
    <div className="bg-white border border-[#E5DFD5] rounded-2xl p-4 sm:p-5 shadow-sm space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-forest-50 text-forest-700 border border-forest-200">
            <Headphones className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal-900">Audio Language</h3>
            <p className="text-[11px] text-charcoal-500">Choose English or Telugu audio narration</p>
          </div>
        </div>
        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-[#FAF7F2] text-forest-800 border border-[#E5DFD5]">
          BILINGUAL
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
        {/* English Button */}
        <button
          type="button"
          onClick={() => onSelectLanguage('en')}
          className={`p-3.5 rounded-xl border text-left transition-all duration-200 flex items-start justify-between relative group ${
            currentLanguage === 'en'
              ? 'bg-forest-50/80 border-forest-600 shadow-sm ring-1 ring-forest-600/40'
              : 'bg-[#FAF7F2] hover:bg-white border-[#E2DCD0] text-charcoal-600 hover:text-charcoal-900'
          }`}
        >
          <div className="space-y-1">
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-bold text-charcoal-900 group-hover:text-forest-700 transition-colors">
                English
              </span>
              <span className="text-[10px] font-medium text-charcoal-500">Audio Summary</span>
            </div>
            <p className="text-[11px] text-charcoal-600">
              {hasEnglishAudio
                ? `~${englishDurationMinutes} min • Natural Narration`
                : 'English Audio Coming Soon'}
            </p>
          </div>

          <div className="flex items-center gap-1 flex-shrink-0">
            {currentLanguage === 'en' && (
              <span className="p-1 rounded-full bg-forest-700 text-white shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />
              </span>
            )}
          </div>
        </button>

        {/* Telugu Button */}
        <button
          type="button"
          onClick={() => onSelectLanguage('te')}
          className={`p-3.5 rounded-xl border text-left transition-all duration-200 flex items-start justify-between relative group ${
            currentLanguage === 'te'
              ? 'bg-gold-50/80 border-gold-500 shadow-sm ring-1 ring-gold-500/40'
              : 'bg-[#FAF7F2] hover:bg-white border-[#E2DCD0] text-charcoal-600 hover:text-charcoal-900'
          }`}
        >
          <div className="space-y-1">
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-bold text-charcoal-900 group-hover:text-gold-700 transition-colors">
                తెలుగు (Telugu)
              </span>
              {hasTeluguAudio && (
                <span className="px-1.5 py-0.2 bg-gold-100 text-gold-800 text-[9px] font-bold rounded border border-gold-300">
                  VERIFIED
                </span>
              )}
            </div>
            <p className="text-[11px] text-charcoal-600">
              {hasTeluguAudio ? (
                <span className="text-forest-800 font-medium">
                  {teluguDurationMinutes ? `~${teluguDurationMinutes} నిమిషాలు` : 'అందుబాటులో ఉంది'} • తెలుగు వివరణ
                </span>
              ) : (
                <span className="text-charcoal-400 italic flex items-center gap-1">
                  <AlertCircle className="w-3 h-3 text-amber-500" /> Telugu audio coming soon
                </span>
              )}
            </p>
          </div>

          <div className="flex items-center gap-1 flex-shrink-0">
            {currentLanguage === 'te' && (
              <span className="p-1 rounded-full bg-gold-500 text-white shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />
              </span>
            )}
          </div>
        </button>
      </div>

      {currentLanguage === 'te' && !hasTeluguAudio && (
        <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 flex-shrink-0 text-amber-600" />
          <span>
            <strong>Telugu audio coming soon:</strong> The Telugu summary for this title is currently in production. English audio remains available.
          </span>
        </div>
      )}
    </div>
  );
};
