'use client';

import React, { useState, useEffect, Suspense, useMemo } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { BookCard } from '@/components/books/BookCard';
import { BooklyWatermark } from '@/components/layout/BooklyWatermark';
import { INITIAL_BOOKS } from '@/lib/db/booksData';
import { getStoredBooks, getUserProgressMap } from '@/lib/db/storage';
import { Book, ListeningProgress } from '@/types/book';
import {
  Compass,
  Search,
  Sparkles,
  Headphones,
  SlidersHorizontal,
  X,
  RotateCcw,
  BookOpen,
} from 'lucide-react';

const CATEGORY_FILTERS = [
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

function DiscoverContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialGenre = searchParams.get('genre') || 'all';
  const initialQuery = searchParams.get('q') || '';

  const [books, setBooks] = useState<Book[]>(INITIAL_BOOKS);
  const [selectedCategory, setSelectedCategory] = useState<string>(initialGenre);
  const [searchFilter, setSearchFilter] = useState<string>(initialQuery);
  const [sortBy, setSortBy] = useState<'popularity' | 'rating' | 'duration' | 'title'>('popularity');
  const [progressMap, setProgressMap] = useState<Record<string, ListeningProgress>>({});

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

  useEffect(() => {
    const genreParam = searchParams.get('genre');
    if (genreParam) {
      setSelectedCategory(genreParam);
    }
    const qParam = searchParams.get('q');
    if (qParam) {
      setSearchFilter(qParam);
    }
  }, [searchParams]);

  const handleCategorySelect = (slug: string) => {
    setSelectedCategory(slug);
    if (slug === 'all') {
      router.push('/discover');
    } else {
      router.push(`/discover?genre=${encodeURIComponent(slug)}`);
    }
  };

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
          const targetObj = CATEGORY_FILTERS.find((c) => c.slug === selectedCategory);
          const targetWords = (targetObj ? targetObj.name : selectedCategory).toLowerCase().split(' ');
          const match = targetWords.some((w) => w.length > 3 && (genre.includes(w) || subgenre.includes(w)));
          if (!match) return false;
        }
      }

      // Search query filter
      if (searchFilter.trim() !== '') {
        const q = searchFilter.toLowerCase().trim();
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
  }, [books, selectedCategory, searchFilter]);

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

  const resetFilters = () => {
    setSelectedCategory('all');
    setSearchFilter('');
    router.push('/discover');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Editorial Header Banner with Bookly Watermark */}
      <section className="relative overflow-hidden bg-gradient-to-r from-forest-800 via-forest-850 to-forest-900 rounded-3xl p-6 sm:p-8 text-[#FAF7F2] shadow-bookly-lg">
        {/* Subtle Watermark */}
        <BooklyWatermark position="top-right" size={380} opacity={0.06} colorClass="text-cream-100" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-700/60 border border-forest-600 text-gold-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>EXPLORE THE COMPLETE CATALOGUE</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-bold font-serif text-white tracking-tight">
              Discover Audio Summaries
            </h1>
            <p className="text-xs sm:text-sm text-cream-200 leading-relaxed">
              Browse all 19 hand-crafted book summaries in English and Telugu (తెలుగు). Filter by topic, search by concept, or sort by duration.
            </p>
          </div>
          <div className="flex items-center gap-3 text-xs bg-forest-900/60 p-3 rounded-2xl border border-forest-700">
            <Headphones className="w-5 h-5 text-gold-400 flex-shrink-0" />
            <div className="text-left">
              <p className="font-bold text-white">19 Books Available</p>
              <p className="text-cream-300 text-[11px]">English &amp; Telugu Audio</p>
            </div>
          </div>
        </div>
      </section>

      {/* Search, Filter, and Controls Bar */}
      <section className="bg-white rounded-2xl p-5 border border-[#E5DFD5] shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row items-center gap-4">
          {/* Search Input */}
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-400" />
            <input
              type="text"
              aria-label="Search catalogue"
              placeholder="Search by title, author, topic (e.g. habits, money, negotiation)..."
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              className="w-full bg-[#FAF7F2] text-charcoal-800 text-sm pl-10 pr-10 py-2.5 rounded-xl border border-[#DCD5C9] focus:outline-none focus:border-forest-700 focus:ring-1 focus:ring-forest-700 placeholder:text-charcoal-400"
            />
            {searchFilter && (
              <button
                onClick={() => setSearchFilter('')}
                aria-label="Clear search input"
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-charcoal-400 hover:text-charcoal-700 p-1"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Sort Selector */}
          <div className="w-full md:w-auto flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-charcoal-500 hidden sm:block" />
            <select
              aria-label="Sort books by"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="w-full md:w-48 bg-[#FAF7F2] text-charcoal-800 text-xs font-semibold px-3.5 py-2.5 rounded-xl border border-[#DCD5C9] focus:outline-none focus:border-forest-700 cursor-pointer"
            >
              <option value="popularity">Most Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="duration">Shortest Duration</option>
              <option value="title">Title (A-Z)</option>
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="pt-2 border-t border-[#EAE3D6] flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
          {CATEGORY_FILTERS.map((cat) => {
            const isSelected = selectedCategory === cat.slug;
            return (
              <button
                key={cat.slug}
                onClick={() => handleCategorySelect(cat.slug)}
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
      </section>

      {/* Main Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-[#E5DFD5] pb-3">
          <div>
            <h2 className="text-xl font-bold font-serif text-charcoal-900">
              {searchFilter
                ? `Results for "${searchFilter}"`
                : selectedCategory !== 'all'
                ? `${CATEGORY_FILTERS.find((c) => c.slug === selectedCategory)?.name || 'Category'} Summaries`
                : 'All Summaries'}
            </h2>
            <p className="text-xs text-charcoal-500">
              Showing <strong className="text-charcoal-800">{sortedBooks.length}</strong> of{' '}
              <strong className="text-charcoal-800">{books.length}</strong> books
            </p>
          </div>

          {(selectedCategory !== 'all' || searchFilter !== '') && (
            <button
              onClick={resetFilters}
              className="text-xs font-semibold text-forest-700 hover:text-forest-800 flex items-center gap-1.5 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reset Filters
            </button>
          )}
        </div>

        {sortedBooks.length === 0 ? (
          <div className="text-center py-16 px-4 bg-white rounded-2xl border border-[#E5DFD5] space-y-4 max-w-lg mx-auto shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-[#F4EFE6] text-forest-700 flex items-center justify-center mx-auto">
              <BookOpen className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-bold text-charcoal-900 font-serif">No books found</h3>
              <p className="text-xs text-charcoal-500">
                We couldn&apos;t find any book summaries matching your search or filter. Try a different keyword.
              </p>
            </div>
            <button
              onClick={resetFilters}
              className="px-4 py-2 rounded-xl bg-forest-700 text-white font-semibold text-xs hover:bg-forest-800 transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
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

export default function DiscoverPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto px-4 py-20 text-center text-charcoal-500">
          <div className="inline-block w-8 h-8 border-2 border-forest-700 border-t-transparent rounded-full animate-spin mb-4" />
          <p className="text-sm">Loading Bookly Catalog...</p>
        </div>
      }
    >
      <DiscoverContent />
    </Suspense>
  );
}
