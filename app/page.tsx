'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import QuoteEngine from "./components/quote-engine";
import BookSwapper from "./components/book-swapper";
import Link from "next/link";

export default function Home() {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
    viewport: { once: true }
  };

  const blurIn = {
    initial: { opacity: 0, filter: "blur(10px)" },
    whileInView: { opacity: 1, filter: "blur(0px)" },
    transition: { duration: 1.2 },
    viewport: { once: true }
  };

  return (
    <div className="flex min-h-screen flex-col items-center text-foreground w-full overflow-x-hidden bg-background">
      
      {/* Centered Hero Section (Restored) */}
      <section className="flex flex-col items-center justify-center min-h-[85vh] gap-6 animate-in fade-in duration-1000 px-6 max-w-5xl mx-auto text-center mt-12 mb-12">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-tight">
          Desmond H. Freeman
        </h1>
        <div className="flex flex-col items-center gap-2">
          <p className="font-sans text-xs md:text-sm uppercase tracking-[0.3em] md:tracking-[0.4em] text-neutral-500">
            Architectural Artist & Illustrator
          </p>
          <p className="font-sans text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] text-neutral-400">
            Master of Arts (RCA) | Member of the Order of Australia (AM)
          </p>
        </div>

        <Link 
          href="#bio" 
          className="mt-16 px-10 py-4 border border-foreground hover:bg-foreground hover:text-background transition-colors duration-500 uppercase text-xs tracking-[0.3em]"
        >
          Enter Gallery
        </Link>
      </section>

      {/* Asymmetrical Feature Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-48 grid grid-cols-1 md:grid-cols-2 items-stretch gap-16 min-h-[90vh]">
        {/* Left Side: Floating Text */}
        <motion.div 
          {...fadeUp}
          className="flex flex-col justify-center items-start text-left h-full"
        >
          <h1 className="font-serif text-5xl md:text-7xl lg:text-7xl tracking-tighter leading-tight mb-12 text-neutral-900">
            Desmond Freeman: A Lifetime of Architectural Impression.
          </h1>
          <div className="border-l-4 border-neutral-950 pl-8">
            <p className="font-serif text-lg md:text-xl font-bold uppercase tracking-[0.2em] text-neutral-950 leading-loose">
              Master of Arts (RCA) 
              <br className="hidden md:block" /> 
              Member of the Order of Australia (AM)
            </p>
          </div>
        </motion.div>

        {/* Right Side: Book Swapper */}
        <div className="flex items-start justify-center h-full pt-12">
          <BookSwapper />
        </div>
      </section>

      {/* ========================================================= */}
      {/* TASK 2: "The Story Sections" (Chapter Spacing)            */}
      {/* ========================================================= */}
      <section className="w-full max-w-7xl mx-auto px-6 py-32 flex flex-col items-center justify-center">
        <h2 className="font-serif text-4xl md:text-5xl tracking-tighter mb-16 text-neutral-950 font-bold text-center max-w-3xl">
          From Global Interiors to Fine Art
        </h2>
        
        {/* Chapter 1: Ayala Museum */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-16 py-32 border-t border-neutral-100">
          <motion.div 
            {...blurIn}
            className="w-full md:w-1/2 aspect-[4/3] relative border border-neutral-200 bg-white p-2 group shadow-sm"
          >
            <div className="relative w-full h-full overflow-hidden">
              <Image 
                src="/v1775584502/ayalaMuseum_rwv5fs.png" 
                alt="Ayala Museum" 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-1000 grayscale hover:grayscale-0"
              />
            </div>
          </motion.div>
          <motion.div {...fadeUp} className="w-full md:w-1/2 flex flex-col items-start pr-12">
            <h3 className="font-serif text-3xl font-bold text-neutral-950 mb-6">Ayala Museum, Manila</h3>
            <p className="font-sans text-sm md:text-base leading-loose text-neutral-950 uppercase tracking-[0.1em] mb-6">
              Flagship museum architecture and interior narrative. As a Master of Arts (RCA), Desmond defined the creative process as solving complex spatial challenges for massive collection scale.
            </p>
          </motion.div>
        </div>

        {/* Chapter 2: Dome Queen Victoria */}
        <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-16 py-32">
          <motion.div {...fadeUp} className="w-full md:w-1/2 flex flex-col items-start pl-12">
            <h3 className="font-serif text-3xl font-bold text-neutral-950 mb-6">Queen Victoria Building</h3>
            <p className="font-sans text-sm md:text-base leading-loose text-neutral-950 uppercase tracking-[0.1em] mb-6">
              Iconic Sydney restoration project bringing 19th-century detailing into modern relevance. Today, as a Gold Medal Architectural Illustrator, this autonomy allows for the meticulous creation of his 50+ image city series.
            </p>
          </motion.div>
          <motion.div 
            {...fadeUp}
            className="w-full md:w-1/2 aspect-[3/4] relative border border-neutral-200 bg-white p-2 group shadow-xl"
          >
            <div className="relative w-full h-full overflow-hidden">
              <Image 
                src="/v1775584485/dome-Queen_kwckx6.jpg" 
                alt="Dome Queen Victoria" 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-1000 grayscale hover:grayscale-0"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* TASK 3: The Quote Engine "Sandwich"                       */}
      {/* ========================================================= */}
      <QuoteEngine />

      {/* ========================================================= */}
      {/* TASK 3: "London 2027" & The Bridge (Bottom Layer)         */}
      {/* ========================================================= */}
      <section className="w-full max-w-7xl mx-auto px-6 py-60 flex flex-col items-center justify-center gap-24">
        
        {/* The Architectural Narrator */}
        <motion.div 
          {...fadeUp}
          className="max-w-4xl text-center"
        >
          <h2 className="font-serif text-4xl md:text-6xl tracking-tighter mb-8 text-neutral-950 font-normal">
            The Architectural Narrator
          </h2>
          <div className="w-24 h-px bg-neutral-300 mx-auto mb-10"></div>
          <p className="font-sans text-sm md:text-base leading-loose text-neutral-950 uppercase tracking-[0.1em]">
            Graduated from the Royal College of Art, London (1964) — the global gold standard for design. Desmond’s mastery synthesizes historical gravitas with the precise analytical gaze of a trained architect, rendering cities not just as buildings, but as enduring cultural narratives.
          </p>
        </motion.div>

        {/* London Teaser Visual */}
        <motion.div 
          {...fadeUp}
          className="w-full aspect-[21/9] relative border border-neutral-200 bg-white p-2"
        >
          <div className="relative w-full h-full overflow-hidden group">
            <Image 
              src='/v1775584506/london_y6ir0x.jpg'
              alt="London Collection 2027"
              fill
              sizes="100vw"
              className="object-cover grayscale group-hover:grayscale-0 transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-background/80 flex flex-col items-center justify-center transition-opacity duration-1000 pointer-events-none">
               <h3 className="font-serif text-5xl md:text-7xl text-neutral-950 tracking-tighter mb-4 font-normal">London</h3>
               <p className="font-sans text-[10px] uppercase tracking-[0.5em] text-neutral-950">Coming 2027</p>
            </div>
          </div>
        </motion.div>

      </section>

    </div>
  );
}