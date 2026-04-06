import Image from 'next/image';

const mockWorks = [
  { id: 1, title: 'The Pantheon Study', year: '2026', image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=800' },
  { id: 2, title: 'Parisian Café', year: '2025', image: 'https://images.unsplash.com/photo-1549144490-3444eb066d79?q=80&w=800' },
  { id: 3, title: 'Florence Cathedral', year: '2025', image: 'https://images.unsplash.com/photo-1541336032412-2048a678540d?q=80&w=800' },
  { id: 4, title: 'Venetian Canal', year: '2024', image: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?q=80&w=800' },
  { id: 5, title: 'Colosseum Sketch', year: '2024', image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=800' },
  { id: 6, title: 'St. Peter\'s Basilica', year: '2023', image: 'https://images.unsplash.com/photo-1541336032412-2048a678540d?q=80&w=800' },
];

export default function GalleryGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 p-8 pt-20">
      {mockWorks.map((work) => (
        <div key={work.id} className="group cursor-pointer">
          <div className="relative aspect-[4/5] bg-neutral-100 overflow-hidden border border-transparent group-hover:border-neutral-200 transition-colors duration-700">
            <Image 
              src={work.image} 
              alt={work.title} 
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
            />
          </div>
          <div className="mt-6 flex flex-col items-center">
            <h3 className="font-serif text-lg uppercase tracking-widest text-center">{work.title}</h3>
            <p className="text-xs text-neutral-500 italic mt-2">Graphite on Paper, {work.year}</p>
          </div>
        </div>
      ))}
    </div>
  );
}