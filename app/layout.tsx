import type { Metadata } from 'next';
import './globals.css';
import { AudioPlayerProvider } from '@/components/player/AudioPlayerContext';
import { Navbar } from '@/components/layout/Navbar';
import { BottomNav } from '@/components/layout/BottomNav';
import { Footer } from '@/components/layout/Footer';
import { MiniPlayer } from '@/components/player/MiniPlayer';
import { FullPlayerModal } from '@/components/player/FullPlayerModal';

export const metadata: Metadata = {
  title: 'Bookly — Listen • Learn • Grow | Bilingual Audio Book Summaries',
  description:
    'Discover world-class books on money, mindset, relationships, and leadership with original ~15-minute educational audio summaries in English and Telugu (తెలుగు).',
  openGraph: {
    title: 'Bookly — Listen • Learn • Grow',
    description: 'Bilingual audio summaries in English and Telugu for students and lifelong learners.',
    images: ['/covers/butterfly_headphones.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#FAF7F2] text-charcoal-800 min-h-screen flex flex-col font-sans selection:bg-forest-700 selection:text-[#FAF7F2]">
        <AudioPlayerProvider>
          <Navbar />
          <main className="flex-1 pb-28 md:pb-16">{children}</main>
          <MiniPlayer />
          <FullPlayerModal />
          <Footer />
          <BottomNav />
        </AudioPlayerProvider>
      </body>
    </html>
  );
}
