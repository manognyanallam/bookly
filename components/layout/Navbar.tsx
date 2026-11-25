'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import {
  Search,
  Compass,
  Bookmark,
  Headphones,
  Grid,
  Menu,
  X,
  ArrowRight,
  LogOut,
  UserRound,
} from 'lucide-react';
import { useAuth } from '@/components/auth/AuthProvider';

const NavbarContent: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const activeTabParam = searchParams ? searchParams.get('tab') : null;

  const { user, loading, signOut } = useAuth();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setMobileMenuOpen(false);
    }
  };

  const handleSignOut = async () => {
    const error = await signOut();

    if (error) {
      alert(error);
      return;
    }

    setMobileMenuOpen(false);
    router.push('/');
    router.refresh();
  };

  const navLinks = [
    { name: 'Discover', href: '/discover', icon: Compass },
    { name: 'Categories', href: '/categories', icon: Grid },
    { name: 'My Library', href: '/library', icon: Bookmark },
    ...(user
      ? [
          {
            name: 'Continue Listening',
            href: '/library?tab=listening',
            icon: Headphones,
          },
        ]
      : []),
  ];

  const checkIsActive = (href: string) => {
    if (href === '/library?tab=listening') {
      return pathname === '/library' && activeTabParam === 'listening';
    }

    if (href === '/library') {
      return (
        pathname === '/library' &&
        (!activeTabParam || activeTabParam === 'saved')
      );
    }

    if (href === '/discover') {
      return pathname.startsWith('/discover');
    }

    return pathname === href;
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E5DFD5] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">

        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-700 rounded-xl p-1"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden border border-gold-400/40 shadow-sm group-hover:border-forest-700 transition-colors flex-shrink-0 bg-forest-800">
            <Image
              src="/covers/butterfly_headphones.jpg"
              alt="Bookly Logo"
              fill
              sizes="(max-width: 640px) 36px, 40px"
              className="object-cover group-hover:scale-110 transition-transform duration-300"
              priority
            />
          </div>

          <div>
            <span className="text-xl sm:text-2xl font-black tracking-tight text-forest-800 font-serif">
              BOOKLY
            </span>
            <p className="text-[10px] font-bold text-forest-600 tracking-widest uppercase">
              LISTEN • LEARN • GROW
            </p>
          </div>
        </Link>

        {/* Desktop Search */}
        <form onSubmit={handleSearchSubmit} className="flex-1 max-w-md hidden md:block">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-500" />
            <input
              type="text"
              aria-label="Search book summaries by title, author, or topic"
              placeholder="Search books, authors, topics (e.g. money, habits)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white text-charcoal-800 text-sm pl-10 pr-4 py-2 rounded-full border border-[#DCD5C9] focus:outline-none focus:border-forest-700 focus:ring-1 focus:ring-forest-700 placeholder:text-charcoal-400 shadow-sm"
            />
          </div>
        </form>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-2">
          <nav className="flex items-center gap-2 text-sm font-medium">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = checkIsActive(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition-all flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-semibold ${
                    isActive
                      ? 'bg-forest-700 text-[#FAF7F2] shadow-sm'
                      : 'text-charcoal-700 hover:text-forest-800 hover:bg-[#EFE9DF]'
                  }`}
                >
                  <Icon
                    className={`w-3.5 h-3.5 ${
                      isActive ? 'text-gold-300' : 'text-sage-600'
                    }`}
                  />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Authentication Actions */}
          {!loading && (
            user ? (
              <div className="flex items-center gap-2 ml-2 pl-3 border-l border-[#E5DFD5]">
                <span
                  className="text-xs font-semibold text-forest-800 max-w-[120px] truncate"
                  title={user.email ?? ''}
                >
                  {user.email?.split('@')[0] || 'Account'}
                </span>
                <button
                  onClick={handleSignOut}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold text-charcoal-700 hover:bg-[#EFE9DF] hover:text-forest-800 transition-colors"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2 ml-2">
                <Link
                  href="/login"
                  className="px-3 py-2 rounded-full text-xs font-semibold text-forest-800 hover:bg-[#EFE9DF] transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="px-4 py-2 rounded-full bg-forest-700 text-white text-xs font-semibold hover:bg-forest-800 transition-colors shadow-sm"
                >
                  Sign Up
                </Link>
              </div>
            )
          )}
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 lg:hidden">
          <Link
            href="/search"
            aria-label="Search page"
            className="p-2 text-charcoal-700 hover:text-forest-800 rounded-xl hover:bg-[#EFE9DF] transition-colors"
          >
            <Search className="w-5 h-5" />
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="p-2 text-charcoal-700 hover:text-forest-800 rounded-xl hover:bg-[#EFE9DF] transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E5DFD5] bg-white px-4 pt-3 pb-6 space-y-4 shadow-xl animate-in slide-in-from-top duration-200">

          <form onSubmit={handleSearchSubmit} className="pt-1">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-500" />
              <input
                type="text"
                placeholder="Search summaries..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#FAF7F2] text-charcoal-800 text-sm pl-10 pr-4 py-2.5 rounded-xl border border-[#DCD5C9] focus:outline-none focus:border-forest-700 placeholder:text-charcoal-400"
              />
            </div>
          </form>

          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = checkIsActive(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between p-3 rounded-xl text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-forest-700 text-[#FAF7F2]'
                      : 'text-charcoal-800 hover:bg-[#FAF7F2]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      className={`w-4 h-4 ${
                        isActive ? 'text-gold-300' : 'text-sage-600'
                      }`}
                    />
                    <span>{link.name}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </Link>
              );
            })}
          </nav>

          {/* Mobile Authentication */}
          {!loading && (
            <div className="pt-3 border-t border-[#E5DFD5]">
              {user ? (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm font-semibold text-forest-800 px-3">
                    <UserRound className="w-4 h-4" />
                    <span className="truncate">
                      {user.email || 'Your Account'}
                    </span>
                  </div>

                  <button
                    onClick={handleSignOut}
                    className="w-full flex items-center gap-3 p-3 rounded-xl text-sm font-semibold text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  <Link
                    href="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center p-3 rounded-xl border border-forest-700 text-forest-800 text-sm font-semibold"
                  >
                    Sign In
                  </Link>

                  <Link
                    href="/signup"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center p-3 rounded-xl bg-forest-700 text-white text-sm font-semibold"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          )}

          <div className="pt-2 border-t border-[#E5DFD5] flex items-center justify-between text-xs text-charcoal-500">
            <span>Bilingual Audio: English & Telugu</span>
            <span className="font-semibold text-forest-700">19 Summaries</span>
          </div>
        </div>
      )}
    </header>
  );
};

export const Navbar: React.FC = () => {
  return (
    <React.Suspense
      fallback={
        <header className="sticky top-0 z-40 w-full bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E5DFD5] shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-forest-800" />
              <span className="text-xl sm:text-2xl font-black text-forest-800 font-serif">
                BOOKLY
              </span>
            </div>
          </div>
        </header>
      }
    >
      <NavbarContent />
    </React.Suspense>
  );
};