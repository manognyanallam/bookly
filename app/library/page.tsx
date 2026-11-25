'use client';

'use client';

import React, { useState, useEffect, Suspense, useMemo } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { BookCard } from '@/components/books/BookCard';
import { getStoredBooks } from '@/lib/db/storage';
import {
  getUserLibrary,
  getUserProgressMap,
} from '@/lib/db/userData';
import { useAuth } from '@/components/auth/AuthProvider';
import { Book, LibraryItem, ListeningProgress } from '@/types/book';
import {
  Bookmark,
  CheckCircle2,
  Clock,
  Award,
  Headphones,
  Compass,
} from 'lucide-react';
import Link from 'next/link';
import { BooklyWatermark } from '@/components/layout/BooklyWatermark';


function LibraryContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { user, loading: authLoading } = useAuth();

  const tabParam = searchParams.get('tab') as
    | 'saved'
    | 'listening'
    | 'completed'
    | null;

  const [books, setBooks] = useState<Book[]>([]);
  const [library, setLibrary] = useState<LibraryItem[]>([]);
  const [progressMap, setProgressMap] = useState<
    Record<string, ListeningProgress>
  >({});

  const [activeTab, setActiveTab] = useState<
    'saved' | 'listening' | 'completed'
  >(() => {
    if (
      tabParam === 'listening' ||
      tabParam === 'completed'
    ) {
      return tabParam;
    }

    return 'saved';
  });

  const handleTabChange = (
    tab: 'saved' | 'listening' | 'completed'
  ) => {
    setActiveTab(tab);

    if (tab === 'listening') {
      router.replace('/library?tab=listening', {
        scroll: false,
      });
    } else if (tab === 'completed') {
      router.replace('/library?tab=completed', {
        scroll: false,
      });
    } else {
      router.replace('/library', {
        scroll: false,
      });
    }
  };

  // Load the shared book catalogue and the current user's
  // personal library and listening progress from Supabase.
  useEffect(() => {
    if (authLoading) return;

    let active = true;

    const refreshData = async () => {
      setBooks(getStoredBooks());

      if (!user?.id) {
        if (active) {
          setLibrary([]);
          setProgressMap({});
        }
        return;
      }

      try {
        const [libraryData, progressData] = await Promise.all([
          getUserLibrary(user.id),
          getUserProgressMap(user.id),
        ]);

        if (!active) return;

        setLibrary(libraryData);
        setProgressMap(progressData);
      } catch (error) {
        console.error('Failed to load library data:', error);
      }
    };

    void refreshData();

    const handleUpdate = () => {
      void refreshData();
    };

    window.addEventListener(
      'bookly-library-change',
      handleUpdate
    );

    window.addEventListener(
      'bookly-progress-change',
      handleUpdate
    );

    window.addEventListener('storage', handleUpdate);

    return () => {
      active = false;

      window.removeEventListener(
        'bookly-library-change',
        handleUpdate
      );

      window.removeEventListener(
        'bookly-progress-change',
        handleUpdate
      );

      window.removeEventListener('storage', handleUpdate);
    };
  }, [user?.id, authLoading]);

  // Keep the URL and selected tab synchronized.
  useEffect(() => {
    if (
      tabParam === 'listening' ||
      tabParam === 'saved' ||
      tabParam === 'completed'
    ) {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  // 1. Saved Books: ONLY books explicitly bookmarked by user
  const savedBooks = useMemo(() => {
    const savedIds = new Set(library.filter((i) => i.status === 'saved').map((i) => i.bookId));
    return books.filter((b) => savedIds.has(b.id));
  }, [books, library]);

  // 2. In Progress: ONLY books genuinely started (>5s) and not completed
  const listeningBooks = useMemo(() => {
    return books
      .map((b) => ({ book: b, progress: progressMap[b.id] }))
      .filter(({ progress }) => progress && !progress.completed && (progress.positionSeconds || 0) > 5)
      .sort((a, b) => new Date(b.progress.lastPlayedAt || 0).getTime() - new Date(a.progress.lastPlayedAt || 0).getTime())
      .map(({ book }) => book);
  }, [books, progressMap]);

  // 3. Completed: ONLY books where audio genuinely finished
  const completedBooks = useMemo(() => {
    return books
      .map((b) => ({ book: b, progress: progressMap[b.id] }))
      .filter(({ progress }) => progress && Boolean(progress.completed))
      .sort((a, b) => new Date(b.progress.lastPlayedAt || 0).getTime() - new Date(a.progress.lastPlayedAt || 0).getTime())
      .map(({ book }) => book);
  }, [books, progressMap]);

  // Total audio listened calculation across verified history
  const totalListeningSeconds = Object.values(progressMap).reduce(
    (acc, curr) => acc + (curr.positionSeconds || 0),
    0
  );
  const totalMinutesListened = Math.round(totalListeningSeconds / 60);

  const activeBooks =
    activeTab === 'saved'
      ? savedBooks
      : activeTab === 'listening'
      ? listeningBooks
      : completedBooks;

  return (
    <div className="relative overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-8">
      {/* Faded Bookly Butterfly Watermark */}
      <BooklyWatermark position="top-right" size={440} opacity={0.05} />

      {/* Title Header */}
      <div className="relative z-10 space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-50 border border-forest-200 text-forest-800 text-xs font-semibold">
          <Bookmark className="w-3.5 h-3.5 fill-current text-gold-500" /> PERSONAL AUDIO LIBRARY
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-charcoal-900 font-serif tracking-tight">
          My Library
        </h1>
        <p className="text-sm text-charcoal-600 max-w-xl">
          Your bookmarked titles, active listening sessions, and completed audio summaries in English and Telugu.
        </p>
      </div>

      {!authLoading && !user && (
        <div
          role="status"
          className="relative z-10 flex flex-col gap-3 rounded-2xl border border-forest-200 bg-forest-50 p-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-sm text-forest-900">
            Sign in to view your saved books and listening progress. You can
            browse and listen to the catalogue as a guest.
          </p>
          <div className="flex shrink-0 gap-2">
            <Link
              href="/login"
              className="rounded-full border border-forest-700 px-4 py-2 text-sm font-semibold text-forest-800"
            >
              Sign in
            </Link>
            <Link
              href="/signup"
              className="rounded-full bg-forest-700 px-4 py-2 text-sm font-semibold text-white"
            >
              Sign up
            </Link>
          </div>
        </div>
      )}

      {/* Listening Stats Banner */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-4 bg-white/95 backdrop-blur-sm border border-[#E5DFD5] rounded-3xl p-5 sm:p-6 shadow-sm">
        <div className="flex items-center gap-4 p-4 bg-[#FAF7F2] rounded-2xl border border-[#E5DFD5]">
          <div className="p-3 rounded-xl bg-forest-50 text-forest-700 border border-forest-200">
            <Bookmark className="w-6 h-6" />
          </div>
          <div>
            <span className="text-2xl font-black text-charcoal-900 font-mono">{savedBooks.length}</span>
            <p className="text-xs text-charcoal-500">Saved Books</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-4 bg-[#FAF7F2] rounded-2xl border border-[#E5DFD5]">
          <div className="p-3 rounded-xl bg-forest-50 text-forest-700 border border-forest-200">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <span className="text-2xl font-black text-charcoal-900 font-mono">
              {totalMinutesListened > 60 ? `${(totalMinutesListened / 60).toFixed(1)} hrs` : `${totalMinutesListened} mins`}
            </span>
            <p className="text-xs text-charcoal-500">Total Audio Listened</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-4 bg-[#FAF7F2] rounded-2xl border border-[#E5DFD5]">
          <div className="p-3 rounded-xl bg-gold-50 text-gold-600 border border-gold-200">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <span className="text-2xl font-black text-charcoal-900 font-mono">{completedBooks.length}</span>
            <p className="text-xs text-charcoal-500">Books Completed</p>
          </div>
        </div>
      </div>

      {/* Distinct Library Filter Tabs */}
      <div className="relative z-10 flex flex-wrap items-center gap-2 border-b border-[#E5DFD5] pb-3">
        <button
          onClick={() => handleTabChange('saved')}
          className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
            activeTab === 'saved'
              ? 'bg-forest-700 text-white shadow-sm font-extrabold'
              : 'bg-[#F4EFE6] text-charcoal-700 hover:bg-[#EAE2D3] border border-[#E2DCD0]'
          }`}
        >
          <Bookmark className="w-3.5 h-3.5" /> Saved Books ({savedBooks.length})
        </button>

        <button
          onClick={() => handleTabChange('listening')}
          className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
            activeTab === 'listening'
              ? 'bg-forest-700 text-white shadow-sm font-extrabold'
              : 'bg-[#F4EFE6] text-charcoal-700 hover:bg-[#EAE2D3] border border-[#E2DCD0]'
          }`}
        >
          <Headphones className="w-3.5 h-3.5" /> In Progress ({listeningBooks.length})
        </button>

        <button
          onClick={() => handleTabChange('completed')}
          className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
            activeTab === 'completed'
              ? 'bg-forest-700 text-white shadow-sm font-extrabold'
              : 'bg-[#F4EFE6] text-charcoal-700 hover:bg-[#EAE2D3] border border-[#E2DCD0]'
          }`}
        >
          <CheckCircle2 className="w-3.5 h-3.5" /> Completed ({completedBooks.length})
        </button>
      </div>

      {/* Tab Content Display */}
      <div className="relative z-10">
        {activeBooks.length === 0 ? (
          <div className="text-center py-16 px-4 bg-white/95 backdrop-blur-sm rounded-3xl border border-[#E5DFD5] space-y-4 max-w-lg mx-auto shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-[#F4EFE6] text-forest-700 flex items-center justify-center mx-auto">
              {activeTab === 'saved' ? (
                <Bookmark className="w-7 h-7 text-forest-700" />
              ) : activeTab === 'listening' ? (
                <Headphones className="w-7 h-7 text-forest-700" />
              ) : (
                <Award className="w-7 h-7 text-gold-500" />
              )}
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-charcoal-900 font-serif">
                {activeTab === 'saved'
                  ? 'Your Library is Empty'
                  : activeTab === 'listening'
                  ? 'No Books In Progress'
                  : 'No Completed Summaries Yet'}
              </h3>
              <p className="text-xs text-charcoal-500 max-w-sm mx-auto leading-relaxed">
                {activeTab === 'saved'
                  ? 'You haven’t saved any book summaries yet. Tap the bookmark icon on any book card to build your personal library.'
                  : activeTab === 'listening'
                  ? 'Start listening to any audio summary to pick up right where you left off.'
                  : 'Finish listening to any ~15-minute educational summary in English or Telugu to track your completed milestones here.'}
              </p>
            </div>
            <Link
              href="/discover"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-forest-700 text-white font-bold text-xs hover:bg-forest-800 transition-colors shadow-sm"
            >
              <Compass className="w-4 h-4 text-gold-300" /> Browse Books
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-stretch">
            {activeBooks.map((book) => (
              <div key={`lib-${book.id}`} className="relative group h-full">
                <BookCard book={book} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function LibraryPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto px-4 py-20 text-center text-charcoal-500">
          <div className="inline-block w-8 h-8 border-2 border-forest-700 border-t-transparent rounded-full animate-spin mb-4" />
          <p className="text-sm">Loading your library...</p>
        </div>
      }
    >
      <LibraryContent />
    </Suspense>
  );
}
