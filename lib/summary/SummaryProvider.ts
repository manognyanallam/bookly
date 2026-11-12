import { BookSummary } from '@/types/book';

/**
 * ZERO-COST SUMMARY PROVIDER ARCHITECTURE
 * 
 * Provides pre-created structured summary content for books.
 * DEMO_MODE = true default (No OpenAI / Gemini / Claude API required).
 */

export interface SummaryProvider {
  getSummary(bookId: string, fallbackSummary: BookSummary): BookSummary;
}

export class StaticSummaryProvider implements SummaryProvider {
  getSummary(bookId: string, fallbackSummary: BookSummary): BookSummary {
    return fallbackSummary;
  }
}

export const staticSummaryProvider = new StaticSummaryProvider();
