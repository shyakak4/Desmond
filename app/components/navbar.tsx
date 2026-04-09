'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ShoppingBag, Search } from 'lucide-react';

const cities = [
  { name: 'New York', href: '/gallery/new-york' },
  { name: 'Paris', href: '/gallery/paris' },
  { name: 'Rome', href: '/gallery/rome' },
  { name: 'Venice', href: '/gallery/venice' },
  { name: 'South Highlands', href: '/gallery/south-highlands' }
];

export default function Navbar() {
  const [portfolioOpen, setPortfolioOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-neutral-200">
      <div className="flex items-center justify-between px-10 py-6 w-full">
        
        {/* Left Side: Logo */}
        <div className="flex items-center justify-start w-1/4">
          <div className="text-xl font-serif tracking-tighter">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              Desmond Freeman<span className="text-accent">.Art</span>
            </Link>
          </div>
        </div>
        
        {/* Center: Main Navigation Links */}
        <div className="flex items-center justify-center gap-8 w-2/4 h-full" onMouseLeave={() => setPortfolioOpen(false)}>
          <div 
            className="h-full flex items-center relative py-2"
            onMouseEnter={() => setPortfolioOpen(true)}
          >
            <button className="text-xs uppercase tracking-[0.2em] hover:text-accent transition-colors">
              Portfolio
            </button>
            
            {/* Mega Menu Dropdown */}
            {portfolioOpen && (
              <div 
                className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] mt-2 bg-background border border-neutral-200 p-8 shadow-sm transition-all duration-700 ease-out origin-top animate-in fade-in slide-in-from-top-2"
              >
                <div className="pb-4 mb-4 border-b border-neutral-100 flex justify-between items-center">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">Collections</span>
                </div>
                <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                  {cities.map((city) => (
                    <Link 
                      key={city.name} 
                      href={city.href}
                      className="text-xs uppercase tracking-[0.2em] leading-loose text-foreground hover:text-accent hover:translate-x-1 transition-all duration-300"
                      onClick={() => setPortfolioOpen(false)}
                    >
                      {city.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/books" className="text-xs uppercase tracking-[0.2em] hover:text-accent transition-colors py-2">
            Books
          </Link>
          <Link href="/about" className="text-xs uppercase tracking-[0.2em] hover:text-accent transition-colors py-2">
            About
          </Link>
          <Link href="/contact" className="text-xs uppercase tracking-[0.2em] hover:text-accent transition-colors py-2">
            Contact
          </Link>
        </div>

        {/* Right Side: Search & Shop Icons */}
        <div className="flex items-center justify-end gap-6 w-1/4">
          <button className="text-foreground hover:text-accent transition-all duration-300 hover:scale-110">
            <Search strokeWidth={1.2} className="w-[18px] h-[18px]" />
          </button>
          <button className="text-foreground hover:text-accent transition-all duration-300 hover:scale-110">
            <ShoppingBag strokeWidth={1.2} className="w-[18px] h-[18px]" />
          </button>
        </div>
        
      </div>
    </nav>
  );
}