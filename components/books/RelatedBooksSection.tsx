'use client';

import React from 'react';
import { Book } from '@/types/book';
import { BookCard } from './BookCard';
import { Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface RelatedBooksSectionProps {
  currentBook: Book;
  allBooks: Book[];
}

export const RelatedBooksSection: React.FC<RelatedBooksSectionProps> = ({
  currentBook,
  allBooks,
}) => {
  const related = React.useMemo(() => {
    const sameGenre = allBooks.filter(
      (b) => b.id !== currentBook.id && (b.genre === currentBook.genre || b.subgenre === currentBook.genre)
    );
    const sameCategory = allBooks.filter(
      (b) => b.id !== currentBook.id && b.category === currentBook.category && !sameGenre.some((g) => g.id === b.id)
    );

    const pool = [...sameGenre, ...sameCategory];
    pool.sort((a, b) => b.popularityScore - a.popularityScore || b.rating - a.rating);
    return pool.slice(0, 3);
  }, [currentBook, allBooks]);

  if (related.length === 0) return null;

  return (
    <div className="space-y-6 pt-4">
      <div className="flex items-center justify-between border-b border-[#E5DFD5] pb-3">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-forest-50 text-forest-700 border border-forest-200">
            <Sparkles className="w-4 h-4 text-gold-500" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-charcoal-900">
              Related Audio Summaries
            </h2>
            <p className="text-xs text-charcoal-500">
              Listeners who enjoyed <span className="text-forest-800 font-semibold">{currentBook.title}</span> also explored
            </p>
          </div>
        </div>

        <Link
          href="/discover"
          className="text-xs font-semibold text-forest-700 hover:text-forest-800 flex items-center gap-1 transition-colors"
        >
          Explore All <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {related.map((book) => (
          <div key={book.id} className="h-full">
            <BookCard book={book} />
          </div>
        ))}
      </div>
    </div>
  );
};
