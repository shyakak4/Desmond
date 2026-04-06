'use client';

import Image from 'next/image';
import Link from 'next/link';

const collections = [
  { name: 'Venice', href: '/gallery/venice', image: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?q=80&w=800' },
  { name: 'Paris', href: '#', image: '/placeholders/paris.webp' },
  { name: 'Rome', href: '/gallery/rome', image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=800' },
  { name: 'New York', href: '/gallery/new-york', image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=800' },
  { name: 'London - Coming 2027', href: '#', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800', isPlaceholder: true }
];

export default function CollectionSelector() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h2 className="font-serif text-3xl md:text-4xl tracking-tighter">Impressions in Ink</h2>
        <div className="h-[1px] w-24 bg-neutral-300 mx-auto mt-6"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {collections.map((collection) => (
          <Link key={collection.name} href={collection.href} className="group block" onClick={(e) => collection.isPlaceholder && e.preventDefault()}>
            <div className="relative aspect-[4/5] md:aspect-square overflow-hidden border border-transparent group-hover:border-neutral-200 transition-colors duration-700">
              <Image 
                src={collection.image} 
                alt={collection.name} 
                fill
                className={`object-cover transition-all duration-1000 ease-in-out ${collection.isPlaceholder ? 'grayscale opacity-60' : 'grayscale group-hover:grayscale-0 group-hover:scale-105'}`}
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-700 pointer-events-none" />
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-center pointer-events-none w-full px-4">
                <h3 className={`font-serif uppercase tracking-widest ${collection.isPlaceholder ? 'text-lg text-neutral-300' : 'text-2xl md:text-3xl'}`}>{collection.name}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
