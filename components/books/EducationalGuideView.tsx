'use client';

import React, { useState, useEffect } from 'react';
import {
  LearningGuide,
  NonFictionLearningGuide,
  FictionLearningGuide,
  ConceptExplanation,
  ValuableInsight,
} from '@/types/learning';
import {
  BookOpen,
  Lightbulb,
  GraduationCap,
  AlertTriangle,
  Scale,
  Award,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Eye,
  EyeOff,
  CheckCircle2,
  Compass,
  Sparkles,
  BookMarked,
  Layers,
  ArrowRight,
  ShieldAlert,
  Zap,
  Target,
  FileText,
} from 'lucide-react';
import { VisualLearningSection } from '@/components/visuals/VisualLearningSection';
import { getBookVisualGuide } from '@/lib/db/visualGuides';

interface EducationalGuideViewProps {
  guide: LearningGuide;
  bookTitle: string;
}

export const EducationalGuideView: React.FC<EducationalGuideViewProps> = ({ guide, bookTitle }) => {
  const isFiction = guide.type === 'fiction';
  const visualGuide = getBookVisualGuide(guide.bookId);
  const [activeSection, setActiveSection] = useState<string>('sec-overview');
  const [showSpoiler, setShowSpoiler] = useState<boolean>(false);
  const [revealedQuestions, setRevealedQuestions] = useState<Record<number, boolean>>({});
  const [expandedConcepts, setExpandedConcepts] = useState<Record<number, boolean>>({ 0: true });
  const isAutoScrollingRef = React.useRef(false);

  // Keep active section in sync as the user scrolls
  useEffect(() => {
    const sectionIds = isFiction
      ? ['sec-overview', 'sec-characters', 'sec-plot', ...(visualGuide ? ['sec-visuals'] : []), 'sec-themes', 'sec-ending', 'sec-revision']
      : [
          'sec-overview',
          'sec-concepts',
          ...(visualGuide ? ['sec-visuals'] : []),
          'sec-insights',
          'sec-playbook',
          'sec-misconceptions',
          'sec-critical',
          'sec-lessons',
          'sec-revision',
        ];

    const handleScroll = () => {
      if (isAutoScrollingRef.current) return;
      const scrollPosition = window.scrollY + 140;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isFiction]);

  const toggleQuestion = (idx: number) => {
    setRevealedQuestions(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const toggleConcept = (idx: number) => {
    setExpandedConcepts(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const scrollToSection = (id: string) => {
    // Prevent and clear any accidental browser text drag-selection
    if (typeof window !== 'undefined' && window.getSelection) {
      window.getSelection()?.removeAllRanges();
    }
    setActiveSection(id);
    isAutoScrollingRef.current = true;
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setTimeout(() => {
        isAutoScrollingRef.current = false;
      }, 700);
    }
  };

  return (
    <div className="space-y-10">
      {/* Table of Contents / Sticky Quick Navigation Bar */}
      <div className="sticky top-16 z-20 -mx-4 px-4 sm:mx-0 sm:px-0 py-3 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E5DFD5] select-none">
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1 select-none">
          <span className="text-[11px] font-bold text-forest-900 uppercase tracking-wider flex items-center gap-1 mr-2 flex-shrink-0 select-none">
            <Compass className="w-3.5 h-3.5 text-gold-600" /> Sections:
          </span>
          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => scrollToSection('sec-overview')}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all select-none ${
              activeSection === 'sec-overview'
                ? 'bg-forest-800 text-white shadow-sm ring-1 ring-forest-900 font-bold'
                : 'bg-white hover:bg-cream-100 text-charcoal-700 border border-[#E5DFD5] hover:text-charcoal-900'
            }`}
          >
            {isFiction ? 'Overview & Setting' : 'Book Overview'}
          </button>

          {isFiction ? (
            <>
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => scrollToSection('sec-characters')}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all select-none ${
                  activeSection === 'sec-characters'
                    ? 'bg-forest-800 text-white shadow-sm ring-1 ring-forest-900 font-bold'
                    : 'bg-white hover:bg-cream-100 text-charcoal-700 border border-[#E5DFD5] hover:text-charcoal-900'
                }`}
              >
                Characters
              </button>
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => scrollToSection('sec-plot')}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all select-none ${
                  activeSection === 'sec-plot'
                    ? 'bg-forest-800 text-white shadow-sm ring-1 ring-forest-900 font-bold'
                    : 'bg-white hover:bg-cream-100 text-charcoal-700 border border-[#E5DFD5] hover:text-charcoal-900'
                }`}
              >
                Story Developments
              </button>
              {visualGuide && (
                <button
                  type="button"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => scrollToSection('sec-visuals')}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all select-none ${
                    activeSection === 'sec-visuals'
                      ? 'bg-forest-800 text-white shadow-sm ring-1 ring-forest-900 font-bold'
                      : 'bg-white hover:bg-cream-100 text-charcoal-700 border border-[#E5DFD5] hover:text-charcoal-900'
                  }`}
                >
                  Visualise the Ideas
                </button>
              )}
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => scrollToSection('sec-themes')}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all select-none ${
                  activeSection === 'sec-themes'
                    ? 'bg-forest-800 text-white shadow-sm ring-1 ring-forest-900 font-bold'
                    : 'bg-white hover:bg-cream-100 text-charcoal-700 border border-[#E5DFD5] hover:text-charcoal-900'
                }`}
              >
                Themes & Symbolism
              </button>
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => scrollToSection('sec-ending')}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all select-none ${
                  activeSection === 'sec-ending'
                    ? 'bg-amber-700 text-white shadow-sm ring-1 ring-amber-800 font-bold'
                    : 'bg-white hover:bg-amber-50 text-amber-800 border border-amber-300'
                }`}
              >
                Ending Analysis (Spoiler)
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => scrollToSection('sec-concepts')}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all select-none ${
                  activeSection === 'sec-concepts'
                    ? 'bg-forest-800 text-white shadow-sm ring-1 ring-forest-900 font-bold'
                    : 'bg-white hover:bg-cream-100 text-charcoal-700 border border-[#E5DFD5] hover:text-charcoal-900'
                }`}
              >
                Core Concepts
              </button>
              {visualGuide && (
                <button
                  type="button"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => scrollToSection('sec-visuals')}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all select-none ${
                    activeSection === 'sec-visuals'
                      ? 'bg-forest-800 text-white shadow-sm ring-1 ring-forest-900 font-bold'
                      : 'bg-white hover:bg-cream-100 text-charcoal-700 border border-[#E5DFD5] hover:text-charcoal-900'
                  }`}
                >
                  Visualise the Ideas
                </button>
              )}
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => scrollToSection('sec-insights')}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all select-none ${
                  activeSection === 'sec-insights'
                    ? 'bg-forest-800 text-white shadow-sm ring-1 ring-forest-900 font-bold'
                    : 'bg-white hover:bg-cream-100 text-charcoal-700 border border-[#E5DFD5] hover:text-charcoal-900'
                }`}
              >
                Valuable Insights
              </button>
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => scrollToSection('sec-playbook')}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all select-none ${
                  activeSection === 'sec-playbook'
                    ? 'bg-forest-800 text-white shadow-sm ring-1 ring-forest-900 font-bold'
                    : 'bg-white hover:bg-cream-100 text-charcoal-700 border border-[#E5DFD5] hover:text-charcoal-900'
                }`}
              >
                Student Playbook
              </button>
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => scrollToSection('sec-misconceptions')}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all select-none ${
                  activeSection === 'sec-misconceptions'
                    ? 'bg-forest-800 text-white shadow-sm ring-1 ring-forest-900 font-bold'
                    : 'bg-white hover:bg-cream-100 text-charcoal-700 border border-[#E5DFD5] hover:text-charcoal-900'
                }`}
              >
                Misconceptions
              </button>
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => scrollToSection('sec-critical')}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all select-none ${
                  activeSection === 'sec-critical'
                    ? 'bg-forest-800 text-white shadow-sm ring-1 ring-forest-900 font-bold'
                    : 'bg-white hover:bg-cream-100 text-charcoal-700 border border-[#E5DFD5] hover:text-charcoal-900'
                }`}
              >
                Critical Thinking
              </button>
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => scrollToSection('sec-lessons')}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all select-none ${
                  activeSection === 'sec-lessons'
                    ? 'bg-forest-800 text-white shadow-sm ring-1 ring-forest-900 font-bold'
                    : 'bg-white hover:bg-cream-100 text-charcoal-700 border border-[#E5DFD5] hover:text-charcoal-900'
                }`}
              >
                Final Lessons &amp; Action Plan
              </button>
            </>
          )}

          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => scrollToSection('sec-revision')}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all select-none ${
              activeSection === 'sec-revision'
                ? 'bg-gold-600 text-white shadow-sm ring-1 ring-gold-700 font-bold'
                : 'bg-white hover:bg-gold-50 text-gold-800 border border-gold-300'
            }`}
          >
            Quick Revision &amp; Q&amp;A
          </button>
        </div>
      </div>

      {/* SECTION A & B: INTRODUCTION & DETAILED OVERVIEW */}
      <section id="sec-overview" className="bg-white border border-[#E5DFD5] rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
        <div className="flex items-center gap-3 border-b border-[#EAE3D6] pb-4">
          <div className="p-2.5 rounded-2xl bg-forest-50 text-forest-700 border border-forest-200">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-bold text-forest-700 uppercase tracking-widest">Section 1</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-charcoal-900">
              {isFiction ? 'Introduction & Literary Setting' : 'Detailed Book Overview & Central Argument'}
            </h2>
          </div>
        </div>

        {/* Why this book is worth exploring */}
        <div className="bg-[#FAF7F2] p-5 sm:p-6 rounded-2xl border border-[#E5DFD5] space-y-2">
          <h3 className="text-xs font-bold text-forest-800 uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-gold-600" /> Why This Book Matters for Students
          </h3>
          <p className="text-sm sm:text-base text-charcoal-800 leading-relaxed font-serif">
            {guide.introduction}
          </p>
        </div>

        {isFiction ? (
          /* Fiction Setting */
          <div className="space-y-4 pt-2">
            <div>
              <h3 className="text-xs font-bold text-forest-800 uppercase tracking-wider mb-2">Setting &amp; Atmosphere</h3>
              <p className="text-sm text-charcoal-700 leading-relaxed bg-white p-4 rounded-xl border border-[#EAE3D6]">
                {(guide as FictionLearningGuide).setting}
              </p>
            </div>
            <div>
              <h3 className="text-xs font-bold text-forest-800 uppercase tracking-wider mb-2">Character Arc &amp; Transformation</h3>
              <p className="text-sm text-charcoal-700 leading-relaxed bg-white p-4 rounded-xl border border-[#EAE3D6]">
                {(guide as FictionLearningGuide).characterDevelopment}
              </p>
            </div>
          </div>
        ) : (
          /* Non-Fiction Detailed Breakdown */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            <div className="bg-white p-5 rounded-2xl border border-[#EAE3D6] space-y-2">
              <span className="text-[10px] font-bold text-forest-700 uppercase tracking-wider">What the Book Addresses</span>
              <h4 className="text-sm font-bold text-charcoal-900 font-serif">The Core Problem &amp; Question</h4>
              <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                {(guide as NonFictionLearningGuide).overview.problemAddressed}
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#EAE3D6] space-y-2">
              <span className="text-[10px] font-bold text-forest-700 uppercase tracking-wider">Author’s Thesis</span>
              <h4 className="text-sm font-bold text-charcoal-900 font-serif">Central Argument</h4>
              <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                {(guide as NonFictionLearningGuide).overview.centralArgument}
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#EAE3D6] space-y-2">
              <span className="text-[10px] font-bold text-forest-700 uppercase tracking-wider">Ideological Architecture</span>
              <h4 className="text-sm font-bold text-charcoal-900 font-serif">How Ideas Connect to Each Other</h4>
              <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                {(guide as NonFictionLearningGuide).overview.connectionsBetweenIdeas}
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#EAE3D6] space-y-2">
              <span className="text-[10px] font-bold text-forest-700 uppercase tracking-wider">Student Takeaway</span>
              <h4 className="text-sm font-bold text-charcoal-900 font-serif">What You Will Understand</h4>
              <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                {(guide as NonFictionLearningGuide).overview.whatStudentsUnderstand}
              </p>
            </div>

            {/* Major Themes Pills */}
            <div className="md:col-span-2 bg-[#FBF8F2] p-5 rounded-2xl border border-[#E5DFD5] space-y-3">
              <h4 className="text-xs font-bold text-forest-800 uppercase tracking-wider">Major Themes Explored</h4>
              <div className="flex flex-wrap gap-2">
                {(guide as NonFictionLearningGuide).overview.majorThemes.map((theme, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white text-charcoal-800 border border-[#E2D8C6] shadow-2xs"
                  >
                    • {theme}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* FICTION-SPECIFIC SECTIONS: CHARACTERS, PLOT, THEMES, SPOILER ENDING */}
      {isFiction && (
        <>
          {/* Characters Section */}
          <section id="sec-characters" className="bg-white border border-[#E5DFD5] rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
            <div className="flex items-center gap-3 border-b border-[#EAE3D6] pb-4">
              <div className="p-2.5 rounded-2xl bg-forest-50 text-forest-700 border border-forest-200">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-forest-700 uppercase tracking-widest">Section 2</span>
                <h2 className="text-xl sm:text-2xl font-bold font-serif text-charcoal-900">
                  Main Characters &amp; Motivations
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(guide as FictionLearningGuide).characters.map((char, idx) => (
                <div key={idx} className="bg-[#FAF7F2] p-5 rounded-2xl border border-[#E5DFD5] space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-charcoal-900 font-serif">{char.name}</h3>
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-forest-100 text-forest-800">
                      {char.role}
                    </span>
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-forest-700 block">Core Motivation:</span>
                    <p className="text-xs text-charcoal-700">{char.motivation}</p>
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-charcoal-500 block">Symbolic Significance:</span>
                    <p className="text-xs text-charcoal-600 italic">{char.significance}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Story Developments */}
          <section id="sec-plot" className="bg-white border border-[#E5DFD5] rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
            <div className="flex items-center gap-3 border-b border-[#EAE3D6] pb-4">
              <div className="p-2.5 rounded-2xl bg-forest-50 text-forest-700 border border-forest-200">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-forest-700 uppercase tracking-widest">Section 3</span>
                <h2 className="text-xl sm:text-2xl font-bold font-serif text-charcoal-900">
                  Important Story Developments (Key Plot Arcs)
                </h2>
              </div>
            </div>

            <div className="space-y-4">
              {(guide as FictionLearningGuide).storyDevelopments.map((stage, idx) => (
                <div key={idx} className="p-5 rounded-2xl border border-[#EAE3D6] bg-white space-y-2">
                  <h3 className="text-sm sm:text-base font-bold text-forest-800 font-serif flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-forest-100 text-forest-800 flex items-center justify-center text-xs font-bold font-sans">
                      {idx + 1}
                    </span>
                    {stage.stage}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed pl-8">
                    {stage.events}
                  </p>
                  <p className="text-xs text-gold-700 font-medium pl-8">
                    <strong>Significance:</strong> {stage.importance}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* FICTION VISUALISE THE IDEAS */}
          {visualGuide && (
            <VisualLearningSection guide={visualGuide} bookTitle={bookTitle} />
          )}

          {/* Major Themes & Symbolism */}
          <section id="sec-themes" className="bg-white border border-[#E5DFD5] rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
            <div className="flex items-center gap-3 border-b border-[#EAE3D6] pb-4">
              <div className="p-2.5 rounded-2xl bg-forest-50 text-forest-700 border border-forest-200">
                <Lightbulb className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-forest-700 uppercase tracking-widest">Section 4</span>
                <h2 className="text-xl sm:text-2xl font-bold font-serif text-charcoal-900">
                  Major Themes &amp; Deeper Symbolism
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-4">
                <h3 className="text-xs font-bold text-forest-800 uppercase tracking-wider">Universal Themes</h3>
                {(guide as FictionLearningGuide).majorThemes.map((theme, idx) => (
                  <div key={idx} className="bg-[#FAF7F2] p-4 rounded-xl border border-[#E5DFD5] space-y-1">
                    <h4 className="text-sm font-bold text-charcoal-900 font-serif">{theme.theme}</h4>
                    <p className="text-xs text-charcoal-700 leading-relaxed">{theme.explanation}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <h3 className="text-xs font-bold text-forest-800 uppercase tracking-wider">Literary Symbols &amp; Meanings</h3>
                {(guide as FictionLearningGuide).symbolism.map((sym, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl border border-[#EAE3D6] space-y-1">
                    <h4 className="text-sm font-bold text-charcoal-900 font-serif flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-gold-600" /> {sym.symbol}
                    </h4>
                    <p className="text-xs text-charcoal-600 leading-relaxed">{sym.deeperMeaning}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Ending Analysis with Visible Interactive Spoiler Protection */}
          <section id="sec-ending" className="bg-white border-2 border-amber-300 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-amber-200 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-700 border border-amber-300">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-amber-700 uppercase tracking-widest">Ending Explanation</span>
                  <h2 className="text-xl sm:text-2xl font-bold font-serif text-charcoal-900">
                    The Climax, Twist &amp; Final Interpretation
                  </h2>
                </div>
              </div>

              <button
                onClick={() => setShowSpoiler(!showSpoiler)}
                className={`px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all ${
                  showSpoiler
                    ? 'bg-amber-100 text-amber-800 hover:bg-amber-200'
                    : 'bg-amber-600 hover:bg-amber-700 text-white shadow-sm'
                }`}
              >
                {showSpoiler ? (
                  <>
                    <EyeOff className="w-4 h-4" /> Hide Ending Spoilers
                  </>
                ) : (
                  <>
                    <Eye className="w-4 h-4" /> Reveal Ending &amp; Climax
                  </>
                )}
              </button>
            </div>

            {/* Warning Callout */}
            <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-900 text-xs flex items-center gap-2.5">
              <AlertTriangle className="w-4 h-4 flex-shrink-0 text-amber-600" />
              <span>{(guide as FictionLearningGuide).endingExplanation.warning}</span>
            </div>

            {showSpoiler ? (
              <div className="space-y-4 animate-fadeIn">
                <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-[#E5DFD5] space-y-2">
                  <h3 className="text-xs font-bold text-forest-800 uppercase tracking-wider">What Happens at the End</h3>
                  <p className="text-sm text-charcoal-800 leading-relaxed font-serif">
                    {(guide as FictionLearningGuide).endingExplanation.endingAnalysis}
                  </p>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-[#EAE3D6] space-y-2">
                  <h3 className="text-xs font-bold text-gold-700 uppercase tracking-wider">Deeper Philosophical Meaning</h3>
                  <p className="text-sm text-charcoal-700 leading-relaxed">
                    {(guide as FictionLearningGuide).endingExplanation.deeperInterpretation}
                  </p>
                </div>
              </div>
            ) : (
              <div className="p-8 text-center bg-[#FAF7F2] rounded-2xl border border-dashed border-[#E5DFD5] space-y-3">
                <p className="text-sm text-charcoal-600">
                  The ending and the resolution of the treasure are protected to prevent spoiling your first reading experience.
                </p>
                <button
                  onClick={() => setShowSpoiler(true)}
                  className="px-6 py-2.5 rounded-full bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-sm transition-all inline-flex items-center gap-2"
                >
                  <Eye className="w-4 h-4" /> Reveal Ending Analysis
                </button>
              </div>
            )}
          </section>
        </>
      )}

      {/* NON-FICTION SECTION C: DETAILED EXPLANATION OF IMPORTANT CONCEPTS */}
      {!isFiction && (
        <section id="sec-concepts" className="bg-white border border-[#E5DFD5] rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
          <div className="flex items-center gap-3 border-b border-[#EAE3D6] pb-4">
            <div className="p-2.5 rounded-2xl bg-forest-50 text-forest-700 border border-forest-200">
              <Lightbulb className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-forest-700 uppercase tracking-widest">Section 2</span>
              <h2 className="text-xl sm:text-2xl font-bold font-serif text-charcoal-900">
                Detailed Explanation of Important Concepts
              </h2>
            </div>
          </div>

          <div className="space-y-5">
            {(guide as NonFictionLearningGuide).concepts.map((concept, idx) => {
              const isExpanded = Boolean(expandedConcepts[idx]);
              return (
                <div key={idx} className="bg-[#FAF7F2] rounded-2xl border border-[#E5DFD5] overflow-hidden transition-all">
                  <button
                    onClick={() => toggleConcept(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between hover:bg-[#F5EFE6] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-forest-800 text-white flex items-center justify-center text-xs font-bold font-sans flex-shrink-0">
                        {idx + 1}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-charcoal-900 font-serif">
                        {concept.name}
                      </h3>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-charcoal-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-charcoal-500 flex-shrink-0" />
                    )}
                  </button>

                  {isExpanded && (
                    <div className="px-5 sm:px-6 pb-6 pt-2 space-y-4 border-t border-[#EAE3D6] text-xs sm:text-sm text-charcoal-700">
                      <div>
                        <h4 className="text-[11px] font-bold text-forest-800 uppercase tracking-wider mb-1">
                          1. Simple Explanation
                        </h4>
                        <p className="leading-relaxed bg-white p-3.5 rounded-xl border border-[#EAE3D6]">
                          {concept.simpleExplanation}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white p-3.5 rounded-xl border border-[#EAE3D6] space-y-1">
                          <h4 className="text-[11px] font-bold text-forest-800 uppercase tracking-wider">
                            2. Why It Matters
                          </h4>
                          <p className="leading-relaxed">{concept.whyItMatters}</p>
                        </div>

                        <div className="bg-white p-3.5 rounded-xl border border-[#EAE3D6] space-y-1">
                          <h4 className="text-[11px] font-bold text-gold-700 uppercase tracking-wider">
                            3. Everyday Real-World Example
                          </h4>
                          <p className="leading-relaxed">{concept.everydayExample}</p>
                        </div>
                      </div>

                      <div className="bg-forest-50/80 p-4 rounded-xl border border-forest-200 text-forest-900 space-y-1">
                        <h4 className="text-[11px] font-bold text-forest-800 uppercase tracking-wider flex items-center gap-1.5">
                          <GraduationCap className="w-4 h-4 text-forest-700" /> 4. How a College Student Can Apply It
                        </h4>
                        <p className="leading-relaxed">{concept.collegeStudentApplication}</p>
                      </div>

                      {/* Technical terms / definitions */}
                      {concept.difficultTerms && concept.difficultTerms.length > 0 && (
                        <div className="pt-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal-500 block mb-1.5">
                            Key Terms in This Concept:
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {concept.difficultTerms.map((t, tIdx) => (
                              <div
                                key={tIdx}
                                className="px-3 py-1.5 rounded-lg bg-white border border-[#E2DCD0] text-[11px] text-charcoal-800"
                              >
                                <span className="font-bold text-forest-800">{t.term}: </span>
                                <span>{t.definition}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* NON-FICTION SECTION: VISUALISE THE IDEAS */}
      {!isFiction && visualGuide && (
        <VisualLearningSection guide={visualGuide} bookTitle={bookTitle} />
      )}

      {/* NON-FICTION SECTION D: MOST VALUABLE INSIGHTS */}
      {!isFiction && (
        <section id="sec-insights" className="bg-white border border-[#E5DFD5] rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
          <div className="flex items-center gap-3 border-b border-[#EAE3D6] pb-4">
            <div className="p-2.5 rounded-2xl bg-forest-50 text-forest-700 border border-forest-200">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-forest-700 uppercase tracking-widest">Section 3</span>
              <h2 className="text-xl sm:text-2xl font-bold font-serif text-charcoal-900">
                Most Valuable Insights
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5">
            {(guide as NonFictionLearningGuide).insights.map((ins, idx) => (
              <div key={idx} className="bg-[#FAF7F2] p-5 sm:p-7 rounded-2xl border border-[#E5DFD5] space-y-4">
                <div className="border-l-4 border-l-gold-500 pl-4 py-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gold-700">Insight #{idx + 1}</span>
                  <h3 className="text-base sm:text-lg font-bold font-serif text-charcoal-900 leading-snug">
                    &ldquo;{ins.insight}&rdquo;
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div className="bg-white p-4 rounded-xl border border-[#EAE3D6] space-y-1">
                    <h4 className="font-bold text-forest-800 text-[11px] uppercase tracking-wider">What It Means</h4>
                    <p className="text-charcoal-700 leading-relaxed">{ins.whatItMeans}</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-[#EAE3D6] space-y-1">
                    <h4 className="font-bold text-forest-800 text-[11px] uppercase tracking-wider">Why It Matters</h4>
                    <p className="text-charcoal-700 leading-relaxed">{ins.whyItMatters}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div className="bg-white p-4 rounded-xl border border-[#EAE3D6] space-y-1">
                    <h4 className="font-bold text-charcoal-600 text-[11px] uppercase tracking-wider">Realistic Example</h4>
                    <p className="text-charcoal-700 leading-relaxed">{ins.realisticExample}</p>
                  </div>
                  <div className="bg-forest-50 p-4 rounded-xl border border-forest-200 space-y-1">
                    <h4 className="font-bold text-forest-800 text-[11px] uppercase tracking-wider">How to Apply It</h4>
                    <p className="text-forest-900 leading-relaxed font-medium">{ins.howStudentAppliesIt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SECTION E: REAL-LIFE APPLICATIONS FOR STUDENTS (STUDENT PLAYBOOK) */}
      <section id="sec-playbook" className="bg-white border border-[#E5DFD5] rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
        <div className="flex items-center gap-3 border-b border-[#EAE3D6] pb-4">
          <div className="p-2.5 rounded-2xl bg-gold-50 text-gold-700 border border-gold-300">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-bold text-gold-700 uppercase tracking-widest">
              {isFiction ? 'Section 5' : 'Section 4'}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-charcoal-900">
              Student Playbook: Real-Life Applications
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {guide.studentApplications.collegeLife && (
            <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-[#E5DFD5] space-y-3">
              <h3 className="text-sm font-bold text-forest-800 uppercase tracking-wider flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-forest-600" /> College Life &amp; Social Rhythms
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-charcoal-700">
                {guide.studentApplications.collegeLife.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-forest-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {guide.studentApplications.studyingAndLearning && (
            <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-[#E5DFD5] space-y-3">
              <h3 className="text-sm font-bold text-forest-800 uppercase tracking-wider flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-forest-600" /> Learning &amp; Academic Mastery
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-charcoal-700">
                {guide.studentApplications.studyingAndLearning.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-forest-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {guide.studentApplications.careerDevelopment && (
            <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-[#E5DFD5] space-y-3">
              <h3 className="text-sm font-bold text-forest-800 uppercase tracking-wider flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-forest-600" /> Career Development &amp; Professional Edge
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-charcoal-700">
                {guide.studentApplications.careerDevelopment.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-forest-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {guide.studentApplications.moneyManagement && (
            <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-[#E5DFD5] space-y-3">
              <h3 className="text-sm font-bold text-forest-800 uppercase tracking-wider flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-gold-600" /> Money &amp; Financial Management
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-charcoal-700">
                {guide.studentApplications.moneyManagement.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {guide.studentApplications.decisionMakingAndGrowth && (
            <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-[#E5DFD5] space-y-3 md:col-span-2">
              <h3 className="text-sm font-bold text-forest-800 uppercase tracking-wider flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-forest-600" /> Decision-Making &amp; Personal Growth
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-charcoal-700">
                {guide.studentApplications.decisionMakingAndGrowth.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-forest-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* NON-FICTION SECTION F: COMMON MISTAKES & MISCONCEPTIONS */}
      {!isFiction && (guide as NonFictionLearningGuide).misconceptions && (
        <section id="sec-misconceptions" className="bg-white border border-[#E5DFD5] rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
          <div className="flex items-center gap-3 border-b border-[#EAE3D6] pb-4">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-700 border border-amber-300">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-amber-700 uppercase tracking-widest">Section 5</span>
              <h2 className="text-xl sm:text-2xl font-bold font-serif text-charcoal-900">
                Common Mistakes &amp; Misconceptions
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            {(guide as NonFictionLearningGuide).misconceptions.map((item, idx) => (
              <div key={idx} className="bg-[#FAF7F2] p-5 rounded-2xl border border-[#E5DFD5] space-y-3">
                <div className="flex items-start gap-2 text-amber-800 font-bold text-sm">
                  <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 text-[10px] uppercase font-mono">
                    Myth
                  </span>
                  <span>{item.misconception}</span>
                </div>
                <div className="bg-white p-4 rounded-xl border border-[#EAE3D6] text-xs sm:text-sm space-y-2">
                  <div>
                    <span className="font-bold text-forest-800 text-[11px] uppercase tracking-wider block">
                      The Reality:
                    </span>
                    <p className="text-charcoal-700 leading-relaxed">{item.reality}</p>
                  </div>
                  <div>
                    <span className="font-bold text-amber-700 text-[11px] uppercase tracking-wider block">
                      Cautionary Advice:
                    </span>
                    <p className="text-charcoal-600 leading-relaxed">{item.caution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* NON-FICTION SECTION G: CRITICAL THINKING & LIMITATIONS */}
      {!isFiction && (guide as NonFictionLearningGuide).criticalThinking && (
        <section id="sec-critical" className="bg-white border border-[#E5DFD5] rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
          <div className="flex items-center gap-3 border-b border-[#EAE3D6] pb-4">
            <div className="p-2.5 rounded-2xl bg-forest-50 text-forest-700 border border-forest-200">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-forest-700 uppercase tracking-widest">Section 6</span>
              <h2 className="text-xl sm:text-2xl font-bold font-serif text-charcoal-900">
                Critical Thinking &amp; Limitations
              </h2>
              <p className="text-xs text-charcoal-500">
                Evaluating ideas with independent judgment rather than blind agreement
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs sm:text-sm">
            <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-[#E5DFD5] space-y-2">
              <span className="text-[10px] font-bold text-forest-700 uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-forest-600" /> Well-Supported Ideas
              </span>
              <ul className="space-y-1.5 list-disc list-inside text-charcoal-700 leading-relaxed pl-1">
                {(guide as NonFictionLearningGuide).criticalThinking.wellSupportedIdeas.map((idea, idx) => (
                  <li key={idx}>{idea}</li>
                ))}
              </ul>
            </div>

            <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-[#E5DFD5] space-y-2">
              <span className="text-[10px] font-bold text-amber-700 uppercase tracking-wider flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-600" /> Author’s Opinions &amp; Biases
              </span>
              <ul className="space-y-1.5 list-disc list-inside text-charcoal-700 leading-relaxed pl-1">
                {(guide as NonFictionLearningGuide).criticalThinking.authorOpinions.map((op, idx) => (
                  <li key={idx}>{op}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#EAE3D6] space-y-2">
              <span className="text-[10px] font-bold text-charcoal-600 uppercase tracking-wider">
                Anecdotes vs. Rigorous Evidence
              </span>
              <ul className="space-y-1.5 list-disc list-inside text-charcoal-700 leading-relaxed pl-1">
                {(guide as NonFictionLearningGuide).criticalThinking.anecdotesVsEvidence.map((anec, idx) => (
                  <li key={idx}>{anec}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#EAE3D6] space-y-2">
              <span className="text-[10px] font-bold text-charcoal-600 uppercase tracking-wider">
                Contextual &amp; Debated Claims
              </span>
              <ul className="space-y-1.5 list-disc list-inside text-charcoal-700 leading-relaxed pl-1">
                {(guide as NonFictionLearningGuide).criticalThinking.debatedOrContextualClaims.map((claim, idx) => (
                  <li key={idx}>{claim}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* NON-FICTION SECTION H: FINAL LESSONS, SUMMARY & ACTION PLAN */}
      {!isFiction && (guide as NonFictionLearningGuide).finalLessons && (
        <section id="sec-lessons" className="bg-white border border-[#E5DFD5] rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
          <div className="flex items-center gap-3 border-b border-[#EAE3D6] pb-4">
            <div className="p-2.5 rounded-2xl bg-forest-50 text-forest-700 border border-forest-200">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-forest-700 uppercase tracking-widest">Section 7</span>
              <h2 className="text-xl sm:text-2xl font-bold font-serif text-charcoal-900">
                Final Lessons &amp; Action Plan
              </h2>
            </div>
          </div>

          <div className="space-y-5">
            {/* Final Concise Summary Callout */}
            <div className="bg-forest-900 text-cream-50 p-6 sm:p-8 rounded-2xl space-y-2 shadow-sm">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gold-400">Core Summary</span>
              <p className="text-sm sm:text-base leading-relaxed font-serif text-cream-100">
                {(guide as NonFictionLearningGuide).finalLessons.finalSummary}
              </p>
            </div>

            {/* Practical Action Plan Table/Grid */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-bold text-forest-800 uppercase tracking-wider">
                Practical Action Plan for Students
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(guide as NonFictionLearningGuide).finalLessons.actionPlan.map((step, idx) => (
                  <div key={idx} className="bg-[#FAF7F2] p-4 rounded-xl border border-[#E5DFD5] space-y-1.5">
                    <span className="text-xs font-bold text-forest-800">{step.step}</span>
                    <p className="text-xs text-charcoal-800 font-medium">{step.action}</p>
                    <p className="text-[11px] text-charcoal-500">
                      <strong>Expected Outcome:</strong> {step.outcome}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Five Points to Remember */}
            <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#E5DFD5] space-y-3">
              <h3 className="text-xs font-bold text-forest-800 uppercase tracking-wider">
                Five Important Points to Remember
              </h3>
              <div className="space-y-2">
                {(guide as NonFictionLearningGuide).finalLessons.fivePointsToRemember.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal-800 bg-white p-3 rounded-xl border border-[#EAE3D6]">
                    <CheckCircle2 className="w-4 h-4 text-forest-700 flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION I: QUICK REVISION SECTION (GLOSSARY, REVISION QUESTIONS & 1-MIN SUMMARY) */}
      <section id="sec-revision" className="bg-white border border-[#E5DFD5] rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
        <div className="flex items-center gap-3 border-b border-[#EAE3D6] pb-4">
          <div className="p-2.5 rounded-2xl bg-gold-50 text-gold-700 border border-gold-300">
            <BookMarked className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-bold text-gold-700 uppercase tracking-widest">
              {isFiction ? 'Section 6' : 'Section 8'}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-charcoal-900">
              Quick Revision &amp; Active Recall
            </h2>
          </div>
        </div>

        {/* 1-Minute Revision Summary */}
        <div className="bg-gold-50/70 p-5 sm:p-6 rounded-2xl border border-gold-200 text-charcoal-900 space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-gold-800 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" /> One-Minute Revision Summary
          </span>
          <p className="text-xs sm:text-sm leading-relaxed font-sans">
            {guide.quickRevision.oneMinuteSummary}
          </p>
        </div>

        {/* Key Terms and Glossary */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold text-forest-800 uppercase tracking-wider">
            Important Terms and Meanings
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {guide.quickRevision.keyTerms.map((term, idx) => (
              <div key={idx} className="bg-[#FAF7F2] p-3.5 rounded-xl border border-[#E5DFD5] space-y-1">
                <span className="font-bold text-forest-800 text-xs sm:text-sm font-serif block">
                  {term.term}
                </span>
                <p className="text-xs text-charcoal-600 leading-relaxed">{term.definition}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Revision Questions with Click-to-Reveal Answers */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold text-forest-800 uppercase tracking-wider">
              Revision Questions (Click to Test Your Recall)
            </h3>
            <span className="text-[11px] text-charcoal-500 font-mono">
              {guide.quickRevision.questions.length} Questions
            </span>
          </div>

          <div className="space-y-3">
            {guide.quickRevision.questions.map((q, idx) => {
              const isRevealed = Boolean(revealedQuestions[idx]);
              return (
                <div key={idx} className="bg-white rounded-xl border border-[#EAE3D6] overflow-hidden">
                  <button
                    onClick={() => toggleQuestion(idx)}
                    className="w-full p-4 text-left flex items-start justify-between gap-3 hover:bg-[#FAF7F2] transition-colors"
                  >
                    <div className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-forest-100 text-forest-800 flex items-center justify-center text-[10px] font-bold mt-0.5 flex-shrink-0">
                        Q{idx + 1}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-charcoal-800">
                        {q.question}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-forest-700 flex-shrink-0 flex items-center gap-1">
                      {isRevealed ? (
                        <>
                          <ChevronUp className="w-4 h-4" /> Hide
                        </>
                      ) : (
                        <>
                          <ChevronDown className="w-4 h-4" /> Reveal Answer
                        </>
                      )}
                    </span>
                  </button>

                  {isRevealed && (
                    <div className="p-4 bg-[#FAF7F2] border-t border-[#EAE3D6] text-xs sm:text-sm text-charcoal-700 animate-fadeIn space-y-1">
                      <span className="text-[10px] font-bold text-forest-700 uppercase tracking-widest block">Answer:</span>
                      <p className="leading-relaxed font-serif">{q.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
