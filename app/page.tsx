'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { BooklyWatermark } from '@/components/layout/BooklyWatermark';
import { BookCard } from '@/components/books/BookCard';
import { useAudioPlayer } from '@/components/player/AudioPlayerContext';
import { INITIAL_BOOKS } from '@/lib/db/booksData';
import { getStoredBooks, getUserProgressMap } from '@/lib/db/storage';
import { Book, ListeningProgress } from '@/types/book';
import {
  Sparkles,
  ArrowRight,
  Play,
  Compass,
  Flame,
  Search,
  BookOpen,
  GraduationCap,
  Layers,
  X,
  SlidersHorizontal,
  Headphones,
} from 'lucide-react';

const CURATED_CATEGORIES = [
  { name: 'All Books', slug: 'all' },
  { name: 'Personal Growth', slug: 'personal-growth' },
  { name: 'Productivity', slug: 'productivity' },
  { name: 'Money & Financial Literacy', slug: 'money-financial-literacy' },
  { name: 'Psychology & Human Behaviour', slug: 'psychology-human-behaviour' },
  { name: 'Communication & Relationships', slug: 'communication-relationships' },
  { name: 'Leadership', slug: 'leadership-personal-development' },
  { name: 'Business & Entrepreneurship', slug: 'entrepreneurship-wealth-creation' },
  { name: 'Science & History', slug: 'science-history' },
  { name: 'Fiction & Adventure', slug: 'fiction-adventure' },
];

export default function HomePage() {
  const router = useRouter();
  const { playBook } = useAudioPlayer();
  const [books, setBooks] = useState<Book[]>(INITIAL_BOOKS);
  const [progressMap, setProgressMap] = useState<Record<string, ListeningProgress>>({});
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState<'popularity' | 'rating' | 'duration' | 'title'>('popularity');
  const catalogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const syncData = () => {
      setBooks(getStoredBooks());
      setProgressMap(getUserProgressMap());
    };
    syncData();

    window.addEventListener('bookly-progress-change', syncData);
    window.addEventListener('bookly-library-change', syncData);
    window.addEventListener('storage', syncData);

    return () => {
      window.removeEventListener('bookly-progress-change', syncData);
      window.removeEventListener('bookly-library-change', syncData);
      window.removeEventListener('storage', syncData);
    };
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (catalogRef.current) {
      catalogRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCatalog = () => {
    if (catalogRef.current) {
      catalogRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Continue listening books: ONLY started (>5s) and NOT completed, sorted by most recently played
  const continueListeningBooks = useMemo(() => {
    return books
      .filter((book) => {
        const p = progressMap[book.id];
        return p && !p.completed && (p.positionSeconds || 0) > 5;
      })
      .sort((a, b) => {
        const pA = progressMap[a.id]?.lastPlayedAt || '';
        const pB = progressMap[b.id]?.lastPlayedAt || '';
        return new Date(pB).getTime() - new Date(pA).getTime();
      });
  }, [books, progressMap]);

  // Featured book for hero spotlight
  const featuredBook = useMemo(() => {
    return books.find((b) => b.slug === 'atomic-habits') || books[0];
  }, [books]);

  // Popular books
  const popularBooks = useMemo(() => {
    return [...books].sort((a, b) => b.popularityScore - a.popularityScore).slice(0, 4);
  }, [books]);

  // Recommended for students
  const studentBooks = useMemo(() => {
    const studentSlugs = [
      'atomic-habits',
      'deep-work',
      'psychology-of-money',
      'rich-dad-poor-dad',
      'the-7-habits',
      'think-and-grow-rich',
    ];
    return books.filter((b) => studentSlugs.includes(b.slug) || studentSlugs.includes(b.id)).slice(0, 4);
  }, [books]);

  // Filtered books for the main catalog
  const filteredBooks = useMemo(() => {
    return books.filter((book) => {
      // Category filter
      if (selectedCategory !== 'all') {
        const cat = selectedCategory.toLowerCase();
        const genre = book.genre.toLowerCase();
        const subgenre = (book.subgenre || '').toLowerCase();

        if (cat === 'science-history') {
          const match = genre.includes('history') || genre.includes('science') || subgenre.includes('history');
          if (!match && book.slug !== 'sapiens') return false;
        } else if (cat === 'fiction-adventure') {
          const match = book.category === 'fiction' || genre.includes('adventure') || genre.includes('fantasy');
          if (!match && book.slug !== 'the-alchemist') return false;
        } else {
          const targetObj = CURATED_CATEGORIES.find((c) => c.slug === selectedCategory);
          const targetWords = (targetObj ? targetObj.name : selectedCategory).toLowerCase().split(' ');
          const match = targetWords.some((w) => w.length > 3 && (genre.includes(w) || subgenre.includes(w)));
          if (!match) return false;
        }
      }

      // Search query filter (title, author, genre, topics, keyTakeaway)
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase().trim();
        const matchTitle = book.title.toLowerCase().includes(q);
        const matchAuthor = book.author.toLowerCase().includes(q);
        const matchGenre = book.genre.toLowerCase().includes(q);
        const matchDescription = (book.description || '').toLowerCase().includes(q);
        const matchTakeaway = (book.summary?.keyTakeaway || '').toLowerCase().includes(q);
        const matchTopics = book.summary?.quickLearn?.mainTopics?.some((t) => t.toLowerCase().includes(q));

        if (!matchTitle && !matchAuthor && !matchGenre && !matchDescription && !matchTakeaway && !matchTopics) {
          return false;
        }
      }

      return true;
    });
  }, [books, selectedCategory, searchQuery]);

  // Sorted books
  const sortedBooks = useMemo(() => {
    const list = [...filteredBooks];
    list.sort((a, b) => {
      if (sortBy === 'popularity') return b.popularityScore - a.popularityScore;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'duration') return (a.estimatedDurationMinutes || 15) - (b.estimatedDurationMinutes || 15);
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      return 0;
    });
    return list;
  }, [filteredBooks, sortBy]);

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Compact Editorial Hero Section with Subtle Bookly Watermark */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF7F2] via-[#F4EFE6] to-[#FAF7F2] border-b border-[#E5DFD5] py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        {/* Faded Bookly Butterfly Watermark (4-8% opacity, muted sage, pointer-events: none) */}
        <BooklyWatermark position="hero" size={540} opacity={0.06} />

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text & Search */}
          <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-50 border border-forest-200 text-forest-800 text-xs font-semibold shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-gold-500" />
              <span>BILINGUAL AUDIO LIBRARY • ENGLISH &amp; TELUGU (తెలుగు)</span>
            </div>

            <div className="space-y-1">
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black text-charcoal-900 tracking-tight font-serif leading-tight">
                Great ideas. Shorter listening. <br className="hidden sm:inline" />
                <span className="text-forest-700">A better you.</span>
              </h1>
            </div>

            <p className="text-sm sm:text-base text-charcoal-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Discover powerful ideas on money, mindset, relationships, and personal growth—in English or Telugu. 19 complete ~15-minute educational audio summaries tailored for students and curious minds.
            </p>

            {/* Working Hero Search + Browse Action */}
            <div className="pt-2 max-w-xl mx-auto lg:mx-0">
              <form onSubmit={handleSearchSubmit} className="flex flex-col sm:flex-row items-center gap-2.5">
                <div className="relative w-full">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-400" />
                  <input
                    type="text"
                    aria-label="Search catalogue"
                    placeholder="Search by book title, author, or topic..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white text-charcoal-800 text-sm pl-10 pr-4 py-3 rounded-xl border border-[#DCD5C9] focus:outline-none focus:border-forest-700 focus:ring-1 focus:ring-forest-700 shadow-sm placeholder:text-charcoal-400"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      aria-label="Clear search"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-charcoal-400 hover:text-charcoal-700 p-1"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
                <button
                  type="button"
                  onClick={scrollToCatalog}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-forest-700 hover:bg-forest-800 text-white font-bold text-xs shadow-sm hover:shadow transition-all whitespace-nowrap flex items-center justify-center gap-1.5"
                >
                  <Compass className="w-4 h-4 text-gold-300" /> Browse Books
                </button>
              </form>
            </div>

            {/* Quick Metrics Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-3 text-xs text-charcoal-600">
              <span className="flex items-center gap-1.5 font-semibold text-charcoal-800">
                <span className="w-2 h-2 rounded-full bg-forest-600 animate-pulse" />
                19 Books in Library
              </span>
              <span>•</span>
              <span className="text-forest-700 font-semibold">100% Verified English &amp; Telugu Audio</span>
              <span>•</span>
              <span className="text-gold-700 font-semibold">~15 Min Each</span>
            </div>
          </div>

          {/* Right Column: Featured Spotlight Card with Genuine Published Cover */}
          <div className="lg:col-span-4 flex justify-center">
            {featuredBook && (
              <div className="w-full max-w-[280px] sm:max-w-[300px] bg-white rounded-2xl p-4 border border-[#E5DFD5] shadow-bookly-lg hover:shadow-bookly-xl transition-all duration-300 group">
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#F0EAE1]">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gold-50 border border-gold-200/80 text-gold-700 text-[10px] font-bold tracking-wider uppercase">
                    <Sparkles className="w-3 h-3 text-gold-500" /> Spotlight Masterclass
                  </span>
                  <span className="text-[10px] font-bold text-forest-700 bg-forest-50 px-2 py-0.5 rounded-md border border-forest-200">
                    Bilingual
                  </span>
                </div>

                <div className="relative aspect-[2/3] w-full rounded-xl overflow-hidden mb-3 bg-[#F4EFE6] border border-[#E2DCD0] shadow-sm flex items-center justify-center p-1.5">
                  <Image
                    src={featuredBook.coverImage || '/covers/books/atomic-habits.jpg'}
                    alt={`Cover of ${featuredBook.title}`}
                    fill
                    sizes="(max-width: 640px) 240px, 280px"
                    className="object-contain p-1 group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
                    priority
                  />
                  <div className="absolute bottom-2 left-2 px-2 py-0.5 text-[9px] font-bold rounded-md bg-forest-900/90 backdrop-blur-md text-white border border-forest-700 shadow-sm flex items-center gap-1 pointer-events-none">
                    <span>EN</span>
                    <span className="text-gold-400">•</span>
                    <span className="text-gold-300">తెలుగు</span>
                  </div>
                </div>

                <div className="space-y-1 mb-3">
                  <h3 className="font-serif font-bold text-sm text-charcoal-900 line-clamp-1 group-hover:text-forest-700 transition-colors">
                    {featuredBook.title}
                  </h3>
                  <p className="text-xs text-charcoal-500 line-clamp-1">{featuredBook.author}</p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => playBook(featuredBook, undefined, 'en')}
                    className="flex-1 py-2 px-3 rounded-xl bg-forest-700 hover:bg-forest-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all active:scale-95"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" /> Listen (~15m)
                  </button>
                  <Link
                    href={`/books/${featuredBook.slug}`}
                    className="py-2 px-3 rounded-xl bg-[#F4EFE6] hover:bg-[#EAE3D6] text-forest-800 font-bold text-xs border border-[#E2DCD0] transition-colors"
                  >
                    Summary
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Continue Listening Shelf (Only when progress exists) */}
      {continueListeningBooks.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#E5DFD5]">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-forest-50 text-forest-700 border border-forest-200">
                <Headphones className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold font-serif text-charcoal-900">Continue Listening</h2>
                <p className="text-xs text-charcoal-500">Pick up right where you left off</p>
              </div>
            </div>
            <Link
              href="/library?tab=listening"
              className="text-xs font-semibold text-forest-700 hover:text-forest-800 flex items-center gap-1"
            >
              View in Library <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {continueListeningBooks.map((book) => (
              <BookCard key={`cont-${book.id}`} book={book} />
            ))}
          </div>
        </section>
      )}

      {/* Popular Books Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#E5DFD5]">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-gold-50 text-gold-600 border border-gold-200">
              <Flame className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-serif text-charcoal-900">Popular Summaries</h2>
              <p className="text-xs text-charcoal-500">Most-listened books in the catalogue</p>
            </div>
          </div>
          <button
            onClick={scrollToCatalog}
            className="text-xs font-semibold text-forest-700 hover:text-forest-800 flex items-center gap-1"
          >
            See All 19 <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {popularBooks.map((book) => (
            <BookCard key={`pop-${book.id}`} book={book} />
          ))}
        </div>
      </section>

      {/* Recommended for Students Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#E5DFD5]">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-forest-50 text-forest-700 border border-forest-200">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-serif text-charcoal-900">Recommended for Students</h2>
              <p className="text-xs text-charcoal-500">High-leverage habits, focus, and money fundamentals</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {studentBooks.map((book) => (
            <BookCard key={`stud-${book.id}`} book={book} />
          ))}
        </div>
      </section>

      {/* Main Browse All Books & Category Filter Section */}
      <section ref={catalogRef} id="all-books" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 pt-4">
        {/* Section Header & Search/Sort Controls */}
        <div className="bg-white rounded-2xl p-5 border border-[#E5DFD5] shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-serif text-charcoal-900">
                {searchQuery
                  ? `Search Results for "${searchQuery}"`
                  : selectedCategory !== 'all'
                  ? `${CURATED_CATEGORIES.find((c) => c.slug === selectedCategory)?.name || 'Category'} Summaries`
                  : 'All Book Summaries'}
              </h2>
              <p className="text-xs text-charcoal-500">
                Showing <strong className="text-charcoal-800">{sortedBooks.length}</strong> of{' '}
                <strong className="text-charcoal-800">{books.length}</strong> books in the library
              </p>
            </div>

            {/* Sort Selector */}
            <div className="flex items-center gap-2 w-full md:w-auto">
              <SlidersHorizontal className="w-4 h-4 text-charcoal-500 hidden sm:block" />
              <select
                aria-label="Sort books by"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full md:w-48 bg-[#FAF7F2] text-charcoal-800 text-xs font-semibold px-3 py-2 rounded-xl border border-[#DCD5C9] focus:outline-none focus:border-forest-700 cursor-pointer"
              >
                <option value="popularity">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="duration">Shortest Duration</option>
                <option value="title">Title (A-Z)</option>
              </select>
            </div>
          </div>

          {/* Clickable Category Filter Chips */}
          <div className="pt-2 border-t border-[#EAE3D6]">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
              {CURATED_CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat.slug;
                return (
                  <button
                    key={cat.slug}
                    onClick={() => setSelectedCategory(cat.slug)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                      isSelected
                        ? 'bg-forest-700 text-white shadow-sm font-bold'
                        : 'bg-[#F4EFE6] text-charcoal-700 hover:bg-[#EAE2D3] border border-[#E2DCD0]'
                    }`}
                  >
                    {cat.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Empty State */}
        {sortedBooks.length === 0 ? (
          <div className="text-center py-16 px-4 bg-white rounded-2xl border border-[#E5DFD5] space-y-4 max-w-lg mx-auto shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-[#F4EFE6] text-forest-700 flex items-center justify-center mx-auto">
              <BookOpen className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-bold text-charcoal-900 font-serif">No books found</h3>
              <p className="text-xs text-charcoal-500">
                We couldn&apos;t find any books matching your search or category filter. Try clearing keywords or resetting filters.
              </p>
            </div>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-4 py-2 rounded-xl bg-forest-700 text-white font-semibold text-xs hover:bg-forest-800 transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          /* Book Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-stretch">
            {sortedBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
