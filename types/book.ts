export type BookCategory = 'nonfiction' | 'fiction';

export interface AudioChapter {
  id: string;
  title: string;
  timestamp: number; // in seconds
  duration: number; // chapter length in seconds
}

export interface QuickLearn {
  biggestIdeas: string[];
  keyLessons: string[];
  whoShouldListen: string;
  mainTopics: string[];
}

export type AudioLanguage = 'en' | 'te';

export interface CollegeLesson {
  title: string;
  takeaway: string;
  studentContext: string;
}

export interface BookSummary {
  id: string;
  bookId: string;
  quickLearn: QuickLearn;
  keyTakeaway: string; // "IF YOU REMEMBER ONLY ONE THING..."
  fullText: {
    introduction: string;
    coreIdea: string;
    majorConcepts: { title: string; content: string }[];
    examples: string[];
    practicalApplications: string[];
    keyLessonsSummary: string[];
    finalTakeaway: string;
  };
  collegeLessons?: CollegeLesson[];
  isSpoiler?: boolean; // For fiction summaries
}

export interface BookAudio {
  id: string;
  bookId: string;
  audioUrl: string; // Static URL e.g. /audio/atomic-habits.mp3 (Default English)
  duration: number; // Total seconds, e.g. 900 (15 min)
  chapters: AudioChapter[];
  hasAudio: boolean; // false if audio coming soon
  // Bilingual audio support
  audioUrls?: {
    en?: string;
    te?: string;
  };
  durations?: {
    en?: number;
    te?: number;
  };
  chaptersByLanguage?: {
    en?: AudioChapter[];
    te?: AudioChapter[];
  };
  hasAudioByLanguage?: {
    en?: boolean;
    te?: boolean;
  };
}

export interface Book {
  id: string;
  slug: string;
  title: string;
  author: string;
  description: string;
  extendedDescription?: string;
  coverImage: string;
  genre: string;
  subgenre?: string;
  category: BookCategory;
  publishedYear?: number;
  rating: number; // 1-5
  popularityScore: number; // For trending/popular sorting
  estimatedDurationMinutes: number; // ~15 min
  audio: BookAudio;
  summary: BookSummary;
  createdAt: string;
  updatedAt: string;
}

export interface ListeningProgress {
  userId: string;
  bookId: string;
  language?: AudioLanguage;
  positionSeconds: number;
  durationSeconds: number;
  progressPercentage: number;
  completed: boolean;
  lastPlayedAt: string;
}

export interface LibraryItem {
  bookId: string;
  savedAt: string;
  status: 'listening' | 'saved' | 'completed';
  progress?: ListeningProgress;
}

export interface Genre {
  id: string;
  name: string;
  slug: string;
  category: BookCategory;
  description: string;
  iconName: string;
  bookCount: number;
}
