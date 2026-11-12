'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import {
  getStoredBooks,
  getUserLibrary,
  saveUserLibraryItem,
  removeUserLibraryItem,
  getBookProgress,
} from '@/lib/db/storage';
import { getLearningGuide } from '@/lib/db/learningGuides';
import { getBookVisualGuideForBook } from '@/lib/db/visualGuides';
import { BooklyWatermark } from '@/components/layout/BooklyWatermark';
import { useAudioPlayer } from '@/components/player/AudioPlayerContext';
import { EducationalGuideView } from '@/components/books/EducationalGuideView';
import { VisualLearningSection } from '@/components/visuals/VisualLearningSection';
import { QuickLearnSection } from '@/components/books/QuickLearnSection';
import { KeyTakeawayCard } from '@/components/books/KeyTakeawayCard';
import { WrittenSummaryView } from '@/components/books/WrittenSummaryView';
import { AudioChaptersList } from '@/components/books/AudioChaptersList';
import { LanguageSelector } from '@/components/books/LanguageSelector';
import { CollegeLessonsSection } from '@/components/books/CollegeLessonsSection';
import { RelatedBooksSection } from '@/components/books/RelatedBooksSection';
import { Book, AudioLanguage } from '@/types/book';
import {
  Play,
  Pause,
  Bookmark,
  Star,
  Clock,
  ArrowLeft,
  Sparkles,
  AlertCircle,
  CheckCircle2,
  BookOpen,
  Headphones,
  ShieldCheck,
  Compass,
  GraduationCap,
  List,
  Layers,
  ChevronRight,
  Eye,
} from 'lucide-react';

function findBookBySlug(books: Book[], slug: string): Book | null {
  if (!slug) return null;
  return (
    books.find(
      (b) =>
        b.slug === slug ||
        b.id === slug ||
        (slug.startsWith('the-') && (b.slug === slug.replace(/^the-/, '') || b.id === slug.replace(/^the-/, ''))) ||
        (!slug.startsWith('the-') && (b.slug === `the-${slug}` || b.id === `the-${slug}`))
    ) || null
  );
}

export default function BookDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;

  const [allBooks, setAllBooks] = useState<Book[]>([]);
  const [book, setBook] = useState<Book | null>(null);
  const [isBookLoaded, setIsBookLoaded] = useState(false);
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [progressPercent, setProgressPercent] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'guide' | 'visuals' | 'takeaways' | 'chapters'>('guide');
  const [selectedLanguage, setSelectedLanguage] = useState<AudioLanguage>('en');
  const [imageError, setImageError] = useState(false);
  const [readingProgress, setReadingProgress] = useState<number>(0);

  const {
    currentBook,
    currentLanguage,
    isPlaying,
    playBook,
    togglePlay,
    setLanguage: setPlayerLanguage,
  } = useAudioPlayer();

  // Scroll / Reading Progress Indicator
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentScroll = window.scrollY;
        setReadingProgress(Math.min(100, Math.max(0, Math.round((currentScroll / totalHeight) * 100))));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const syncState = () => {
      const books = getStoredBooks();
      setAllBooks(books);
      const found = findBookBySlug(books, slug);
      setIsBookLoaded(true);
      setBook(found);
      if (found) {
        // Check library status (explicit saved status only)
        const lib = getUserLibrary();
        setIsSaved(lib.some((item) => item.bookId === found.id && item.status === 'saved'));

        // Check listening progress for active language
        const savedProg = getBookProgress(found.id, selectedLanguage);
        if (savedProg) {
          setProgressPercent(savedProg.progressPercentage);
        } else {
          setProgressPercent(0);
        }
      }
    };

    syncState();

    window.addEventListener('bookly-library-change', syncState);
    window.addEventListener('bookly-progress-change', syncState);
    window.addEventListener('storage', syncState);

    return () => {
      window.removeEventListener('bookly-library-change', syncState);
      window.removeEventListener('bookly-progress-change', syncState);
      window.removeEventListener('storage', syncState);
    };
  }, [slug, selectedLanguage, currentBook?.id]);

  // Sync selected language if player changes it for this book
  useEffect(() => {
    if (currentBook && (currentBook.slug === slug || currentBook.id === slug)) {
      setSelectedLanguage(currentLanguage);
    }
  }, [currentLanguage, currentBook, slug]);

  const handleLanguageChange = (newLang: AudioLanguage) => {
    setSelectedLanguage(newLang);
    setPlayerLanguage(newLang);

    if (book) {
      const savedProg = getBookProgress(book.id, newLang);
      setProgressPercent(savedProg ? savedProg.progressPercentage : 0);
    }
  };

  const handleToggleSave = () => {
    if (!book) return;
    if (isSaved) {
      removeUserLibraryItem(book.id);
      setIsSaved(false);
    } else {
      saveUserLibraryItem({
        bookId: book.id,
        savedAt: new Date().toISOString(),
        status: 'saved',
      });
      setIsSaved(true);
    }
  };

  if (!isBookLoaded) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center text-charcoal-600" role="status">
        Loading book details...
      </div>
    );
  }

  if (!book) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center text-charcoal-800 space-y-6">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-[#F4EFE6] border border-[#E5DFD5] flex items-center justify-center text-forest-700 shadow-sm">
          <BookOpen className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold font-serif text-charcoal-900">Book Not Found</h1>
          <p className="text-sm text-charcoal-600 max-w-md mx-auto">
            The book slug &ldquo;{slug}&rdquo; does not match any learning guide in our catalogue.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            href="/discover"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-forest-700 text-white font-bold text-xs shadow-sm hover:bg-forest-800 transition-all"
          >
            <ArrowLeft className="w-4 h-4" /> Browse Catalog
          </Link>
          <Link
            href="/search"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-[#FAF7F2] text-charcoal-800 font-bold text-xs border border-[#E5DFD5] transition-all"
          >
            Search Library
          </Link>
        </div>
      </div>
    );
  }

  // Retrieve educational learning guide & visual guide
  const learningGuide = getLearningGuide(book.slug) || getLearningGuide(book.id);
  const visualGuide = getBookVisualGuideForBook(book);

  // Audio availability checks
  const hasEnglishAudio = Boolean(book.audio.hasAudio && (book.audio.audioUrls?.en || book.audio.audioUrl));
  const hasTeluguAudio = Boolean(book.audio.audioUrls?.te && (book.audio.hasAudioByLanguage?.te ?? true));
  const isSelectedLanguageAudioAvailable = selectedLanguage === 'te' ? hasTeluguAudio : hasEnglishAudio;

  const isCurrentPlayingThisBookAndLang =
    currentBook?.id === book.id && currentLanguage === selectedLanguage && isPlaying;

  const currentDurationSeconds =
    selectedLanguage === 'te'
      ? book.audio.durations?.te || book.estimatedDurationMinutes * 60
      : book.audio.durations?.en || book.audio.duration || book.estimatedDurationMinutes * 60;

  const currentDurationMinutes = Math.max(1, Math.round(currentDurationSeconds / 60));

  const teluguDurationMinutes = book.audio.durations?.te
    ? Math.max(1, Math.round(book.audio.durations.te / 60))
    : undefined;

  const englishDurationMinutes = book.audio.durations?.en
    ? Math.max(1, Math.round(book.audio.durations.en / 60))
    : book.estimatedDurationMinutes;

  const handlePlayClick = () => {
    if (!isSelectedLanguageAudioAvailable) return;

    if (currentBook?.id === book.id && currentLanguage === selectedLanguage) {
      togglePlay();
    } else {
      playBook(book, undefined, selectedLanguage);
    }
  };

  const activeChapters =
    selectedLanguage === 'te'
      ? book.audio.chaptersByLanguage?.te || []
      : book.audio.chaptersByLanguage?.en || book.audio.chapters || [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Top Reading Progress Indicator */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-forest-700 via-sage-500 to-gold-500 z-50 transition-all duration-150"
        style={{ width: `${readingProgress}%` }}
        role="progressbar"
        aria-valuenow={readingProgress}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      {/* Back button & Breadcrumb */}
      <div className="flex items-center justify-between text-xs text-charcoal-600">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 font-semibold hover:text-forest-800 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Books
        </button>
        <div className="hidden sm:flex items-center gap-1.5 text-[11px] text-charcoal-500">
          <span>Bookly Learning</span>
          <ChevronRight className="w-3 h-3" />
          <span>{book.genre}</span>
          <ChevronRight className="w-3 h-3" />
          <span className="text-forest-800 font-semibold truncate max-w-[200px]">{book.title}</span>
        </div>
      </div>

      {/* SECTION 1.A: BOOK INTRODUCTION & HERO BANNER */}
      <div className="relative overflow-hidden bg-white border border-[#E5DFD5] rounded-3xl p-6 sm:p-10 shadow-bookly grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Subtle Brand Watermark behind content */}
        <BooklyWatermark position="top-right" size={380} opacity={0.05} />

        {/* Book Cover Image */}
        <div className="md:col-span-4 relative z-10 w-full aspect-[2/3] max-w-[280px] mx-auto rounded-2xl overflow-hidden shadow-bookly-lg border border-[#E2DCD0] group bg-[#F4EFE6] flex items-center justify-center p-2">
          {/* Subtle Butterfly Watermark inside Cover Container */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.08] z-0">
            <Image
              src="/brand/butterfly_watermark.png"
              alt=""
              width={180}
              height={130}
              className="object-contain"
            />
          </div>
          {!imageError && book.coverImage ? (
            <Image
              src={book.coverImage}
              alt={`Published book cover of ${book.title} by ${book.author}`}
              fill
              className="object-contain p-1 group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
              priority
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-forest-800 via-forest-900 to-forest-950 p-6 flex flex-col justify-between text-white border-l-4 border-l-gold-500">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-gold-400 tracking-wider">BOOKLY</span>
                <Headphones className="w-5 h-5 text-gold-400" />
              </div>
              <div className="space-y-2 text-center">
                <p className="text-base sm:text-lg font-bold font-serif text-cream-50 leading-tight">
                  {book.title}
                </p>
                <div className="w-8 h-0.5 bg-gold-400/60 mx-auto" />
                <p className="text-xs text-cream-300">{book.author}</p>
              </div>
              <div className="text-[10px] font-mono text-cream-400 text-center uppercase tracking-wider">
                Original Educational Guide
              </div>
            </div>
          )}

          {/* Language badge on cover */}
          <div className="absolute bottom-3 left-3 px-2.5 py-1 bg-forest-900/90 backdrop-blur-md text-white text-[10px] font-bold rounded-lg border border-forest-700 flex items-center gap-1.5 shadow-md">
            <Sparkles className="w-3 h-3 text-gold-400" />
            <span>{selectedLanguage === 'te' ? 'తెలుగు ఆడియో' : 'English Audio'}</span>
          </div>
        </div>

        {/* Book Info & Core Actions */}
        <div className="md:col-span-8 relative z-10 space-y-5 text-charcoal-800">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 text-xs font-bold rounded-full bg-forest-50 text-forest-800 border border-forest-200 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-gold-500" /> LEARNING GUIDE &amp; AUDIO
            </span>
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[#FAF7F2] text-charcoal-700 border border-[#E5DFD5]">
              {book.genre}
            </span>
            {book.subgenre && (
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[#FAF7F2] text-charcoal-600 border border-[#E5DFD5]">
                {book.subgenre}
              </span>
            )}
            {book.publishedYear && (
              <span className="text-xs text-charcoal-500">
                Published {book.publishedYear}
              </span>
            )}
            <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase rounded-md bg-[#FAF7F2] text-forest-800 border border-[#E5DFD5]">
              {book.category}
            </span>
          </div>

          <div className="space-y-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-charcoal-900 tracking-tight leading-tight">
              {book.title}
            </h1>
            <p className="text-base sm:text-lg text-forest-700 font-semibold font-serif">
              By {book.author}
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="flex flex-wrap items-center gap-6 py-2.5 text-xs text-charcoal-600 border-y border-[#EAE3D6]">
            <div className="flex items-center gap-1.5 text-gold-700 font-semibold">
              <Star className="w-4 h-4 fill-current text-gold-500" />
              <span>{book.rating.toFixed(1)} / 5 Rating</span>
            </div>
            <div className="flex items-center gap-1.5 text-forest-800 font-mono font-medium">
              <Clock className="w-4 h-4 text-forest-700" />
              <span>
                ~{currentDurationMinutes} Min Audio Companion ({selectedLanguage === 'te' ? 'తెలుగు' : 'English'})
              </span>
            </div>
            {progressPercent > 0 && (
              <div className="flex items-center gap-1.5 text-forest-700 font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>{progressPercent}% Listened</span>
              </div>
            )}
          </div>

          {/* Progress Bar if started */}
          {progressPercent > 0 && (
            <div className="space-y-1">
              <div className="flex justify-between text-[11px] text-charcoal-500 font-mono">
                <span>Audio Progress ({selectedLanguage === 'te' ? 'తెలుగు' : 'English'})</span>
                <span>{progressPercent}%</span>
              </div>
              <div className="w-full h-2 bg-[#EAE3D6] rounded-full overflow-hidden">
                <div
                  className="h-full bg-forest-600 transition-all duration-300"
                  style={{ width: `${Math.min(100, progressPercent)}%` }}
                />
              </div>
            </div>
          )}

          {/* Bilingual Language Selector */}
          <LanguageSelector
            currentLanguage={selectedLanguage}
            hasEnglishAudio={hasEnglishAudio}
            hasTeluguAudio={hasTeluguAudio}
            onSelectLanguage={handleLanguageChange}
            englishDurationMinutes={englishDurationMinutes}
            teluguDurationMinutes={teluguDurationMinutes}
          />

          {/* Missing Telugu audio notice if applicable */}
          {selectedLanguage === 'te' && !hasTeluguAudio && (
            <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-800 text-xs flex items-center gap-2.5">
              <AlertCircle className="w-4 h-4 flex-shrink-0 text-amber-600" />
              <div>
                <p className="font-bold">Telugu Audio Coming Soon</p>
                <p className="text-charcoal-600 text-[11px]">
                  The Telugu audio companion for &ldquo;{book.title}&rdquo; is being prepared. You can listen in English or study the full learning guide below right now.
                </p>
              </div>
            </div>
          )}

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {isSelectedLanguageAudioAvailable ? (
              <button
                onClick={handlePlayClick}
                className={`px-8 py-3.5 rounded-full font-bold text-xs sm:text-sm shadow-sm transition-all flex items-center gap-2.5 ${
                  isCurrentPlayingThisBookAndLang
                    ? 'bg-forest-800 text-white shadow-md scale-105'
                    : 'bg-forest-700 hover:bg-forest-800 text-white hover:scale-105 active:scale-95'
                }`}
              >
                {isCurrentPlayingThisBookAndLang ? (
                  <>
                    <Pause className="w-5 h-5 fill-current" /> Pause Audio
                  </>
                ) : progressPercent > 0 && progressPercent < 95 ? (
                  <>
                    <Play className="w-5 h-5 fill-current ml-0.5" /> Resume in {selectedLanguage === 'te' ? 'తెలుగు' : 'English'} (~{currentDurationMinutes} Min)
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5 fill-current ml-0.5" /> Listen in {selectedLanguage === 'te' ? 'తెలుగు' : 'English'} (~{currentDurationMinutes} Min)
                  </>
                )}
              </button>
            ) : (
              <button
                disabled
                className="px-8 py-3.5 rounded-full font-bold text-xs sm:text-sm bg-gray-200 text-charcoal-400 cursor-not-allowed border border-gray-300 flex items-center gap-2"
              >
                <AlertCircle className="w-4 h-4" /> Telugu Audio Coming Soon
              </button>
            )}

            <button
              onClick={handleToggleSave}
              className={`px-6 py-3.5 rounded-full font-bold text-xs sm:text-sm border transition-all flex items-center gap-2 ${
                isSaved
                  ? 'bg-gold-500 text-white border-gold-600 shadow-sm'
                  : 'bg-[#FAF7F2] hover:bg-white text-charcoal-700 border-[#E2DCD0]'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
              {isSaved ? 'Saved in Library' : 'Save Book'}
            </button>
          </div>
        </div>
      </div>

      {/* SECTION 1.A Cont.: Short Introduction Explaining Why This Book is Worth Exploring */}
      <div className="bg-white border border-[#E5DFD5] rounded-3xl p-6 sm:p-8 shadow-sm text-charcoal-800 space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-forest-700">
          <Sparkles className="w-4 h-4 text-gold-600" /> Why This Book is Worth Exploring
        </div>
        <p className="text-sm sm:text-base text-charcoal-800 leading-relaxed font-serif">
          {learningGuide ? learningGuide.introduction : (book.extendedDescription || book.description)}
        </p>
      </div>

      {/* Educational Disclaimer Callout */}
      <div className="bg-[#FBF8F2] border border-[#E2D8C6] rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 text-xs text-charcoal-600 shadow-sm">
        <ShieldCheck className="w-5 h-5 text-forest-700 flex-shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="font-bold text-charcoal-900 uppercase tracking-wider text-[11px]">
            Independent Educational Study Companion • Not a Replacement for the Original Book
          </p>
          <p className="leading-relaxed">
            This learning guide and audio companion are an independent educational analysis created by Bookly. Bookly provides conceptual frameworks, mental models, real-world examples, student applications, and critical limitations. This guide does not claim to reproduce every detail of the author&apos;s full published work or replace reading the original book.
          </p>
        </div>
      </div>

      {/* "IF YOU REMEMBER ONLY ONE THING..." Callout */}
      <KeyTakeawayCard keyTakeaway={book.summary.keyTakeaway} />

      {/* Navigation Tabs: Educational Learning Guide | Quick Takeaways | Audio Chapters */}
      <div className="flex flex-wrap items-center gap-2 border-b border-[#E5DFD5] pb-3">
        <button
          onClick={() => setActiveTab('guide')}
          className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 ${
            activeTab === 'guide'
              ? 'bg-forest-700 text-white shadow-sm font-extrabold'
              : 'bg-[#F4EFE6] text-charcoal-700 hover:bg-[#EAE2D3] border border-[#E2DCD0]'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" /> Full Learning Guide
        </button>

        <button
          onClick={() => setActiveTab('visuals')}
          className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 ${
            activeTab === 'visuals'
              ? 'bg-forest-700 text-white shadow-sm font-extrabold'
              : 'bg-[#F4EFE6] text-charcoal-700 hover:bg-[#EAE2D3] border border-[#E2DCD0]'
          }`}
        >
          <Eye className="w-3.5 h-3.5 text-forest-700" /> Visualise the Ideas {visualGuide ? `(${visualGuide.diagrams.length})` : ''}
        </button>

        <button
          onClick={() => setActiveTab('takeaways')}
          className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 ${
            activeTab === 'takeaways'
              ? 'bg-forest-700 text-white shadow-sm font-extrabold'
              : 'bg-[#F4EFE6] text-charcoal-700 hover:bg-[#EAE2D3] border border-[#E2DCD0]'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 text-gold-500" /> Quick Takeaways &amp; Overview
        </button>

        <button
          onClick={() => setActiveTab('chapters')}
          className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 ${
            activeTab === 'chapters'
              ? 'bg-forest-700 text-white shadow-sm font-extrabold'
              : 'bg-[#F4EFE6] text-charcoal-700 hover:bg-[#EAE2D3] border border-[#E2DCD0]'
          }`}
        >
          <Headphones className="w-3.5 h-3.5" /> Audio Chapters ({activeChapters.length})
        </button>
      </div>

      {/* Active Tab View */}
      <div>
        {activeTab === 'guide' && (
          learningGuide ? (
            <EducationalGuideView guide={learningGuide} bookTitle={book.title} />
          ) : (
            <div className="bg-white border border-[#E5DFD5] rounded-3xl p-8 text-center space-y-4">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-200">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-serif text-charcoal-900">
                Learning Guide In Preparation
              </h3>
              <p className="text-sm text-charcoal-600 max-w-md mx-auto">
                Our educational team is curating the deep conceptual breakdown, student applications, and critical thinking guide for &ldquo;{book.title}&rdquo;. You can review the quick takeaways or listen to the audio summary in the meantime.
              </p>
              <button
                onClick={() => setActiveTab('takeaways')}
                className="px-5 py-2 rounded-full bg-forest-700 text-white text-xs font-bold"
              >
                View Quick Takeaways
              </button>
            </div>
          )
        )}

        {activeTab === 'visuals' && (
          visualGuide ? (
            <VisualLearningSection guide={visualGuide} bookTitle={book.title} />
          ) : (
            <div className="bg-white border border-[#E5DFD5] rounded-3xl p-8 text-center space-y-4">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-200">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-serif text-charcoal-900">
                No Book-Specific Visual Guide Yet
              </h3>
              <p className="text-sm text-charcoal-600 max-w-md mx-auto">
                We did not create a generic diagram because it could misrepresent this book. Add a meaningful key takeaway and at least one supporting idea or lesson to its saved summary to provide a source-based visual overview.
              </p>
            </div>
          )
        )}

        {activeTab === 'takeaways' && (
          <div className="space-y-8">
            <QuickLearnSection
              quickLearn={book.summary.quickLearn}
              estimatedDurationMinutes={currentDurationMinutes}
            />
            <WrittenSummaryView summary={book.summary} />
            {book.summary.collegeLessons && book.summary.collegeLessons.length > 0 && (
              <CollegeLessonsSection
                lessons={book.summary.collegeLessons}
                bookTitle={book.title}
              />
            )}
          </div>
        )}

        {activeTab === 'chapters' && (
          <AudioChaptersList
            audio={book.audio}
            book={book}
            chapters={activeChapters}
            language={selectedLanguage}
          />
        )}
      </div>

      {/* Related Books Section */}
      <RelatedBooksSection currentBook={book} allBooks={allBooks} />
    </div>
  );
}
