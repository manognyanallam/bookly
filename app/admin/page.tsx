'use client';

import React, { useState, useEffect } from 'react';
import { getStoredBooks, saveCustomBook, deleteStoredBook } from '@/lib/db/storage';
import { GENRES_LIST } from '@/lib/db/booksData';
import { Book, AudioChapter } from '@/types/book';
import { SlidersHorizontal, Plus, Edit, Trash2, Save, X, Upload, Music, Image as ImageIcon, Sparkles, CheckCircle2 } from 'lucide-react';

export default function AdminPage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [selectedBook, setSelectedBook] = useState<Partial<Book> | null>(null);
  const [successMsg, setSuccessMsg] = useState<string>('');

  useEffect(() => {
    setBooks(getStoredBooks());
  }, []);

  const handleAddNew = () => {
    const newBook: Partial<Book> = {
      id: 'book-' + Date.now(),
      slug: 'new-book-' + Date.now(),
      title: '',
      author: '',
      description: '',
      coverImage: '/covers/books/atomic-habits.jpg',
      genre: 'Personal Growth',
      category: 'nonfiction',
      rating: 4.8,
      popularityScore: 80,
      estimatedDurationMinutes: 15,
      audio: {
        id: 'audio-' + Date.now(),
        bookId: '',
        audioUrl: '/audio/atomic-habits.mp3',
        duration: 900,
        hasAudio: true,
        chapters: [
          { id: 'c1', title: 'Introduction', timestamp: 0, duration: 180 },
          { id: 'c2', title: 'Core Concepts', timestamp: 180, duration: 420 },
          { id: 'c3', title: 'Final Takeaway', timestamp: 600, duration: 300 }
        ]
      },
      summary: {
        id: 'sum-' + Date.now(),
        bookId: '',
        keyTakeaway: 'The central lesson of this book.',
        quickLearn: {
          biggestIdeas: ['Idea 1', 'Idea 2', 'Idea 3'],
          keyLessons: ['Lesson 1', 'Lesson 2', 'Lesson 3', 'Lesson 4', 'Lesson 5'],
          whoShouldListen: 'Target listeners interested in this subject.',
          mainTopics: ['Topic 1', 'Topic 2']
        },
        fullText: {
          introduction: 'Introduction section of the summary.',
          coreIdea: 'Core idea section.',
          majorConcepts: [{ title: 'Concept 1', content: 'Details of concept 1.' }],
          examples: ['Real world example 1'],
          practicalApplications: ['Action item 1'],
          keyLessonsSummary: ['Lesson summary 1'],
          finalTakeaway: 'Final concluding thoughts.'
        }
      }
    };
    setSelectedBook(newBook);
    setIsEditing(true);
  };

  const handleEdit = (book: Book) => {
    setSelectedBook({ ...book });
    setIsEditing(true);
  };

  const handleDelete = (bookId: string) => {
    if (confirm('Are you sure you want to delete this book?')) {
      const updated = deleteStoredBook(bookId);
      setBooks(updated);
      showSuccess('Book deleted successfully');
    }
  };

  const handleSaveForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedBook || !selectedBook.title || !selectedBook.author) {
      alert('Please fill in required fields: Title and Author');
      return;
    }

    const slug = selectedBook.slug || selectedBook.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const completeBook: Book = {
      id: selectedBook.id || 'book-' + Date.now(),
      slug,
      title: selectedBook.title,
      author: selectedBook.author,
      description: selectedBook.description || '',
      coverImage: selectedBook.coverImage || '/covers/butterfly_headphones.jpg',
      genre: selectedBook.genre || 'Personal Growth',
      category: selectedBook.category || 'nonfiction',
      rating: selectedBook.rating || 4.8,
      popularityScore: selectedBook.popularityScore || 80,
      estimatedDurationMinutes: selectedBook.estimatedDurationMinutes || 15,
      audio: {
        id: selectedBook.audio?.id || 'audio-' + Date.now(),
        bookId: selectedBook.id || '',
        audioUrl: selectedBook.audio?.audioUrl || '/audio/atomic-habits.mp3',
        duration: selectedBook.audio?.duration || 900,
        hasAudio: Boolean(selectedBook.audio?.audioUrl && selectedBook.audio.audioUrl.trim() !== ''),
        chapters: selectedBook.audio?.chapters || []
      },
      summary: selectedBook.summary || {
        id: 'sum-' + Date.now(),
        bookId: selectedBook.id || '',
        keyTakeaway: 'Sample takeaway',
        quickLearn: {
          biggestIdeas: ['Idea 1', 'Idea 2', 'Idea 3'],
          keyLessons: ['Lesson 1', 'Lesson 2', 'Lesson 3', 'Lesson 4', 'Lesson 5'],
          whoShouldListen: 'Audience',
          mainTopics: ['Topic 1']
        },
        fullText: {
          introduction: 'Intro',
          coreIdea: 'Core idea',
          majorConcepts: [],
          examples: [],
          practicalApplications: [],
          keyLessonsSummary: [],
          finalTakeaway: 'Takeaway'
        }
      },
      createdAt: selectedBook.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    const updatedList = saveCustomBook(completeBook);
    setBooks(updatedList);
    setIsEditing(false);
    setSelectedBook(null);
    showSuccess('Book saved successfully! ONE MP3 file associated with book.');
  };

  const showSuccess = (msg: string) => {
    setSuccessMsg(msg);
    setTimeout(() => setSuccessMsg(''), 4000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/15 border border-gold-400/30 text-gold-300 text-xs font-semibold">
            <SlidersHorizontal className="w-3.5 h-3.5" /> ADMIN DASHBOARD
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white font-serif">
            Bookly Content Manager
          </h1>
          <p className="text-xs text-sage-300">
            Upload ONE MP3 per book • Associate single audio URL • Manage summaries
          </p>
        </div>

        <button
          onClick={handleAddNew}
          className="px-6 py-3 rounded-full bg-gradient-to-r from-mint-500 to-mint-600 hover:from-mint-400 hover:to-mint-500 text-forest-950 font-bold text-xs shadow-lg hover:scale-105 transition-all flex items-center gap-2"
        >
          <Plus className="w-4 h-4" /> Add New Book Summary
        </button>
      </div>

      {successMsg && (
        <div className="p-4 rounded-2xl bg-mint-500/20 border border-mint-500 text-mint-300 text-sm font-semibold flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-mint-400" /> {successMsg}
        </div>
      )}

      {/* Editor Modal */}
      {isEditing && selectedBook && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest-950/80 backdrop-blur-md overflow-y-auto">
          <div className="bg-forest-900 border border-mint-500/30 rounded-3xl p-6 sm:p-8 max-w-3xl w-full text-white shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h3 className="text-xl font-bold font-serif text-white">
                {selectedBook.id ? 'Edit Book Summary' : 'Create New Book Summary'}
              </h3>
              <button onClick={() => setIsEditing(false)} className="p-2 hover:bg-white/10 rounded-full text-sage-300">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveForm} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sage-300 mb-1 font-semibold">Book Title *</label>
                  <input
                    type="text"
                    required
                    value={selectedBook.title || ''}
                    onChange={(e) => setSelectedBook({ ...selectedBook, title: e.target.value })}
                    className="w-full bg-forest-950 text-white p-2.5 rounded-xl border border-white/10 focus:border-mint-400"
                    placeholder="e.g. Atomic Habits"
                  />
                </div>

                <div>
                  <label className="block text-sage-300 mb-1 font-semibold">Author *</label>
                  <input
                    type="text"
                    required
                    value={selectedBook.author || ''}
                    onChange={(e) => setSelectedBook({ ...selectedBook, author: e.target.value })}
                    className="w-full bg-forest-950 text-white p-2.5 rounded-xl border border-white/10 focus:border-mint-400"
                    placeholder="e.g. James Clear"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sage-300 mb-1 font-semibold">Genre</label>
                  <select
                    value={selectedBook.genre || 'Personal Growth'}
                    onChange={(e) => setSelectedBook({ ...selectedBook, genre: e.target.value })}
                    className="w-full bg-forest-950 text-white p-2.5 rounded-xl border border-white/10 focus:border-mint-400"
                  >
                    {GENRES_LIST.map((g) => (
                      <option key={g.id} value={g.name}>{g.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sage-300 mb-1 font-semibold">Category</label>
                  <select
                    value={selectedBook.category || 'nonfiction'}
                    onChange={(e) => setSelectedBook({ ...selectedBook, category: e.target.value as any })}
                    className="w-full bg-forest-950 text-white p-2.5 rounded-xl border border-white/10 focus:border-mint-400"
                  >
                    <option value="nonfiction">Non-Fiction</option>
                    <option value="fiction">Fiction / Novels</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sage-300 mb-1 font-semibold">Duration (Minutes)</label>
                  <input
                    type="number"
                    value={selectedBook.estimatedDurationMinutes || 15}
                    onChange={(e) => setSelectedBook({ ...selectedBook, estimatedDurationMinutes: parseInt(e.target.value) })}
                    className="w-full bg-forest-950 text-white p-2.5 rounded-xl border border-white/10 focus:border-mint-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sage-300 mb-1 font-semibold">Description</label>
                <textarea
                  rows={2}
                  value={selectedBook.description || ''}
                  onChange={(e) => setSelectedBook({ ...selectedBook, description: e.target.value })}
                  className="w-full bg-forest-950 text-white p-2.5 rounded-xl border border-white/10 focus:border-mint-400"
                  placeholder="Short description of the book"
                />
              </div>

              {/* Cover & Audio URLs */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <h4 className="font-bold text-mint-300 flex items-center gap-1.5">
                  <Music className="w-4 h-4 text-gold-400" /> SINGLE AUDIO MP3 & COVER ASSETS
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sage-300 mb-1 font-semibold">Audio MP3 URL (ONE file for all users)</label>
                    <input
                      type="text"
                      value={selectedBook.audio?.audioUrl || ''}
                      onChange={(e) =>
                        setSelectedBook({
                          ...selectedBook,
                          audio: {
                            ...(selectedBook.audio || { id: 'audio-1', bookId: '', duration: 900, hasAudio: true, chapters: [] }),
                            audioUrl: e.target.value,
                            hasAudio: Boolean(e.target.value.trim() !== ''),
                          },
                        })
                      }
                      className="w-full bg-forest-950 text-white p-2.5 rounded-xl border border-white/10 focus:border-mint-400 font-mono"
                      placeholder="/audio/atomic-habits.mp3"
                    />
                    <span className="text-[10px] text-sage-400">All users stream this same single stored MP3 file.</span>
                  </div>

                  <div>
                    <label className="block text-sage-300 mb-1 font-semibold">Cover Image URL</label>
                    <input
                      type="text"
                      value={selectedBook.coverImage || ''}
                      onChange={(e) => setSelectedBook({ ...selectedBook, coverImage: e.target.value })}
                      className="w-full bg-forest-950 text-white p-2.5 rounded-xl border border-white/10 focus:border-mint-400 font-mono"
                      placeholder="https://images.unsplash.com/..."
                    />
                  </div>
                </div>
              </div>

              {/* Key Takeaway */}
              <div>
                <label className="block text-sage-300 mb-1 font-semibold">Key Takeaway ("If You Remember Only One Thing...")</label>
                <textarea
                  rows={2}
                  value={selectedBook.summary?.keyTakeaway || ''}
                  onChange={(e) =>
                    setSelectedBook({
                      ...selectedBook,
                      summary: {
                        ...(selectedBook.summary || { id: 'sum-1', bookId: '', quickLearn: { biggestIdeas: [], keyLessons: [], whoShouldListen: '', mainTopics: [] }, fullText: { introduction: '', coreIdea: '', majorConcepts: [], examples: [], practicalApplications: [], keyLessonsSummary: [], finalTakeaway: '' } }),
                        keyTakeaway: e.target.value,
                      },
                    })
                  }
                  className="w-full bg-forest-950 text-white p-2.5 rounded-xl border border-white/10 focus:border-mint-400"
                  placeholder="Single most powerful idea from the book"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-5 py-2 rounded-full bg-white/10 text-white font-bold hover:bg-white/15"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-full bg-mint-500 text-forest-950 font-bold hover:bg-mint-400 shadow-lg flex items-center gap-1.5"
                >
                  <Save className="w-4 h-4" /> Save Book Summary
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Catalog Table */}
      <div className="bg-forest-900/80 border border-mint-500/20 rounded-3xl p-6 shadow-2xl backdrop-blur-xl overflow-x-auto">
        <h3 className="text-lg font-bold text-white mb-4">Book Catalog ({books.length} Books)</h3>
        <table className="w-full text-left text-xs text-sage-300">
          <thead className="bg-forest-950 text-mint-300 uppercase font-semibold border-b border-white/10">
            <tr>
              <th className="p-3">Book</th>
              <th className="p-3">Genre</th>
              <th className="p-3">Duration</th>
              <th className="p-3">Audio MP3 File</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {books.map((b) => (
              <tr key={b.id} className="hover:bg-white/5 transition-colors">
                <td className="p-3 font-semibold text-white">
                  <div>{b.title}</div>
                  <div className="text-[10px] text-sage-400">{b.author}</div>
                </td>
                <td className="p-3">{b.genre}</td>
                <td className="p-3 font-mono">~{b.estimatedDurationMinutes} min</td>
                <td className="p-3 font-mono text-[11px]">
                  {b.audio.hasAudio ? (
                    <span className="text-mint-300 bg-mint-500/10 px-2 py-0.5 rounded border border-mint-500/20">
                      {b.audio.audioUrl}
                    </span>
                  ) : (
                    <span className="text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                      Audio coming soon
                    </span>
                  )}
                </td>
                <td className="p-3">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleEdit(b)}
                      className="p-1.5 rounded-lg bg-mint-500/20 text-mint-300 hover:bg-mint-500 hover:text-forest-950 transition-colors"
                      title="Edit Book"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(b.id)}
                      className="p-1.5 rounded-lg bg-red-500/20 text-red-300 hover:bg-red-500 hover:text-white transition-colors"
                      title="Delete Book"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
