import { Book, LibraryItem } from '@/types/book';

/**
 * Zero-Cost Recommendation System
 * Uses genre-matching, user listening history, and popularity scoring.
 * Zero external AI API calls.
 */
export function getRecommendedBooks(
  allBooks: Book[],
  userLibrary: LibraryItem[],
  limit: number = 6
): Book[] {
  if (!allBooks || allBooks.length === 0) return [];

  // Get user's played/saved genres
  const userPlayedBookIds = userLibrary.map((item) => item.bookId);
  const playedBooks = allBooks.filter((book) => userPlayedBookIds.includes(book.id));

  const genreCounts: Record<string, number> = {};
  playedBooks.forEach((book) => {
    genreCounts[book.genre] = (genreCounts[book.genre] || 0) + 1;
  });

  // Calculate score for unplayed/saved books
  const scoredBooks = allBooks
    .filter((book) => !userPlayedBookIds.includes(book.id))
    .map((book) => {
      let score = book.popularityScore || 50;

      // Affinity bonus for user's favorite genres
      if (genreCounts[book.genre]) {
        score += genreCounts[book.genre] * 35;
      }

      // Bonus for high ratings
      score += (book.rating || 4.5) * 10;

      return { book, score };
    });

  // Sort descending by score
  scoredBooks.sort((a, b) => b.score - a.score);

  // If user hasn't listened to enough books yet, return top popular ones
  if (scoredBooks.length < limit) {
    return allBooks.slice(0, limit);
  }

  return scoredBooks.slice(0, limit).map((item) => item.book);
}
