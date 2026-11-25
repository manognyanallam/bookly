# Bookly

**Listen. Learn. Grow.**

Bookly is a book-discovery and learning app built around concise audio summaries, written learning guides, and interactive visual explanations. It currently ships with 19 curated books. English and Telugu summary audio is served as static MP3 files bundled with the application.

> Bookly provides educational summaries and commentary. It is not a source of full audiobook recordings or full book text.

## Features

- Browse and search the seeded book catalogue by book, author, genre, and learning topics.
- Listen to English or Telugu audio summaries where available, with playback controls, chapter seeking, playback speed, and volume controls.
- Read book-specific written guides, summaries, key takeaways, practical lessons, and chapter outlines.
- Review interactive mind maps, flowcharts, comparisons, timelines, concept diagrams, and infographics for the current 19 seeded books.
- Use a text explanation of each visual model, including its relationships or sequence where applicable.
- Save books and track listening progress in browser storage.
- Add, edit, and remove custom book entries through the content manager. Custom entries are stored in the browser, not in a shared server database. Their visual overview is derived from supplied summary text when the summary has enough substantive content; otherwise the detail page explains that a book-specific guide is not available.

## Book catalogue

The seeded catalogue contains:

1. Atomic Habits — James Clear
2. Deep Work — Cal Newport
3. The Psychology of Money — Morgan Housel
4. The Alchemist — Paulo Coelho
5. Sapiens: A Brief History of Humankind — Yuval Noah Harari
6. Thinking, Fast and Slow — Daniel Kahneman
7. Zero to One — Peter Thiel
8. The 7 Habits of Highly Effective People — Stephen R. Covey
9. Rich Dad Poor Dad — Robert T. Kiyosaki
10. The 48 Laws of Power — Robert Greene
11. How to Win Friends and Influence People — Dale Carnegie
12. The Laws of Human Nature — Robert Greene
13. Never Split the Difference — Chris Voss
14. The Richest Man in Babylon — George S. Clason
15. Think and Grow Rich — Napoleon Hill
16. Emotional Intelligence — Daniel Goleman
17. The Intelligent Investor — Benjamin Graham
18. Let's Talk Money — Monika Halan
19. The Almanack of Naval Ravikant — Eric Jorgenson

The app also defines a broader genre list for browsing and book classification; the list of seeded books above is the catalogue currently included in the repository.

## English and Telugu audio

Audio is stored as static MP3 assets and streamed by the browser's HTML audio player. The current repository includes 19 English and 19 Telugu MP3 files:

- English: `public/audio/<book-slug>.mp3`
- Telugu: `public/audio/te/<book-slug>.mp3`

Language availability and chapter data are associated with each book in the app's data layer. The admin content manager lets you associate an audio URL; it does not upload MP3 files to a server. Add any new audio assets to the appropriate public directory and configure the corresponding book record.

## Summaries and visual learning

Book detail pages include a key takeaway, quick-learning points, and structured written summaries with concepts, examples, practical applications, and lessons. The seeded books also have curated educational guides and book-specific visual models. Visuals are rendered from structured data rather than book-cover art or generic decorative imagery.

Supported visual formats include:

- Mind maps with a central idea, branches, and related nodes.
- Flowcharts with ordered steps and optional decision paths.
- Side-by-side comparisons.
- Timelines.
- Concept diagrams that explain component relationships.
- Infographics for key points.

The visual-learning section provides text alternatives. For a custom book, Bookly can present a summary-derived overview without asserting relationships that are not in the supplied text. It shows an explicit fallback when the custom summary is insufficient.

## Custom books and storage

The content manager is available at `/admin`. It supports creating, editing, and deleting book records, including summary text, audio URL references, and chapter metadata.

Book records, saved-book selections, and listening progress are stored in the browser's local storage. This is suitable for local evaluation and a single browser profile; it is not a server-side content-management system, account system, or shared database. Custom books and progress do not automatically transfer to another browser or deployment.

## Technology

- Next.js 14 App Router
- React 18
- TypeScript
- Tailwind CSS, PostCSS, and Autoprefixer
- HTML5 Audio API
- Three.js for 3D visuals
- Framer Motion for animations
- Lucide React icons
- Browser local storage for local book, library, and progress data

## Project structure

```text
app/                         Next.js routes and global styles
  admin/                     Local content manager
  books/[slug]/              Book detail pages
  discover/                  Browse the catalogue
  library/                   Saved books and listening progress
  search/                    Catalogue search
components/
  3d/                        3D visual components
  books/                     Book cards, guides, and summaries
  layout/                    Shared app layout
  player/                    Audio player and playback context
  visuals/                   Interactive visual-learning renderers
lib/
  audio/                     Static audio provider
  db/                        Seed data, local storage, and guide data
  recommendations/           Recommendation helpers
  summary/                   Summary provider
public/
  audio/                     English MP3 assets
  audio/te/                  Telugu MP3 assets
  covers/books/              Book cover assets
  brand/                     Brand assets
types/                       Shared TypeScript types
```

## Requirements

- Node.js compatible with Next.js 14.
- npm.

## Authentication setup

The app uses Supabase Authentication. Set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` in `.env.local` for local development and in the deployment platform's environment settings for production. These are the project URL and publishable (formerly anon) key; never put a Supabase service-role key in frontend code or a `NEXT_PUBLIC_` variable.

In Supabase Dashboard, open **Authentication → URL Configuration**:

- Set **Site URL** to `https://bookly-3m0x.onrender.com` for production.
- Add `https://bookly-3m0x.onrender.com/auth/callback` and `https://bookly-3m0x.onrender.com/reset-password` to **Redirect URLs**.
- Also add `http://localhost:3000/auth/callback` and `http://localhost:3000/reset-password` to **Redirect URLs** for local development. The app supplies the current origin explicitly, so production authentication links do not use localhost.

Email confirmation is controlled by Supabase, not by this app. Keep confirmation enabled if required. Supabase's default email service has delivery and rate limits; for reliable production delivery, configure a custom SMTP provider in the Supabase Dashboard's Authentication email/SMTP settings. Keep SMTP credentials in Supabase's secure project settings (or server-only environment configuration when self-hosting); do not add them to frontend code, commit them, or expose them through `NEXT_PUBLIC_` variables. Verify the sender domain and check Supabase Auth logs and the SMTP provider's delivery logs when messages fail.

The app's signup confirmation links return to `/auth/callback`; password recovery links return to `/reset-password`. No service-role key or SMTP secret is needed by the browser app.

## Installation and local development

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

If you change dependencies and update `package-lock.json`, run `npm install` to update the lockfile before committing it.

## Commands

```bash
npm run dev       # Start the Next.js development server
npm run build     # Create a production build
npm start         # Start the production server (run after npm run build)
npm run lint      # Next.js lint command; see note below
```

The lint script is present in `package.json`, but this checkout has no ESLint dependency or ESLint configuration. Running it currently opens Next.js's interactive ESLint setup prompt; cancel it or configure ESLint before using it as a non-interactive check.

## Screenshots and deployment

No project screenshots or public deployment URL are currently configured in this repository. Add verified screenshots and a live deployment link here when they are available.
