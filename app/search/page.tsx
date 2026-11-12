'use client';

import React, { useState, useEffect, Suspense, useMemo } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { BookCard } from '@/components/books/BookCard';
import { BooklyWatermark } from '@/components/layout/BooklyWatermark';
import { INITIAL_BOOKS } from '@/lib/db/booksData';
import { getStoredBooks } from '@/lib/db/storage';
import { Book } from '@/types/book';
import { Search, Compass, Sparkles, Tag, X, BookOpen } from 'lucide-react';

function SearchContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';

  const [query, setQuery] = useState(initialQuery);
  const [books, setBooks] = useState<Book[]>(INITIAL_BOOKS);

  useEffect(() => {
    setBooks(getStoredBooks());
  }, []);

  useEffect(() => {
    setQuery(searchParams.get('q') || '');
  }, [searchParams]);

  const searchResults = useMemo(() => {
    if (!query.trim()) return books;
    const q = query.toLowerCase().trim();
    return books.filter((book) => {
      const matchTitle = book.title.toLowerCase().includes(q);
      const matchAuthor = book.author.toLowerCase().includes(q);
      const matchGenre = book.genre.toLowerCase().includes(q);
      const matchDescription = (book.description || '').toLowerCase().includes(q);
      const matchTopic = book.summary?.quickLearn?.mainTopics?.some((t) => t.toLowerCase().includes(q));
      const matchTakeaway = (book.summary?.keyTakeaway || '').toLowerCase().includes(q);
      const matchCollege = book.summary?.collegeLessons?.some(
        (l) => l.title.toLowerCase().includes(q) || l.takeaway.toLowerCase().includes(q)
      );
      return matchTitle || matchAuthor || matchGenre || matchDescription || matchTopic || matchTakeaway || matchCollege;
    });
  }, [books, query]);

  const popularTopics = ['Habits', 'Money', 'Focus', 'Mindset', 'Power', 'Negotiation', 'History', 'Investing'];

  return (
    <div className="relative overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-8">
      {/* Subtle Bookly Butterfly Watermark */}
      <BooklyWatermark position="top-right" size={420} opacity={0.05} />

      {/* Title */}
      <div className="relative z-10 space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-50 border border-forest-200 text-forest-800 text-xs font-semibold">
          <Search className="w-3.5 h-3.5 text-gold-500" /> INSTANT SEARCH
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-charcoal-900 font-serif tracking-tight">
          Search Bookly
        </h1>
        <p className="text-sm text-charcoal-600 max-w-xl">
          Search across titles, authors, categories, topics, and key takeaways in English and Telugu.
        </p>
      </div>

      {/* Search Input Box */}
      <div className="bg-white border border-[#E5DFD5] rounded-2xl p-4 sm:p-5 shadow-sm space-y-3">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-charcoal-400" />
          <input
            type="text"
            placeholder="Type a book title (e.g. Atomic Habits), author (e.g. Morgan Housel), or topic (e.g. money, focus)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-[#FAF7F2] text-charcoal-800 text-sm pl-11 pr-10 py-3.5 rounded-xl border border-[#DCD5C9] focus:outline-none focus:border-forest-700 focus:ring-1 focus:ring-forest-700 placeholder:text-charcoal-400"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              aria-label="Clear search"
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-charcoal-400 hover:text-charcoal-700 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Suggested Quick Topics */}
        <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-charcoal-500">
          <span className="font-semibold text-charcoal-700 flex items-center gap-1">
            <Tag className="w-3 h-3 text-forest-700" /> Popular:
          </span>
          {popularTopics.map((topic) => (
            <button
              key={topic}
              onClick={() => setQuery(topic)}
              className={`px-2.5 py-1 rounded-full text-xs transition-all ${
                query.toLowerCase() === topic.toLowerCase()
                  ? 'bg-forest-700 text-white font-bold'
                  : 'bg-[#FAF7F2] hover:bg-forest-50 text-charcoal-700 border border-[#E5DFD5]'
              }`}
            >
              {topic}
            </button>
          ))}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between border-b border-[#E5DFD5] pb-3">
        <div>
          <h2 className="text-xl font-bold font-serif text-charcoal-900">
            {query ? `Results for "${query}"` : 'All Book Summaries'}
          </h2>
          <p className="text-xs text-charcoal-500">
            Found <strong className="text-charcoal-800">{searchResults.length}</strong> matching summaries
          </p>
        </div>
      </div>

      {/* Results Grid */}
      {searchResults.length === 0 ? (
        <div className="text-center py-16 px-4 bg-white rounded-3xl border border-[#E5DFD5] space-y-4 max-w-lg mx-auto shadow-sm">
          <div className="w-12 h-12 rounded-2xl bg-[#F4EFE6] text-forest-700 flex items-center justify-center mx-auto">
            <BookOpen className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-bold text-charcoal-900 font-serif">No matches found</h3>
            <p className="text-xs text-charcoal-500">
              No book summaries matched &ldquo;{query}&rdquo;. Try another term or browse popular topics above.
            </p>
          </div>
          <button
            onClick={() => setQuery('')}
            className="px-4 py-2 rounded-xl bg-forest-700 text-white font-semibold text-xs hover:bg-forest-800 transition-colors"
          >
            Clear Search
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-stretch">
          {searchResults.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto px-4 py-20 text-center text-charcoal-500">
          <div className="inline-block w-8 h-8 border-2 border-forest-700 border-t-transparent rounded-full animate-spin mb-4" />
          <p className="text-sm">Loading Search...</p>
        </div>
      }
    >
      <SearchContent />
    </Suspense>
  );
}
