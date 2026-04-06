'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import QuoteEngine from "./components/quote-engine";

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
      <section className="w-full max-w-7xl mx-auto px-6 py-48 flex flex-col-reverse md:flex-row items-center justify-between gap-16 min-h-[90vh]">
        {/* Left Side: Floating Text */}
        <motion.div 
          {...fadeUp}
          className="w-full md:w-3/5 flex flex-col items-start text-left"
        >
          <h1 className="font-serif text-5xl md:text-7xl lg:text-7xl tracking-tighter leading-tight mb-8 text-neutral-900">
            Desmond Freeman: A Lifetime of Architectural Impression.
          </h1>
          <p className="font-sans text-[10px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.4em] text-neutral-400 border-l border-neutral-300 pl-6 leading-loose">
            Master of Arts (RCA) <br className="hidden md:block" /> Member of the Order of Australia (AM)
          </p>
        </motion.div>

        {/* Right Side: Tall Vertical Crop */}
        <motion.div 
          {...fadeUp}
          className="w-full md:w-2/5 aspect-[3/4] relative"
        >
          <Image 
            src="/placeholders/Paris-Impressions-in-Ink.jpg"
            alt="Paris Impressions in Ink"
            fill
            className="object-cover hover:scale-105 transition-transform duration-1000 origin-center border border-neutral-200 p-2 bg-white"
          />
        </motion.div>
      </section>

      {/* ========================================================= */}
      {/* TASK 2: The Fading Quote Engine (The "Sandwich" Center)   */}
      {/* ========================================================= */}
      <QuoteEngine />

      {/* ========================================================= */}
      {/* TASK 1: The "Problem Solver" Section (Top Layer)          */}
      {/* ========================================================= */}
      <section className="w-full max-w-7xl mx-auto px-6 py-60 flex flex-col md:flex-row items-center justify-center gap-16">
        
        {/* Staggered Images */}
        <div className="w-full md:w-1/2 relative flex items-center justify-center h-[700px]">
          <motion.div 
            {...blurIn}
            className="absolute top-0 right-0 md:right-10 w-[60%] aspect-square z-10 shadow-sm border border-neutral-200 bg-white p-2 group"
          >
            <div className="relative w-full h-full overflow-hidden">
              <Image 
                src="/placeholders/ayalaMuseum.png" 
                alt="Ayala Museum" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-1000 grayscale hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-neutral-950/70 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                 <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-white mb-2">Ayala Museum, Manila</p>
                 <p className="font-serif text-xs text-neutral-200 font-normal">Flagship museum architecture and interior narrative, solving for massive collection scale.</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            {...fadeUp}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute bottom-0 left-0 md:left-0 w-[70%] aspect-[4/3] z-20 shadow-xl border border-neutral-200 bg-white p-2 group"
          >
            <div className="relative w-full h-full overflow-hidden">
              <Image 
                src="/placeholders/dome-Queen.jpg" 
                alt="Dome Queen Victoria" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-1000 grayscale hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-neutral-950/70 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                 <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-white mb-2">Queen Victoria Building</p>
                 <p className="font-serif text-xs text-neutral-200 font-normal">Iconic Sydney restoration project bringing 19th-century detailing into modern relevance.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Text Narration */}
        <motion.div 
          {...fadeUp}
          className="w-full md:w-1/3 flex flex-col items-start text-left"
        >
          <h2 className="font-serif text-4xl md:text-5xl tracking-tighter mb-8 text-neutral-950 font-normal">
            "Solving for space, budget, and time."
          </h2>
          <p className="font-sans text-sm md:text-base leading-loose text-neutral-950 mb-6 uppercase tracking-[0.1em]">
            Desmond defines the creative process as solving complex spatial challenges. After a global career designing for others, he transitioned in 2014 to Artistic Autonomy.
          </p>
          <p className="font-sans text-sm md:text-base leading-loose text-neutral-950 mb-8 uppercase tracking-[0.1em]">
            Now, as his own client, this autonomy allows for the meticulous creation of his 50+ image city series.
          </p>
        </motion.div>
      </section>

      {/* ========================================================= */}
      {/* TASK 3: "London 2027" & The Bridge (Bottom Layer)         */}
      {/* ========================================================= */}

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
              src="/placeholders/london.webp"
              alt="London Collection 2027"
              fill
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