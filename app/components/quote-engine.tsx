'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function QuoteEngine() {
  const [currentQuote, setCurrentQuote] = useState(0);
  const quotes = [
    { city: "New York", quote: "One belongs to New York instantly, one belongs to it as much in five minutes as in five years.", author: "Tom Wolfe", year: "1979" },
    { city: "Venice", quote: "Venice is like eating an entire box of chocolate liqueurs in one go.", author: "Truman Capote", year: "1956" },
    { city: "Rome", quote: "Rome is the city of echoes, the city of illusions, and the city of yearning.", author: "Giotto di Bondone", year: "1300" },
    { city: "Paris", quote: "A walk about Paris will provide lessons in history, beauty, and in the point of life.", author: "Thomas Jefferson", year: "1789" },
    { city: "Southern Highlands", quote: "There is a quiet beauty in the highlands that speaks to the very soul of the earth.", author: "Arthur Streeton", year: "1920" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-48 px-6 bg-[#fafafa] border-y border-neutral-200">
      <div className="max-w-4xl mx-auto relative h-[400px] flex items-center justify-center">
        {quotes.map((q, idx) => (
          <motion.div
            key={idx}
            className="absolute inset-0 w-full flex flex-col items-center justify-center gap-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: currentQuote === idx ? 1 : 0 }}
            transition={{ duration: 1.5 }}
            style={{ pointerEvents: currentQuote === idx ? 'auto' : 'none' }}
          >
            {/* Top: City */}
            <div className="font-serif text-3xl md:text-4xl tracking-widest text-neutral-950 uppercase font-bold text-center">
              {q.city}
            </div>
            
            {/* Center: Quote */}
            <div className="w-full text-center px-8 relative">
              <span className="text-3xl md:text-5xl font-serif text-neutral-300 absolute -left-2 md:-left-8 top-0">«</span>
              <h3 className="font-serif text-3xl md:text-5xl text-neutral-950 font-bold italic leading-relaxed py-2 md:px-12 inline-block">
                {q.quote}
              </h3>
              <span className="text-3xl md:text-5xl font-serif text-neutral-300 absolute -right-0 md:-right-8 bottom-0">»</span>
            </div>

            {/* Bottom: Author & Year */}
            <div className="flex flex-col items-center text-center mt-4">
              <span className="font-sans text-sm text-neutral-950 uppercase tracking-widest font-normal">
                {q.author}
              </span>
              <span className="font-sans text-xs text-neutral-500 font-normal mt-2">
                {q.year}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
