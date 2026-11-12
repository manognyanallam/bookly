import { Book, LibraryItem, ListeningProgress } from '@/types/book';
import { INITIAL_BOOKS } from './booksData';
import { BOOK_DETAILS_DATA } from './bookDetailsData';

const BOOKS_STORAGE_KEY = 'bookly_custom_books_v1';
const LIBRARY_STORAGE_KEY = 'bookly_user_library_v1';
const PROGRESS_STORAGE_KEY = 'bookly_user_progress_v1';

const TELUGU_AUDIO_BOOK_IDS = new Set([
  'atomic-habits',
  'deep-work',
  'psychology-of-money',
  'the-alchemist',
  'sapiens',
  'thinking-fast-and-slow',
  'zero-to-one',
  'the-7-habits',
  'rich-dad-poor-dad',
  'the-48-laws-of-power',
  'how-to-win-friends-and-influence-people',
  'the-laws-of-human-nature',
  'never-split-the-difference',
  'the-richest-man-in-babylon',
  'think-and-grow-rich',
  'emotional-intelligence',
  'the-intelligent-investor',
  'lets-talk-money',
  'the-almanack-of-naval-ravikant',
]);

export function enrichBook(b: Book): Book {
  const enrichment = BOOK_DETAILS_DATA[b.slug] || BOOK_DETAILS_DATA[b.id];
  const teluguAudioUrl =
    enrichment?.teluguAudioUrl ||
    (TELUGU_AUDIO_BOOK_IDS.has(b.id) ? `/audio/te/${b.slug}.mp3` : undefined);
  const hasTe = Boolean(teluguAudioUrl);
  return {
    ...b,
    extendedDescription: enrichment?.extendedDescription || b.extendedDescription,
    summary: {
      ...b.summary,
      collegeLessons: enrichment?.collegeLessons || b.summary.collegeLessons,
    },
    audio: {
      ...b.audio,
      audioUrls: {
        en: b.audio.audioUrl || `/audio/${b.slug}.mp3`,
        ...(teluguAudioUrl ? { te: teluguAudioUrl } : {}),
      },
      durations: {
        en: b.audio.duration,
        ...(enrichment?.teluguDuration ? { te: enrichment.teluguDuration } : {}),
      },
      chaptersByLanguage: {
        en: b.audio.chapters,
        ...(enrichment?.teluguChapters ? { te: enrichment.teluguChapters } : {}),
      },
      hasAudioByLanguage: {
        en: b.audio.hasAudio ?? true,
        te: hasTe,
      },
    },
  };
}

export function getStoredBooks(): Book[] {
  if (typeof window === 'undefined') return INITIAL_BOOKS.map(enrichBook);
  try {
    const custom = localStorage.getItem(BOOKS_STORAGE_KEY);
    if (!custom) return INITIAL_BOOKS.map(enrichBook);
    const parsed: Book[] = JSON.parse(custom);
    // Merge custom added books with initial seeds avoiding duplicates
    const combinedMap = new Map<string, Book>();
    INITIAL_BOOKS.forEach((b) => combinedMap.set(b.id, b));
    parsed.forEach((b) => {
      const initial = combinedMap.get(b.id);
      if (initial) {
        // Keep genuine published cover from initial seed data
        combinedMap.set(b.id, { ...b, coverImage: initial.coverImage });
      } else {
        combinedMap.set(b.id, b);
      }
    });
    return Array.from(combinedMap.values()).map(enrichBook);
  } catch (e) {
    console.error('Failed to parse stored books:', e);
    return INITIAL_BOOKS.map(enrichBook);
  }
}

export function saveCustomBook(book: Book): Book[] {
  if (typeof window === 'undefined') return INITIAL_BOOKS;
  const current = getStoredBooks();
  const index = current.findIndex((b) => b.id === book.id);
  if (index >= 0) {
    current[index] = { ...current[index], ...book, updatedAt: new Date().toISOString() };
  } else {
    current.unshift(book);
  }
  localStorage.setItem(BOOKS_STORAGE_KEY, JSON.stringify(current));
  return current;
}

export function deleteStoredBook(bookId: string): Book[] {
  if (typeof window === 'undefined') return INITIAL_BOOKS;
  const current = getStoredBooks().filter((b) => b.id !== bookId);
  localStorage.setItem(BOOKS_STORAGE_KEY, JSON.stringify(current));
  return current;
}

export function getUserLibrary(): LibraryItem[] {
  if (typeof window === 'undefined') return [];
  try {
    const data = localStorage.getItem(LIBRARY_STORAGE_KEY);
    if (!data) return [];
    const items: LibraryItem[] = JSON.parse(data);
    // Explicit user bookmarks only
    return Array.isArray(items) ? items.filter((item) => item && item.status === 'saved') : [];
  } catch (e) {
    console.error('Failed to parse user library:', e);
    return [];
  }
}

export function isBookSaved(bookId: string): boolean {
  if (typeof window === 'undefined') return false;
  return getUserLibrary().some((i) => i.bookId === bookId);
}

export function saveUserLibraryItem(item: LibraryItem): LibraryItem[] {
  if (typeof window === 'undefined') return [];
  try {
    const current = getUserLibrary();
    const existingIndex = current.findIndex((i) => i.bookId === item.bookId);
    const savedItem: LibraryItem = { ...item, status: 'saved' };
    if (existingIndex >= 0) {
      current[existingIndex] = { ...current[existingIndex], ...savedItem };
    } else {
      current.unshift(savedItem);
    }
    localStorage.setItem(LIBRARY_STORAGE_KEY, JSON.stringify(current));
    window.dispatchEvent(new CustomEvent('bookly-library-change', { detail: { bookId: item.bookId, action: 'save' } }));
    return current;
  } catch (e) {
    console.error('Failed to save library item:', e);
    return [];
  }
}

export function removeUserLibraryItem(bookId: string): LibraryItem[] {
  if (typeof window === 'undefined') return [];
  try {
    const current = getUserLibrary().filter((i) => i.bookId !== bookId);
    localStorage.setItem(LIBRARY_STORAGE_KEY, JSON.stringify(current));
    window.dispatchEvent(new CustomEvent('bookly-library-change', { detail: { bookId, action: 'remove' } }));
    return current;
  } catch (e) {
    console.error('Failed to remove library item:', e);
    return [];
  }
}

export function getUserProgressMap(): Record<string, ListeningProgress> {
  if (typeof window === 'undefined') return {};
  try {
    const data = localStorage.getItem(PROGRESS_STORAGE_KEY);
    return data ? JSON.parse(data) : {};
  } catch (e) {
    console.error('Failed to parse progress map:', e);
    return {};
  }
}

export function getBookProgress(bookId: string, language?: 'en' | 'te'): ListeningProgress | undefined {
  if (typeof window === 'undefined') return undefined;
  const current = getUserProgressMap();
  if (language && current[`${bookId}:${language}`]) {
    return current[`${bookId}:${language}`];
  }
  return current[bookId];
}

export function saveUserProgress(progress: ListeningProgress): Record<string, ListeningProgress> {
  if (typeof window === 'undefined') return {};
  try {
    const current = getUserProgressMap();
    current[progress.bookId] = progress;
    if (progress.language) {
      current[`${progress.bookId}:${progress.language}`] = progress;
    }
    localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(current));
    window.dispatchEvent(new CustomEvent('bookly-progress-change', { detail: progress }));
    return current;
  } catch (e) {
    console.error('Failed to save user progress:', e);
    return {};
  }
}
