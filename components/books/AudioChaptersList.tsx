'use client';

import React from 'react';
import { BookAudio, AudioChapter, Book, AudioLanguage } from '@/types/book';
import { useAudioPlayer } from '../player/AudioPlayerContext';
import { List, Play, Clock, Sparkles } from 'lucide-react';

interface AudioChaptersListProps {
  audio: BookAudio;
  book?: Book;
  chapters?: AudioChapter[];
  language?: AudioLanguage;
}

export const AudioChaptersList: React.FC<AudioChaptersListProps> = ({
  audio,
  book,
  chapters,
  language = 'en',
}) => {
  const { currentTime, seekToChapter, isPlaying, currentBook, currentLanguage, playBook, resume } =
    useAudioPlayer();

  const chaptersToRender =
    chapters ||
    (language === 'te'
      ? audio.chaptersByLanguage?.te || []
      : audio.chaptersByLanguage?.en || audio.chapters || []);

  if (!chaptersToRender || chaptersToRender.length === 0) {
    return (
      <div className="bg-white border border-[#E5DFD5] rounded-3xl p-8 text-center text-charcoal-700 space-y-2">
        <p className="text-sm font-semibold">
          {language === 'te'
            ? 'ఈ పుస్తకానికి తెలుగు ఆడియో అధ్యాయాలు త్వరలో రానున్నాయి.'
            : 'Audio chapters are being prepared for this title.'}
        </p>
      </div>
    );
  }

  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs < 0) return '00:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleChapterClick = (chapter: AudioChapter) => {
    if (book && (currentBook?.id !== book.id || currentLanguage !== language)) {
      playBook(book, chapter.timestamp, language);
    } else {
      seekToChapter(chapter);
      if (!isPlaying) {
        resume();
      }
    }
  };

  return (
    <div className="bg-white border border-[#E5DFD5] rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
      <div className="flex items-center justify-between border-b border-[#EAE3D6] pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-forest-50 text-forest-700 border border-forest-200">
            <List className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold font-serif text-charcoal-900">
              {language === 'te' ? 'ఆడియో అధ్యాయాలు (AUDIO CHAPTERS)' : 'Audio Chapters'}
            </h2>
            <p className="text-xs text-charcoal-500">
              {language === 'te'
                ? 'ఏ అధ్యాయం టైమ్‌స్టాంప్‌నైనా క్లిక్ చేసి వెంటనే వినండి'
                : 'Click any chapter timestamp to seek instantly'}
            </p>
          </div>
        </div>

        <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-[#FAF7F2] border border-[#E5DFD5] text-forest-800">
          {chaptersToRender.length} {language === 'te' ? 'అధ్యాయాలు' : 'Chapters'}
        </span>
      </div>

      <div className="space-y-2.5">
        {chaptersToRender.map((chapter, idx) => {
          const isCurrentBookActive = currentBook?.id === audio.bookId && currentLanguage === language;
          const isActiveChapter =
            isCurrentBookActive &&
            currentTime >= chapter.timestamp &&
            (idx === chaptersToRender.length - 1 || currentTime < chaptersToRender[idx + 1].timestamp);

          return (
            <div
              key={chapter.id || `ch-${idx}`}
              onClick={() => handleChapterClick(chapter)}
              className={`p-3.5 sm:p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between gap-4 group ${
                isActiveChapter
                  ? 'bg-forest-50/80 border-forest-600 shadow-sm ring-1 ring-forest-600/30'
                  : 'bg-[#FAF7F2] hover:bg-white border-[#E2DCD0] text-charcoal-700'
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105 ${
                    isActiveChapter
                      ? 'bg-forest-700 text-white font-bold'
                      : 'bg-white text-charcoal-500 group-hover:bg-forest-700 group-hover:text-white border border-[#E5DFD5]'
                  }`}
                >
                  {isActiveChapter && isPlaying ? (
                    <span className="flex items-center gap-0.5 h-3">
                      <span className="w-1 h-3 bg-white rounded-full animate-bounce" />
                      <span className="w-1 h-2 bg-white rounded-full animate-bounce [animation-delay:0.15s]" />
                      <span className="w-1 h-3 bg-white rounded-full animate-bounce [animation-delay:0.3s]" />
                    </span>
                  ) : (
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  )}
                </div>

                <div className="min-w-0">
                  <p
                    className={`text-xs sm:text-sm font-semibold truncate ${
                      isActiveChapter ? 'text-forest-900 font-bold' : 'text-charcoal-900'
                    }`}
                  >
                    {chapter.title}
                  </p>
                  <p className="text-[11px] text-charcoal-500 font-mono">
                    Starts at {formatTime(chapter.timestamp)} • Length: {formatTime(chapter.duration)}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="text-xs font-mono font-medium text-charcoal-600 px-2 py-1 rounded bg-white border border-[#E5DFD5]">
                  {formatTime(chapter.timestamp)}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
