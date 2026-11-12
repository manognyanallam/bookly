import { BookVisualGuide } from '@/types/visuals';
import { Book } from '@/types/book';
import { coreVisualGuides } from './coreVisualGuides';
import { productivityBusinessVisualGuides } from './productivityBusinessVisuals';
import { psychologyHumanVisualGuides } from './psychologyHumanVisuals';
import { communicationNegotiationVisualGuides } from './communicationNegotiationVisuals';
import { wealthInvestingVisualGuides } from './wealthInvestingVisuals';

export const ALL_VISUAL_GUIDES: Record<string, BookVisualGuide> = {
  ...coreVisualGuides,
  ...productivityBusinessVisualGuides,
  ...psychologyHumanVisualGuides,
  ...communicationNegotiationVisualGuides,
  ...wealthInvestingVisualGuides,
};

// Aliases for alternate slug representations used across the app
if (ALL_VISUAL_GUIDES['the-7-habits-of-highly-effective-people']) {
  ALL_VISUAL_GUIDES['the-7-habits'] = ALL_VISUAL_GUIDES['the-7-habits-of-highly-effective-people'];
}
if (ALL_VISUAL_GUIDES['the-psychology-of-money']) {
  ALL_VISUAL_GUIDES['psychology-of-money'] = ALL_VISUAL_GUIDES['the-psychology-of-money'];
}

export function getBookVisualGuide(slugOrId: string): BookVisualGuide | undefined {
  if (!slugOrId) return undefined;
  return (
    ALL_VISUAL_GUIDES[slugOrId] ||
    Object.values(ALL_VISUAL_GUIDES).find(
      (guide) => guide.bookId === slugOrId || guide.slug === slugOrId
    )
  );
}

function getSummaryBasedVisualGuide(book: Book): BookVisualGuide | undefined {
  const isUsefulText = (value: string | undefined): value is string => {
    const text = value?.trim();
    return Boolean(
      text &&
      !/^(?:idea|lesson|topic|concept)\s+\d+$/i.test(text) &&
      !/^(?:the central lesson of this book|sample takeaway|core idea section|introduction section of the summary)\.?$/i.test(text)
    );
  };
  const summary = book.summary;
  const takeaway = [
    summary?.keyTakeaway,
    summary?.fullText?.coreIdea,
  ].find(isUsefulText);
  if (!takeaway) return undefined;

  const supportingPoints = [
    ...(summary?.quickLearn?.biggestIdeas || []).map((text) => ({ label: 'Key idea', text })),
    ...(summary?.quickLearn?.keyLessons || []).map((text) => ({ label: 'Practical lesson', text })),
    ...(summary?.fullText?.majorConcepts || []).map((concept) => ({
      label: 'Core concept',
      text: [concept.title, concept.content].filter(isUsefulText).join(': '),
    })),
    ...(summary?.quickLearn?.mainTopics || []).map((text) => ({ label: 'Main topic', text })),
  ].filter((point) => isUsefulText(point.text));

  if (supportingPoints.length === 0) return undefined;

  const items = [
    {
      highlight: 'CORE IDEA',
      title: 'Main takeaway',
      takeaway,
    },
    ...supportingPoints.slice(0, 7).map((point, index) => ({
      highlight: `POINT ${index + 1}`,
      title: point.label,
      takeaway: point.text,
    })),
  ];

  return {
    bookId: book.id,
    slug: book.slug,
    bookTitle: book.title,
    sourceType: 'summary-derived',
    introDescription:
      'A source-based overview assembled from this book’s saved summary. These cards present the supplied ideas without inventing causal links or a custom diagram.',
    diagrams: [
      {
        id: `summary-overview-${book.id}`,
        title: `Summary Overview: ${book.title}`,
        format: 'infographic',
        badge: 'Summary-based overview',
        whatItRepresents:
          'The main takeaway and supporting points supplied in this book’s saved summary. The cards are grouped for review; they do not imply a sequence or causal relationship.',
        simpleDescription:
          'Start with the main takeaway, then read each supporting point as a separate idea from the saved summary. No relationship between supporting points is implied unless the text itself states one.',
        studentExample:
          summary.fullText.practicalApplications.find(isUsefulText) ||
          `Use the main takeaway as a revision prompt, then explain each supporting point in your own words.`,
        quickRevision: takeaway,
        infographicData: { items },
      },
    ],
  };
}

export function getBookVisualGuideForBook(book: Book): BookVisualGuide | undefined {
  return getBookVisualGuide(book.slug) || getBookVisualGuide(book.id) || getSummaryBasedVisualGuide(book);
}

export function hasVisualGuide(slugOrId: string): boolean {
  return Boolean(getBookVisualGuide(slugOrId));
}

export function getAllVisualGuideSlugs(): string[] {
  return Object.keys(ALL_VISUAL_GUIDES);
}
