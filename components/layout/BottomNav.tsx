'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, Compass, Bookmark, Search, Grid } from 'lucide-react';

export const BottomNav: React.FC = () => {
  const pathname = usePathname();

  const navItems = [
    { label: 'Discover', href: '/', icon: Compass },
    { label: 'Categories', href: '/categories', icon: Grid },
    { label: 'Search', href: '/search', icon: Search },
    { label: 'Library', href: '/library', icon: Bookmark },
  ];

  return (
    <nav
      aria-label="Mobile Navigation"
      className="fixed bottom-0 left-0 right-0 z-30 md:hidden bg-white/95 backdrop-blur-md border-t border-[#E5DFD5] px-4 py-2 flex items-center justify-around shadow-lg"
    >
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive =
          pathname === item.href ||
          (item.href === '/' && pathname === '/discover');

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center gap-1 text-[11px] font-medium transition-colors ${
              isActive ? 'text-forest-700 font-bold' : 'text-charcoal-500 hover:text-charcoal-900'
            }`}
          >
            <Icon className={`w-5 h-5 ${isActive ? 'text-forest-700' : 'text-charcoal-400'}`} />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};
