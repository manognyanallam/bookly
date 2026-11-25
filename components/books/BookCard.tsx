
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Book } from '@/types/book';
import { useAudioPlayer } from '../player/AudioPlayerContext';
import { useAuth } from '@/components/auth/AuthProvider';
import { GuestAuthPrompt } from '@/components/auth/GuestAuthPrompt';
import {
  Play,
  Pause,
  Bookmark,
  Star,
  Clock,
  Headphones,
  ArrowRight,
} from 'lucide-react';

import {
  getUserLibrary,
  saveUserLibraryItem,
  removeUserLibraryItem,
  getUserProgressMap,
} from '@/lib/db/userData';

interface BookCardProps {
  book: Book;
  compact?: boolean;
}

export const BookCard: React.FC<BookCardProps> = ({
  book,
  compact = false,
}) => {
  const router = useRouter();

  const { user, loading: authLoading } = useAuth();

  const {
    currentBook,
    isPlaying,
    playBook,
    currentLanguage,
  } = useAudioPlayer();

  const [isSaved, setIsSaved] = useState(false);
  const [progressPercent, setProgressPercent] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [showGuestPrompt, setShowGuestPrompt] = useState(false);

  const isCurrentPlaying =
    currentBook?.id === book.id && isPlaying;

  // Fetch this user's library and listening progress from Supabase.
  const syncState = async () => {
    if (authLoading) return;

    if (!user) {
      setIsSaved(false);
      setProgressPercent(0);
      setIsCompleted(false);
      return;
    }

    try {
      const [library, progressMap] = await Promise.all([
        getUserLibrary(user.id),
        getUserProgressMap(user.id),
      ]);

      setIsSaved(
        library.some((item) => item.bookId === book.id)
      );

      const progress =
        progressMap[`${book.id}:${currentLanguage}`] ||
        progressMap[book.id];

      if (progress) {
        setProgressPercent(progress.progressPercentage || 0);
        setIsCompleted(Boolean(progress.completed));
      } else {
        setProgressPercent(0);
        setIsCompleted(false);
      }
    } catch (error) {
      console.error('Failed to sync BookCard:', error);
    }
  };

  useEffect(() => {
    let active = true;

    const loadState = async () => {
      if (authLoading) return;

      if (!user) {
        if (active) {
          setIsSaved(false);
          setProgressPercent(0);
          setIsCompleted(false);
        }
        return;
      }

      try {
        const [library, progressMap] = await Promise.all([
          getUserLibrary(user.id),
          getUserProgressMap(user.id),
        ]);

        if (!active) return;

        setIsSaved(
          library.some((item) => item.bookId === book.id)
        );

        const progress =
          progressMap[`${book.id}:${currentLanguage}`] ||
          progressMap[book.id];

        setProgressPercent(progress?.progressPercentage || 0);
        setIsCompleted(Boolean(progress?.completed));
      } catch (error) {
        console.error('Failed to load book card data:', error);
      }
    };

    loadState();

    const handleUpdate = () => {
      void loadState();
    };

    window.addEventListener('bookly-library-change', handleUpdate);
    window.addEventListener('bookly-progress-change', handleUpdate);

    return () => {
      active = false;
      window.removeEventListener('bookly-library-change', handleUpdate);
      window.removeEventListener('bookly-progress-change', handleUpdate);
    };
  }, [
    book.id,
    user?.id,
    authLoading,
    currentLanguage,
    currentBook?.id,
  ]);

  const handleToggleSave = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (authLoading || isSaving) return;

    // Guests must sign in before saving books.
    if (!user) {
      setShowGuestPrompt(true);
      return;
    }

    setIsSaving(true);

    try {
      if (isSaved) {
        const success = await removeUserLibraryItem(
          user.id,
          book.id
        );

        if (!success) {
          alert('Could not remove this book. Please try again.');
          return;
        }

        setIsSaved(false);

        window.dispatchEvent(
          new CustomEvent('bookly-library-change')
        );
      } else {
        const success = await saveUserLibraryItem(user.id, {
          bookId: book.id,
          savedAt: new Date().toISOString(),
          status: 'saved',
        });

        if (!success) {
          alert('Could not save this book. Please try again.');
          return;
        }

        setIsSaved(true);

        window.dispatchEvent(
          new CustomEvent('bookly-library-change')
        );
      }
    } catch (error) {
      console.error('Bookmark operation failed:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  const handlePlayClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    playBook(book, undefined, currentLanguage);
  };

  const handleCardClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;

    if (target.closest('button')) return;

    router.push(`/books/${book.slug}`);
  };

  const englishDurationMinutes = book.audio?.durations?.en
    ? Math.max(1, Math.round(book.audio.durations.en / 60))
    : book.estimatedDurationMinutes || 15;

  const hasTelugu = Boolean(
    book.audio?.hasAudioByLanguage?.te ??
    book.audio?.audioUrls?.te
  );

  return (
    <div
      onClick={handleCardClick}
      className="group relative bg-white rounded-2xl p-3.5 sm:p-4 border border-[#E5DFD5] shadow-bookly hover:shadow-bookly-hover transition-all duration-300 flex flex-col justify-between h-full cursor-pointer hover:-translate-y-1 overflow-hidden"
    >
      {showGuestPrompt && (
        <GuestAuthPrompt onClose={() => setShowGuestPrompt(false)} />
      )}

      {/* Butterfly Watermark */}
      <div className="absolute -bottom-6 -right-6 pointer-events-none select-none opacity-[0.05] z-0">
        <Image
          src="/brand/butterfly_watermark.png"
          alt=""
          width={130}
          height={94}
          className="object-contain"
        />
      </div>

      <div className="relative z-10 flex-1 flex flex-col">
        {/* Book Cover */}
        <div className="relative aspect-[2/3] w-full rounded-xl overflow-hidden mb-3.5 bg-[#F4EFE6] border border-[#E2DCD0] shadow-sm flex-shrink-0 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.08] z-0">
            <Image
              src="/brand/butterfly_watermark.png"
              alt=""
              width={140}
              height={101}
              className="object-contain"
            />
          </div>

          {!imageError && book.coverImage ? (
            <Image
              src={book.coverImage}
              alt={`Cover of ${book.title} by ${book.author}`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
              className="object-contain p-1 group-hover:scale-105 transition-transform duration-500 drop-shadow-sm"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-forest-800 via-forest-900 to-forest-950 p-4 flex flex-col justify-between border-l-4 border-l-gold-500 text-white shadow-inner">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-gold-400 tracking-wider">
                  BOOKLY
                </span>
                <Headphones className="w-3.5 h-3.5 text-gold-400" />
              </div>

              <div className="my-auto space-y-1.5 text-center px-1">
                <p className="text-xs sm:text-sm font-bold font-serif line-clamp-3 text-cream-50 leading-snug">
                  {book.title}
                </p>
                <div className="w-6 h-0.5 bg-gold-500/60 mx-auto" />
                <p className="text-[10px] text-cream-300 line-clamp-1">
                  {book.author}
                </p>
              </div>

              <div className="text-[9px] font-mono text-cream-400 text-center uppercase tracking-wider">
                Original Summary
              </div>
            </div>
          )}

          {/* Duration Badge */}
          <div className="absolute top-2 left-2 flex flex-col gap-1 z-10 pointer-events-none">
            <span className="px-2 py-0.5 text-[10px] font-bold rounded-md bg-[#FAF7F2]/95 backdrop-blur-md text-forest-800 border border-[#E5DFD5] shadow-sm flex items-center gap-1">
              <Clock className="w-2.5 h-2.5 text-forest-600" />
              ~{englishDurationMinutes}m
            </span>
          </div>

          {/* Language Badge */}
          <div className="absolute bottom-2 left-2 z-10 pointer-events-none">
            <span className="px-2 py-0.5 text-[9px] font-bold rounded-md bg-forest-900/90 backdrop-blur-md text-white border border-forest-700 shadow-sm flex items-center gap-1">
              <span>EN</span>
              <span className="text-gold-400">•</span>
              <span className="text-gold-300 font-sans">
                {hasTelugu ? 'తెలుగు' : 'Soon'}
              </span>
            </span>
          </div>

          {/* Bookmark */}
          <button
            onClick={handleToggleSave}
            disabled={isSaving || authLoading}
            aria-label={
              isSaved
                ? `Remove ${book.title} from library`
                : `Save ${book.title} to library`
            }
            title={
              !user
                ? 'Sign in to save this book'
                : isSaved
                  ? 'Remove from Library'
                  : 'Save to Library'
            }
            className={`absolute top-2 right-2 p-2 rounded-full backdrop-blur-md z-20 transition-all shadow-sm ${
              isSaved
                ? 'bg-gold-500 text-white shadow-md scale-105'
                : 'bg-white/90 text-charcoal-700 hover:text-forest-800 hover:bg-white hover:scale-105'
            }`}
          >
            <Bookmark
              className={`w-3.5 h-3.5 ${
                isSaved ? 'fill-current' : ''
              }`}
            />
          </button>

          {/* Play Overlay */}
          <div className="absolute inset-0 bg-forest-950/30 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <button
              onClick={handlePlayClick}
              aria-label={
                isCurrentPlaying
                  ? `Pause ${book.title}`
                  : `Listen to ${book.title}`
              }
              className="p-3.5 sm:p-4 bg-forest-700 hover:bg-forest-600 text-white rounded-full shadow-2xl scale-95 group-hover:scale-105 transition-all active:scale-95"
            >
              {isCurrentPlaying ? (
                <Pause className="w-5 h-5 fill-current" />
              ) : (
                <Play className="w-5 h-5 fill-current ml-0.5" />
              )}
            </button>
          </div>

          {/* Listening Progress Bar */}
          {progressPercent > 0 && !isCompleted && (
            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-black/30">
              <div
                className="h-full bg-forest-600 transition-all duration-300"
                style={{
                  width: `${Math.min(100, progressPercent)}%`,
                }}
              />
            </div>
          )}
        </div>

        {/* Book Details */}
        <div className="space-y-1.5 flex-1 flex flex-col justify-start">
          <div className="flex items-center justify-between text-[11px] text-sage-700 font-medium">
            <span className="font-semibold truncate max-w-[70%]" title={book.genre}>
              {book.genre}
            </span>

            <div className="flex items-center gap-1 text-gold-600 flex-shrink-0 font-semibold">
              <Star className="w-3 h-3 fill-current text-gold-500" />
              <span>{book.rating.toFixed(1)}</span>
            </div>
          </div>

          <Link
            href={`/books/${book.slug}`}
            className="block focus-visible:outline-none focus-visible:underline"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-sm sm:text-base font-bold text-charcoal-900 group-hover:text-forest-700 transition-colors line-clamp-2 font-serif leading-snug">
              {book.title}
            </h3>
          </Link>

          <p className="text-xs text-charcoal-600 line-clamp-1">
            {book.author}
          </p>

          {progressPercent > 0 && (
            <p className="text-[11px] text-forest-700 font-semibold pt-0.5 flex items-center gap-1">
              <span>
                {isCompleted
                  ? '✓ Completed'
                  : `${progressPercent}% listened`}
              </span>
            </p>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-3.5 pt-3 border-t border-[#EAE3D6] flex items-center justify-between">
        <Link
          href={`/books/${book.slug}`}
          onClick={(e) => e.stopPropagation()}
          className="text-xs font-semibold text-charcoal-600 group-hover:text-forest-700 flex items-center gap-1 transition-colors"
        >
          <span>Summary</span>
          <ArrowRight className="w-3 h-3" />
        </Link>

        <button
          onClick={handlePlayClick}
          aria-label={
            isCurrentPlaying
              ? `Pause ${book.title}`
              : isCompleted
                ? `Replay ${book.title}`
                : progressPercent > 0
                  ? `Resume ${book.title}`
                  : `Listen to ${book.title}`
          }
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
            isCurrentPlaying
              ? 'bg-forest-700 text-white shadow-sm font-bold'
              : 'bg-[#F4EFE6] hover:bg-forest-700 hover:text-white text-forest-800 border border-[#E2DCD0]'
          }`}
        >
          {isCurrentPlaying ? (
            <>
              <Pause className="w-3 h-3 fill-current" />
              Playing
            </>
          ) : progressPercent > 0 && !isCompleted ? (
            <>
              <Play className="w-3 h-3 fill-current ml-0.5" />
              Resume
            </>
          ) : isCompleted ? (
            <>
              <Play className="w-3 h-3 fill-current ml-0.5" />
              Replay
            </>
          ) : (
            <>
              <Play className="w-3 h-3 fill-current ml-0.5" />
              Listen
            </>
          )}
        </button>
      </div>
    </div>
  );
};
