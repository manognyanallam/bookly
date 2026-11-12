'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useAudioPlayer } from './AudioPlayerContext';
import {
  Play,
  Pause,
  X,
  Maximize2,
  RotateCcw,
  RotateCw,
  AlertCircle,
  Loader2,
  SkipForward,
  SkipBack,
  Headphones,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const MiniPlayer: React.FC = () => {
  const {
    currentBook,
    currentLanguage,
    setLanguage,
    isPlaying,
    isLoading,
    playbackError,
    currentTime,
    duration,
    hasAudio,
    togglePlay,
    skip,
    openFullPlayer,
    closeMiniPlayer,
    seek,
    playNextBook,
    playPrevBook,
  } = useAudioPlayer();

  const [imageError, setImageError] = useState(false);

  if (!currentBook) return null;

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs < 0) return '00:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 80, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="fixed bottom-16 md:bottom-4 left-3 right-3 md:left-auto md:right-6 md:w-[500px] z-40 bg-white/95 backdrop-blur-md border border-[#E5DFD5] shadow-bookly-lg rounded-2xl p-3 text-charcoal-800"
      >
        {/* Floating "Into Mark" (X Button) to Stop Listening */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            closeMiniPlayer();
          }}
          title="Stop Listening"
          aria-label="Stop listening and close audio player"
          className="absolute -top-3 -right-2.5 z-50 w-7 h-7 rounded-full bg-forest-900 hover:bg-red-600 text-white flex items-center justify-center shadow-md border-2 border-white transition-all hover:scale-110 active:scale-95 cursor-pointer group"
        >
          <X className="w-3.5 h-3.5 stroke-[2.5] group-hover:rotate-90 transition-transform" />
        </button>

        {/* Subtle Butterfly Watermark in Mini Player Background */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none select-none">
          <div className="absolute -bottom-6 -right-6 opacity-[0.06] z-0">
            <Image
              src="/brand/butterfly_watermark.png"
              alt=""
              width={180}
              height={130}
              className="object-contain"
            />
          </div>
        </div>

        {/* Progress bar line at top edge */}
        <div
          role="progressbar"
          aria-valuenow={Math.round(progressPercent)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Audio progress bar"
          className="absolute top-0 left-0 right-0 h-1.5 bg-[#FAF7F2] rounded-t-2xl overflow-hidden cursor-pointer"
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const percentage = clickX / rect.width;
            seek(percentage * duration);
          }}
        >
          <div
            className="h-full bg-forest-600 transition-all duration-150"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div className="relative z-10 flex items-center justify-between gap-3 pt-1">
          {/* Cover & Book Info */}
          <div
            onClick={openFullPlayer}
            className="flex items-center gap-3 cursor-pointer group flex-1 min-w-0"
          >
            <div className="relative w-10 h-14 rounded-lg overflow-hidden flex-shrink-0 border border-[#E2DCD0] shadow-sm bg-[#FAF7F2] flex items-center justify-center">
              {!imageError && currentBook.coverImage ? (
                <Image
                  src={currentBook.coverImage}
                  alt={`Cover of ${currentBook.title} by ${currentBook.author}`}
                  fill
                  sizes="40px"
                  className="object-contain p-0.5 group-hover:scale-105 transition-transform"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-forest-800 text-gold-400">
                  <Headphones className="w-5 h-5" />
                </div>
              )}
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLanguage(currentLanguage === 'en' ? 'te' : 'en');
                  }}
                  className={`text-[10px] font-bold px-1.5 py-0.2 rounded border transition-all ${
                    currentLanguage === 'te'
                      ? 'bg-gold-100 text-gold-900 border-gold-300 font-sans'
                      : 'bg-[#FAF7F2] text-forest-800 border-[#E5DFD5] hover:bg-forest-50'
                  }`}
                  title="Toggle Language"
                >
                  {currentLanguage === 'te' ? 'తెలుగు' : 'EN'}
                </button>
                {playbackError && (
                  <span className="text-[10px] font-medium px-1.5 py-0.2 rounded bg-amber-50 text-amber-800 border border-amber-200 flex items-center gap-1">
                    <AlertCircle className="w-2.5 h-2.5" /> {playbackError}
                  </span>
                )}
                {!hasAudio && !playbackError && (
                  <span className="text-[10px] font-medium px-1.5 py-0.2 rounded bg-amber-50 text-amber-800 border border-amber-200 flex items-center gap-1">
                    <AlertCircle className="w-2.5 h-2.5" /> Coming soon
                  </span>
                )}
              </div>
              <h4 className="text-sm font-bold text-charcoal-900 truncate group-hover:text-forest-700 transition-colors font-serif">
                {currentBook.title}
              </h4>
              <p className="text-[11px] text-charcoal-500 truncate font-mono">
                {currentBook.author} • {formatTime(currentTime)} / {formatTime(duration)}
              </p>
            </div>
          </div>

          {/* Quick Playback Controls */}
          <div className="flex items-center gap-1">
            {hasAudio && (
              <>
                <button
                  onClick={playPrevBook}
                  title="Previous Summary"
                  aria-label="Previous book"
                  className="p-1.5 text-charcoal-600 hover:text-forest-800 hover:bg-[#FAF7F2] rounded-full transition-colors hidden sm:block"
                >
                  <SkipBack className="w-4 h-4" />
                </button>

                <button
                  onClick={() => skip(-10)}
                  title="Rewind 10s"
                  aria-label="Rewind 10 seconds"
                  className="p-1.5 text-charcoal-600 hover:text-forest-800 hover:bg-[#FAF7F2] rounded-full transition-colors hidden sm:block"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                <button
                  onClick={togglePlay}
                  title={isPlaying ? 'Pause' : 'Play'}
                  aria-label={isPlaying ? 'Pause audio' : 'Play audio'}
                  className="p-2.5 bg-forest-700 hover:bg-forest-800 text-white font-bold rounded-full shadow-sm hover:scale-105 active:scale-95 transition-all focus-visible:ring-2 focus-visible:ring-forest-700"
                >
                  {isLoading ? (
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                  ) : isPlaying ? (
                    <Pause className="w-4 h-4 fill-current" />
                  ) : (
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  )}
                </button>

                <button
                  onClick={() => skip(10)}
                  title="Forward 10s"
                  aria-label="Forward 10 seconds"
                  className="p-1.5 text-charcoal-600 hover:text-forest-800 hover:bg-[#FAF7F2] rounded-full transition-colors hidden sm:block"
                >
                  <RotateCw className="w-4 h-4" />
                </button>

                <button
                  onClick={playNextBook}
                  title="Next Summary"
                  aria-label="Next book"
                  className="p-1.5 text-charcoal-600 hover:text-forest-800 hover:bg-[#FAF7F2] rounded-full transition-colors hidden sm:block"
                >
                  <SkipForward className="w-4 h-4" />
                </button>
              </>
            )}

            <button
              onClick={openFullPlayer}
              title="Expand Player"
              aria-label="Open full audio player modal"
              className="p-1.5 text-charcoal-600 hover:text-forest-800 hover:bg-[#FAF7F2] rounded-full transition-colors"
            >
              <Maximize2 className="w-4 h-4" />
            </button>

            <button
              onClick={closeMiniPlayer}
              title="Stop Listening"
              aria-label="Stop listening and close player"
              className="p-1.5 text-charcoal-500 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors flex items-center justify-center"
            >
              <X className="w-4 h-4 stroke-[2]" />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
