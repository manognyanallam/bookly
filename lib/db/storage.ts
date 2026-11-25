
import { Book } from '@/types/book';
import { INITIAL_BOOKS } from './booksData';
import { BOOK_DETAILS_DATA } from './bookDetailsData';

const BOOKS_STORAGE_KEY = 'bookly_custom_books_v1';

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

    const combinedMap = new Map<string, Book>();

    INITIAL_BOOKS.forEach((b) => combinedMap.set(b.id, b));

    parsed.forEach((b) => {
      const initial = combinedMap.get(b.id);

      if (initial) {
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
    current[index] = {
      ...current[index],
      ...book,
      updatedAt: new Date().toISOString(),
    };
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
