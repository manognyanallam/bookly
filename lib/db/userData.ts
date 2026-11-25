import { createClient } from '@/lib/supabase/client';
import type { LibraryItem, ListeningProgress } from '@/types/book';

const supabase = createClient();

// Get all saved books belonging to one user
export async function getUserLibrary(userId: string): Promise<LibraryItem[]> {
  const { data, error } = await supabase
    .from('saved_books')
    .select('book_id, saved_at')
    .eq('user_id', userId)
    .order('saved_at', { ascending: false });

  if (error) {
    console.error('Failed to fetch saved books:', error.message);
    return [];
  }

  return (data ?? []).map((item) => ({
    bookId: item.book_id,
    savedAt: item.saved_at,
    status: 'saved' as const,
  }));
}

// Save a book to the user's library
export async function saveUserLibraryItem(
  userId: string,
  item: LibraryItem
): Promise<boolean> {
  const { error } = await supabase
    .from('saved_books')
    .upsert(
      {
        user_id: userId,
        book_id: item.bookId,
      },
      { onConflict: 'user_id,book_id' }
    );

  if (error) {
    console.error('Failed to save book:', error.message);
    return false;
  }

  return true;
}

// Remove a saved book
export async function removeUserLibraryItem(
  userId: string,
  bookId: string
): Promise<boolean> {
  const { error } = await supabase
    .from('saved_books')
    .delete()
    .eq('user_id', userId)
    .eq('book_id', bookId);

  if (error) {
    console.error('Failed to remove saved book:', error.message);
    return false;
  }
  
  return true;
}




// Fetch listening progress for one user
export async function getUserProgressMap(
  userId: string
): Promise<Record<string, ListeningProgress>> {
  const { data, error } = await supabase
    .from('listening_progress')
    .select('*')
    .eq('user_id', userId);

  if (error) {
    console.error('Failed to fetch listening progress:', error.message);
    return {};
  }

  const progressMap: Record<string, ListeningProgress> = {};

  (data ?? []).forEach((item) => {
    const progress: ListeningProgress = {
      userId: item.user_id,
      bookId: item.book_id,
      language: item.language,
      positionSeconds: item.position_seconds,
      durationSeconds: item.duration_seconds,
      progressPercentage: item.progress_percentage,
      completed: item.completed,
      lastPlayedAt: item.last_played_at,
    };

    progressMap[`${item.book_id}:${item.language}`] = progress;

    // Keep a general book key for components that need the latest progress
    const existing = progressMap[item.book_id];

    if (
      !existing ||
      new Date(progress.lastPlayedAt).getTime() >
        new Date(existing.lastPlayedAt).getTime()
    ) {
      progressMap[item.book_id] = progress;
    }
  });

  return progressMap;
}

// Get progress for a particular book and language
export async function getBookProgress(
  userId: string,
  bookId: string,
  language: 'en' | 'te'
): Promise<ListeningProgress | undefined> {
  const { data, error } = await supabase
    .from('listening_progress')
    .select('*')
    .eq('user_id', userId)
    .eq('book_id', bookId)
    .eq('language', language)
    .maybeSingle();

  if (error) {
    console.error('Failed to fetch book progress:', error.message);
    return undefined;
  }

  if (!data) return undefined;

  return {
    userId: data.user_id,
    bookId: data.book_id,
    language: data.language,
    positionSeconds: data.position_seconds,
    durationSeconds: data.duration_seconds,
    progressPercentage: data.progress_percentage,
    completed: data.completed,
    lastPlayedAt: data.last_played_at,
  };
}

// Save or update listening progress
export async function saveUserProgress(
  progress: ListeningProgress
): Promise<boolean> {
  if (!progress.language) {
    console.error('A language is required to save listening progress.');
    return false;
  }

  const { error } = await supabase
    .from('listening_progress')
    .upsert(
      {
        user_id: progress.userId,
        book_id: progress.bookId,
        language: progress.language,
        position_seconds: Math.max(0, Math.floor(progress.positionSeconds)),
        duration_seconds: Math.max(0, Math.floor(progress.durationSeconds)),
        progress_percentage: Math.min(
          100,
          Math.max(0, Math.floor(progress.progressPercentage))
        ),
        completed: progress.completed,
        last_played_at: progress.lastPlayedAt,
      },
      { onConflict: 'user_id,book_id,language' }
    );

  if (error) {
    console.error('Failed to save listening progress:', error.message);
    return false;
  }
  if (typeof window !== 'undefined') {
  window.dispatchEvent(
    new CustomEvent('bookly-progress-change', {
      detail: progress,
    })
  );
}

  return true;
}