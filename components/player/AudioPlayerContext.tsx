'use client';

import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { Book, AudioChapter, ListeningProgress, AudioLanguage } from '@/types/book';
import { staticAudioProvider } from '@/lib/audio/AudioProvider';
import { getStoredBooks } from '@/lib/db/storage';
import { getBookProgress, saveUserProgress } from '@/lib/db/userData';
import { useAuth } from '@/components/auth/AuthProvider';

interface AudioContextType {
  currentBook: Book | null;
  currentLanguage: AudioLanguage;
  isPlaying: boolean;
  isLoading: boolean;
  playbackError: string | null;
  currentTime: number;
  duration: number;
  playbackSpeed: number;
  volume: number;
  isMuted: boolean;
  isFullPlayerOpen: boolean;
  hasAudio: boolean;
  activeChapters: AudioChapter[];
  setLanguage: (lang: AudioLanguage) => void;
  playBook: (book: Book, initialPosition?: number, lang?: AudioLanguage) => void;
  togglePlay: () => void;
  pause: () => void;
  resume: () => void;
  seek: (seconds: number) => void;
  skip: (seconds: number) => void;
  setSpeed: (speed: number) => void;
  setVolumeLevel: (volume: number) => void;
  toggleMute: () => void;
  seekToChapter: (chapter: AudioChapter) => void;
  playNextBook: () => void;
  playPrevBook: () => void;
  openFullPlayer: () => void;
  closeFullPlayer: () => void;
  closeMiniPlayer: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioPlayerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentBook, setCurrentBook] = useState<Book | null>(null);
  const [currentLanguage, setCurrentLanguage] = useState<AudioLanguage>('en');
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [playbackError, setPlaybackError] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1.0);
  const [volume, setVolume] = useState<number>(1.0);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isFullPlayerOpen, setIsFullPlayerOpen] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const currentBookRef = useRef<Book | null>(null);
  const currentLanguageRef = useRef<AudioLanguage>('en');
  const durationRef = useRef<number>(0);

  const { user, loading: authLoading } = useAuth();

const userIdRef = useRef<string | null>(null);
const playbackRequestRef = useRef(0);

useEffect(() => {
  userIdRef.current = authLoading ? null : user?.id ?? null;
}, [user?.id, authLoading]);

  useEffect(() => {
    currentBookRef.current = currentBook;
  }, [currentBook]);

  useEffect(() => {
    currentLanguageRef.current = currentLanguage;
  }, [currentLanguage]);

  useEffect(() => {
    durationRef.current = duration;
  }, [duration]);

  // Helper to determine active audio URL for the given book & language
  const getLanguageAudioUrl = (book: Book | null, lang: AudioLanguage): string | null => {
    if (!book || !book.audio) return null;
    if (lang === 'te') {
      if (book.audio.audioUrls?.te && (book.audio.hasAudioByLanguage?.te ?? true)) {
        return book.audio.audioUrls.te;
      }
      return null;
    }
    // English
    if (book.audio.audioUrls?.en) return book.audio.audioUrls.en;
    if (book.audio.hasAudio && book.audio.audioUrl) return book.audio.audioUrl;
    return null;
  };

  const hasAudio = Boolean(
    currentBook && getLanguageAudioUrl(currentBook, currentLanguage) !== null
  );

  const activeChapters: AudioChapter[] = React.useMemo(() => {
    if (!currentBook || !currentBook.audio) return [];
    if (currentLanguage === 'te') {
      return currentBook.audio.chaptersByLanguage?.te || [];
    }
    return currentBook.audio.chaptersByLanguage?.en || currentBook.audio.chapters || [];
  }, [currentBook, currentLanguage]);

  // Initialize HTML5 audio element
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const audio = new Audio();
    audio.preload = 'metadata';
    audioRef.current = audio;

    const handleTimeUpdate = () => {
      if (audioRef.current) {
        setCurrentTime(audioRef.current.currentTime);
      }
    };

    const handleLoadedMetadata = () => {
      if (audioRef.current && !isNaN(audioRef.current.duration) && audioRef.current.duration > 0) {
        setDuration(Math.round(audioRef.current.duration));
      }
    };

    const handleLoadStart = () => {
      setIsLoading(true);
      setPlaybackError(null);
    };

    const handleCanPlay = () => {
      setIsLoading(false);
    };

    const handlePlaying = () => {
      setIsLoading(false);
      setIsPlaying(true);
      setPlaybackError(null);
    };

    const handlePause = () => {
      setIsPlaying(false);
      const b = currentBookRef.current;
      if (b && audioRef.current) {
        saveProgress(b, audioRef.current.currentTime);
      }
    };

    const handleWaiting = () => {
      setIsLoading(true);
    };

    const handleError = () => {
      setIsLoading(false);
      setIsPlaying(false);
      setPlaybackError('Audio file could not be loaded. Please check network connection.');
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setIsLoading(false);
      const b = currentBookRef.current;
      if (b && audioRef.current) {
        saveProgress(b, audioRef.current.currentTime, true);
      }
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('loadstart', handleLoadStart);
    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('playing', handlePlaying);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('waiting', handleWaiting);
    audio.addEventListener('error', handleError);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('loadstart', handleLoadStart);
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('playing', handlePlaying);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('waiting', handleWaiting);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('ended', handleEnded);
      audio.pause();
    };
  }, []);

  // Save progress every 15 seconds while playing
useEffect(() => {
  if (!isPlaying || !currentBook || !audioRef.current) return;

  const interval = setInterval(() => {
    if (audioRef.current && !audioRef.current.paused) {
      saveProgress(currentBook, audioRef.current.currentTime);
    }
  }, 15000);

  return () => clearInterval(interval);
}, [isPlaying, currentBook, duration, currentLanguage]);


  const saveProgress = (
  book: Book,
  time: number,
  isFinished = false
) => {
  const userId = userIdRef.current;

  // Guests can listen, but their progress is not saved.
  if (!userId) return;

  const lang = currentLanguageRef.current;

  const totalDuration =
    durationRef.current ||
    (lang === 'te'
      ? book.audio.durations?.te
      : book.audio.durations?.en) ||
    book.audio.duration ||
    900;

  const progressPercentage = Math.min(
    100,
    Math.round((time / totalDuration) * 100)
  );

  const completed =
    isFinished || (totalDuration > 0 && time >= totalDuration - 2);

  const progress: ListeningProgress = {
    userId,
    bookId: book.id,
    language: lang,
    positionSeconds: Math.floor(time),
    durationSeconds: Math.floor(totalDuration),
    progressPercentage,
    completed,
    lastPlayedAt: new Date().toISOString(),
  };

  void saveUserProgress(progress);
};

  const setLanguage = async (lang: AudioLanguage) => {
  if (lang === currentLanguageRef.current) return;

  const book = currentBookRef.current;
  if (!book) {
    currentLanguageRef.current = lang;
    setCurrentLanguage(lang);
    return;
  }

  const audio = audioRef.current;
  if (!audio) return;

  const requestId = ++playbackRequestRef.current;
  const wasPlaying = !audio.paused;

  // Save the previous language's progress.
  if (audio.currentTime > 0) {
    saveProgress(book, audio.currentTime);
  }

  currentLanguageRef.current = lang;
  setCurrentLanguage(lang);

  const targetUrl = getLanguageAudioUrl(book, lang);

  if (!targetUrl) {
    audio.pause();
    setIsPlaying(false);
    audio.src = '';
    setCurrentTime(0);
    setPlaybackError(
      lang === 'te' ? 'Telugu audio coming soon' : 'Audio coming soon'
    );
    return;
  }

  let startTime = 0;
  const userId = userIdRef.current;

  if (userId) {
    const saved = await getBookProgress(userId, book.id, lang);

    if (requestId !== playbackRequestRef.current) return;

    if (saved && !saved.completed && saved.positionSeconds > 5) {
      startTime = saved.positionSeconds;
    }
  }

  if (requestId !== playbackRequestRef.current) return;

  const targetDuration =
    (lang === 'te'
      ? book.audio.durations?.te
      : book.audio.durations?.en) ||
    book.audio.duration ||
    900;

  setDuration(targetDuration);
  durationRef.current = targetDuration;

  audio.src = targetUrl;
  audio.playbackRate = playbackSpeed;
  audio.volume = isMuted ? 0 : volume;
  audio.currentTime = startTime;

  setCurrentTime(startTime);
  setPlaybackError(null);

  if (wasPlaying) {
    audio.play()
      .then(() => setIsPlaying(true))
      .catch((err) => {
        console.warn('Playback error on language change:', err);
        setIsPlaying(false);
      });
  }
};


  const playBook = async (
  book: Book,
  initialPosition?: number,
  lang?: AudioLanguage
) => {
  const audio = audioRef.current;
  if (!audio) return;

  const targetLang = lang || currentLanguageRef.current;

  // Toggle playback if the same book and language are already loaded.
  if (
    currentBookRef.current?.id === book.id &&
    currentLanguageRef.current === targetLang &&
    getLanguageAudioUrl(book, targetLang)
  ) {
    if (audio.paused) {
      audio.play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.warn('Playback resume failed:', err);
          setIsPlaying(false);
          setPlaybackError('Playback error');
        });
    } else {
      audio.pause();
      setIsPlaying(false);
    }
    return;
  }

  const requestId = ++playbackRequestRef.current;

  currentBookRef.current = book;
  currentLanguageRef.current = targetLang;

  setCurrentBook(book);
  setCurrentLanguage(targetLang);
  setPlaybackError(null);

  const audioUrl = getLanguageAudioUrl(book, targetLang);

  if (!audioUrl) {
    audio.pause();
    setIsPlaying(false);
    audio.src = '';
    setCurrentTime(0);

    const targetDuration =
      (targetLang === 'te'
        ? book.audio.durations?.te
        : book.audio.durations?.en) ||
      book.audio.duration ||
      900;

    setDuration(targetDuration);
    durationRef.current = targetDuration;

    setPlaybackError(
      targetLang === 'te' ? 'Telugu audio coming soon' : 'Audio coming soon'
    );
    return;
  }

  let targetTime = initialPosition;

  // Restore progress only for authenticated users.
  if (targetTime === undefined) {
    const userId = userIdRef.current;

    if (userId) {
      const saved = await getBookProgress(userId, book.id, targetLang);

      if (requestId !== playbackRequestRef.current) return;

      if (saved && !saved.completed && saved.positionSeconds > 5) {
        targetTime = saved.positionSeconds;
      }
    }
  }

  if (requestId !== playbackRequestRef.current) return;

  if (targetTime === undefined) targetTime = 0;

  const targetDuration =
    (targetLang === 'te'
      ? book.audio.durations?.te
      : book.audio.durations?.en) ||
    book.audio.duration ||
    900;

  setDuration(targetDuration);
  durationRef.current = targetDuration;

  audio.src = audioUrl;
  audio.playbackRate = playbackSpeed;
  audio.volume = isMuted ? 0 : volume;
  audio.currentTime = targetTime;

  setCurrentTime(targetTime);

  audio.play()
    .then(() => {
      setIsPlaying(true);
      setPlaybackError(null);
    })
    .catch((err) => {
      console.warn('Audio play error:', err);
      setIsPlaying(false);
    });
};
  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio || !currentBook) return;

    if (!hasAudio) return;

    if (audio.paused) {
      audio.play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.warn('Audio play failed:', err);
          setIsPlaying(false);
        });
    } else {
      audio.pause();
      setIsPlaying(false);
      saveProgress(currentBook, audio.currentTime);
    }
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
      if (currentBook) {
        saveProgress(currentBook, audioRef.current.currentTime);
      }
    }
  };

  const resume = () => {
    if (audioRef.current && hasAudio) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  const seek = (seconds: number) => {
    if (audioRef.current) {
      const safeTime = Math.max(0, Math.min(duration || 9999, seconds));
      audioRef.current.currentTime = safeTime;
      setCurrentTime(safeTime);
      if (currentBook) {
        saveProgress(currentBook, safeTime);
      }
    }
  };

  const skip = (seconds: number) => {
    if (audioRef.current) {
      const newTime = Math.max(0, Math.min(duration, audioRef.current.currentTime + seconds));
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
      if (currentBook) {
        saveProgress(currentBook, newTime);
      }
    }
  };

  const setSpeed = (speed: number) => {
    setPlaybackSpeed(speed);
    if (audioRef.current) {
      audioRef.current.playbackRate = speed;
    }
  };

  const setVolumeLevel = (val: number) => {
    setVolume(val);
    setIsMuted(val === 0);
    if (audioRef.current) {
      audioRef.current.volume = val;
    }
  };

  const toggleMute = () => {
    if (isMuted) {
      setIsMuted(false);
      if (audioRef.current) audioRef.current.volume = volume;
    } else {
      setIsMuted(true);
      if (audioRef.current) audioRef.current.volume = 0;
    }
  };

  const seekToChapter = (chapter: AudioChapter) => {
    seek(chapter.timestamp);
    if (!isPlaying && hasAudio) {
      resume();
    }
  };

  const playNextBook = () => {
    const allBooks = getStoredBooks();
    if (!currentBook || allBooks.length === 0) return;
    const currentIndex = allBooks.findIndex((b) => b.id === currentBook.id);
    const nextIndex = (currentIndex + 1) % allBooks.length;
    playBook(allBooks[nextIndex]);
  };

  const playPrevBook = () => {
    const allBooks = getStoredBooks();
    if (!currentBook || allBooks.length === 0) return;
    const currentIndex = allBooks.findIndex((b) => b.id === currentBook.id);
    const prevIndex = (currentIndex - 1 + allBooks.length) % allBooks.length;
    playBook(allBooks[prevIndex]);
  };

  const openFullPlayer = () => setIsFullPlayerOpen(true);
  const closeFullPlayer = () => setIsFullPlayerOpen(false);
  const closeMiniPlayer = () => {
    pause();
    setCurrentBook(null);
  };

  return (
    <AudioContext.Provider
      value={{
        currentBook,
        currentLanguage,
        isPlaying,
        isLoading,
        playbackError,
        currentTime,
        duration: duration || (currentLanguage === 'te' ? currentBook?.audio.durations?.te : currentBook?.audio.durations?.en) || currentBook?.audio.duration || 900,
        playbackSpeed,
        volume,
        isMuted,
        isFullPlayerOpen,
        hasAudio,
        activeChapters,
        setLanguage,
        playBook,
        togglePlay,
        pause,
        resume,
        seek,
        skip,
        setSpeed,
        setVolumeLevel,
        toggleMute,
        seekToChapter,
        playNextBook,
        playPrevBook,
        openFullPlayer,
        closeFullPlayer,
        closeMiniPlayer,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export const useAudioPlayer = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudioPlayer must be used within an AudioPlayerProvider');
  }
  return context;
};
