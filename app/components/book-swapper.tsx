'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const books = [
  { id: 1, title: 'Venice: Impressions in Ink', year: '2016', award: 'Gold Medal Winner', image: '/v1775584486/venice_krnklc.jpg'},
  { id: 2, title: 'Paris: Impressions in Ink', year: '2018', award: 'Australian Embassy, Paris', image: '/v1775584483/Paris-Impressions-in-Ink_h1mbkm.jpg' },
  { id: 3, title: 'Rome: Impressions in Ink', year: '2020', award: 'Rome Collection', image: '/v1775584480/Rome_atjcsc.webp' },
  { id: 4, title: 'New York: Impressions in Ink', year: '2023', award: '54 Detailed Views', image: '/v1775584479/NewYork_lzczjw.webp' },
];

export default function BookSwapper() {
  const [cards, setCards] = useState(books);
  const [exitingCard, setExitingCard] = useState<number | null>(null);

  useEffect(() => {
    const cycleInterval = setInterval(() => {
      setExitingCard(cards[0].id);

      setTimeout(() => {
        setCards((prevCards) => {
          const newCards = [...prevCards];
          const topCard = newCards.shift();
          if (topCard) newCards.push(topCard);
          return newCards;
        });
        setExitingCard(null);
      }, 400);
    }, 4000); // 4-second automation

    return () => clearInterval(cycleInterval);
  }, [cards]);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="relative w-full max-w-sm aspect-[3/4] mb-12 flex justify-center items-center perspective-[1200px]">
        {cards.map((book, index) => {
          const isTop = index === 0;
          const isExiting = exitingCard === book.id;
          const zIndex = cards.length - index;
          
          const baseRotate = isTop ? 0 : (index % 2 === 0 ? 2 : -2);
          const scale = isTop ? 1 : (index === 1 ? 0.95 : 0.9);
          const yOffset = isTop ? 0 : index * 30;

          const exitProps = isExiting ? { scale: 0.8, opacity: 0, zIndex: 0 } : {};

          return (
            <motion.div
              key={book.id}
              initial={false}
              animate={{ 
                opacity: 1, 
                scale, 
                y: yOffset,
                rotate: baseRotate,
                zIndex,
                ...exitProps
              }}
              transition={{ type: "spring", stiffness: 60, damping: 15 }}
              className="absolute w-full h-full shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-white p-2 border border-neutral-200"
            >
              <div className="relative w-full h-full bg-neutral-100">
                <Image 
                  src={book.image} 
                  alt={book.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover" 
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="flex flex-col items-center justify-center text-center gap-4 mt-4 max-w-md min-h-[140px]">
        <motion.h3 
          className="font-serif text-2xl md:text-3xl text-neutral-950 font-bold"
          key={cards[0].title}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {cards[0].title}
        </motion.h3>
        <motion.p 
          className="font-serif text-sm md:text-base text-neutral-950 font-bold"
          key={cards[0].year}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {cards[0].year} — {cards[0].award}
        </motion.p>
      </div>
    </div>
  );
}
