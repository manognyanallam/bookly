'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useAudioPlayer } from './AudioPlayerContext';
import { AudioWaveform } from './AudioWaveform';
import {
  Play,
  Pause,
  ChevronDown,
  RotateCcw,
  RotateCw,
  Volume2,
  VolumeX,
  Gauge,
  List,
  AlertCircle,
  Clock,
  Sparkles,
  BookOpen,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FullPlayerModal: React.FC = () => {
  const {
    currentBook,
    currentLanguage,
    setLanguage,
    activeChapters,
    isPlaying,
    isLoading,
    playbackError,
    currentTime,
    duration,
    playbackSpeed,
    volume,
    isMuted,
    isFullPlayerOpen,
    hasAudio,
    togglePlay,
    seek,
    skip,
    setSpeed,
    setVolumeLevel,
    toggleMute,
    seekToChapter,
    playNextBook,
    playPrevBook,
    closeFullPlayer,
  } = useAudioPlayer();

  const [activeTab, setActiveTab] = useState<'player' | 'chapters'>('player');

  if (!isFullPlayerOpen || !currentBook) return null;

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs < 0) return '00:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const speedOptions = [0.75, 1.0, 1.25, 1.5, 2.0];

  const hasTelugu = Boolean(currentBook.audio?.audioUrls?.te && (currentBook.audio.hasAudioByLanguage?.te ?? true));

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#FAF7F2] border border-[#E5DFD5] rounded-3xl p-6 sm:p-8 shadow-bookly-lg text-charcoal-800 overflow-hidden max-h-[90vh] flex flex-col"
        >
          {/* Subtle Butterfly Watermark in Audio Book Player Background */}
          <div className="absolute -bottom-10 -right-10 pointer-events-none select-none opacity-[0.06] z-0 overflow-hidden">
            <Image
              src="/brand/butterfly_watermark.png"
              alt=""
              width={340}
              height={246}
              className="object-contain"
            />
          </div>

          {/* Header Bar */}
          <div className="relative z-10 flex items-center justify-between pb-4 border-b border-[#EAE3D6]">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 text-xs font-bold rounded-full bg-forest-50 text-forest-800 border border-forest-200 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-gold-500" /> BOOKLY AUDIO
              </span>
              <span className="text-xs text-charcoal-500 hidden sm:inline">
                {currentBook.genre}
              </span>
            </div>

            {/* Language Switcher in Player */}
            <div className="flex items-center gap-1 bg-white p-1 rounded-full border border-[#DCD5C9]">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                  currentLanguage === 'en'
                    ? 'bg-forest-700 text-white shadow-sm'
                    : 'text-charcoal-600 hover:text-charcoal-900'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage('te')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                  currentLanguage === 'te'
                    ? 'bg-gold-500 text-white shadow-sm'
                    : 'text-charcoal-600 hover:text-charcoal-900'
                }`}
              >
                తెలుగు {hasTelugu ? '' : '• Soon'}
              </button>
            </div>

            <button
              onClick={closeFullPlayer}
              aria-label="Close modal"
              className="p-2 rounded-full hover:bg-white text-charcoal-500 hover:text-charcoal-900 transition-colors"
            >
              <ChevronDown className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center justify-center gap-3 my-4">
            <button
              onClick={() => setActiveTab('player')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                activeTab === 'player'
                  ? 'bg-forest-700 text-white shadow-sm'
                  : 'bg-white text-charcoal-600 hover:bg-[#FAF7F2] border border-[#E5DFD5]'
              }`}
            >
              Audio Player
            </button>
            {activeChapters && activeChapters.length > 0 && (
              <button
                onClick={() => setActiveTab('chapters')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all ${
                  activeTab === 'chapters'
                    ? 'bg-forest-700 text-white shadow-sm'
                    : 'bg-white text-charcoal-600 hover:bg-[#FAF7F2] border border-[#E5DFD5]'
                }`}
              >
                <List className="w-3.5 h-3.5" /> Audio Chapters ({activeChapters.length})
              </button>
            )}
          </div>

          {/* Tab Content */}
          <div className="flex-1 overflow-y-auto pr-1">
            {activeTab === 'player' ? (
              <div className="flex flex-col items-center text-center py-2">
                {/* Book Cover Image */}
                <div className="relative w-44 aspect-[2/3] sm:w-52 rounded-2xl overflow-hidden shadow-bookly-lg border border-[#E2DCD0] mb-5 bg-[#F4EFE6] flex items-center justify-center p-2">
                  <Image
                    src={currentBook.coverImage}
                    alt={`Published book cover of ${currentBook.title} by ${currentBook.author}`}
                    fill
                    sizes="(max-width: 640px) 176px, 208px"
                    className="object-contain p-1 drop-shadow-sm"
                  />
                  <div className="absolute bottom-3 left-3 px-2 py-0.5 bg-forest-900/90 backdrop-blur-md text-white text-[10px] font-bold rounded-md border border-forest-700 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-gold-400" />
                    <span>{currentLanguage === 'te' ? 'తెలుగు ఆడియో' : 'English Audio'}</span>
                  </div>
                </div>

                {/* Title & Author */}
                <h3 className="text-xl sm:text-2xl font-bold text-charcoal-900 mb-1 font-serif">
                  {currentBook.title}
                </h3>
                <p className="text-sm text-forest-700 font-semibold mb-4">{currentBook.author}</p>

                {/* Telugu Coming Soon Warning if applicable */}
                {currentLanguage === 'te' && !hasTelugu && (
                  <div className="mb-4 p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs flex items-center gap-2 max-w-md">
                    <AlertCircle className="w-4 h-4 flex-shrink-0 text-amber-600" />
                    <span>
                      Telugu audio for this summary is coming soon. Switch to English to listen immediately.
                    </span>
                  </div>
                )}

                {/* Simulated Waveform Animation */}
                <div className="w-full max-w-md mb-3">
                  <AudioWaveform isPlaying={isPlaying} />
                </div>

                {/* Progress Bar & Timestamps */}
                <div className="w-full max-w-md space-y-2 mb-5">
                  <input
                    type="range"
                    min={0}
                    max={duration || 900}
                    value={currentTime}
                    onChange={(e) => seek(parseFloat(e.target.value))}
                    disabled={!hasAudio}
                    aria-label="Seek time"
                    className="w-full h-2 bg-[#E2DCD0] rounded-lg appearance-none cursor-pointer accent-forest-700 disabled:opacity-50"
                  />
                  <div className="flex justify-between text-xs text-charcoal-500 font-mono">
                    <span>{formatTime(currentTime)}</span>
                    <span className="text-forest-700 font-bold">
                      {currentLanguage === 'te' ? 'తెలుగు' : 'English'}
                    </span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>

                {/* Primary Player Controls */}
                <div className="flex items-center justify-center gap-6 mb-5">
                  <button
                    onClick={() => skip(-10)}
                    disabled={!hasAudio}
                    title="Rewind 10s"
                    aria-label="Rewind 10 seconds"
                    className="p-3 text-charcoal-600 hover:text-forest-800 transition-colors hover:scale-110 active:scale-95 disabled:opacity-30"
                  >
                    <RotateCcw className="w-6 h-6" />
                  </button>

                  <button
                    onClick={togglePlay}
                    disabled={!hasAudio}
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                    className="p-5 bg-forest-700 hover:bg-forest-800 text-white font-bold rounded-full shadow-md hover:scale-105 active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    {isPlaying ? (
                      <Pause className="w-8 h-8 fill-current" />
                    ) : (
                      <Play className="w-8 h-8 fill-current ml-1" />
                    )}
                  </button>

                  <button
                    onClick={() => skip(10)}
                    disabled={!hasAudio}
                    title="Forward 10s"
                    aria-label="Forward 10 seconds"
                    className="p-3 text-charcoal-600 hover:text-forest-800 transition-colors hover:scale-110 active:scale-95 disabled:opacity-30"
                  >
                    <RotateCw className="w-6 h-6" />
                  </button>
                </div>

                {/* Speed & Volume Controls */}
                <div className="flex items-center justify-between w-full max-w-md pt-4 border-t border-[#EAE3D6] text-xs">
                  {/* Speed Controls */}
                  <div className="flex items-center gap-1.5">
                    <Gauge className="w-4 h-4 text-charcoal-400" />
                    <span className="text-charcoal-500 mr-1">Speed:</span>
                    {speedOptions.map((speed) => (
                      <button
                        key={speed}
                        onClick={() => setSpeed(speed)}
                        className={`px-2 py-1 rounded text-[11px] font-mono font-bold transition-all ${
                          playbackSpeed === speed
                            ? 'bg-forest-700 text-white shadow-sm'
                            : 'bg-white hover:bg-[#FAF7F2] text-charcoal-700 border border-[#E5DFD5]'
                        }`}
                      >
                        {speed}x
                      </button>
                    ))}
                  </div>

                  {/* Volume Slider */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={toggleMute}
                      aria-label={isMuted ? 'Unmute' : 'Mute'}
                      className="text-charcoal-600 hover:text-charcoal-900"
                    >
                      {isMuted || volume === 0 ? (
                        <VolumeX className="w-4 h-4 text-charcoal-400" />
                      ) : (
                        <Volume2 className="w-4 h-4 text-charcoal-600" />
                      )}
                    </button>
                    <input
                      type="range"
                      min={0}
                      max={1}
                      step={0.05}
                      value={isMuted ? 0 : volume}
                      onChange={(e) => setVolumeLevel(parseFloat(e.target.value))}
                      aria-label="Volume slider"
                      className="w-20 h-1.5 bg-[#E2DCD0] rounded-lg appearance-none cursor-pointer accent-forest-700"
                    />
                  </div>
                </div>
              </div>
            ) : (
              /* Chapters Tab */
              <div className="py-2 space-y-2.5">
                <p className="text-xs text-charcoal-500 mb-3">
                  {currentLanguage === 'te'
                    ? 'ఏ అధ్యాయంపైనైనా క్లిక్ చేసి వెంటనే ఆ సమయానికి జంప్ అవ్వండి.'
                    : 'Click any chapter to jump directly to that timestamp in the audio summary.'}
                </p>
                {activeChapters.map((ch, idx) => {
                  const isActive =
                    currentTime >= ch.timestamp &&
                    (idx === activeChapters.length - 1 || currentTime < activeChapters[idx + 1].timestamp);
                  return (
                    <div
                      key={ch.id || `full-ch-${idx}`}
                      onClick={() => seekToChapter(ch)}
                      className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                        isActive
                          ? 'bg-forest-50 border-forest-600 text-forest-900 shadow-sm'
                          : 'bg-white border-[#E5DFD5] text-charcoal-800 hover:bg-[#FAF7F2]'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-7 h-7 rounded-full bg-forest-100 text-forest-800 flex items-center justify-center text-xs font-bold flex-shrink-0">
                          {idx + 1}
                        </div>
                        <div className="min-w-0">
                          <h5 className="text-xs sm:text-sm font-semibold truncate">{ch.title}</h5>
                          <span className="text-[11px] text-charcoal-500 font-mono">
                            Starts at {formatTime(ch.timestamp)}
                          </span>
                        </div>
                      </div>

                      <button className="px-3 py-1 text-xs font-semibold rounded-lg bg-[#FAF7F2] text-forest-800 hover:bg-forest-700 hover:text-white border border-[#E5DFD5] transition-colors whitespace-nowrap ml-2">
                        Jump
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Footer Architecture Tagline */}
          <div className="pt-3 border-t border-[#EAE3D6] text-center text-[11px] text-charcoal-500">
            Bookly Bilingual Audio • English &amp; Telugu (తెలుగు)
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
