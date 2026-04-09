import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#fcfcfc] mt-32">
      <div className="border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-10 py-16">
          
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16 md:gap-8 mb-16">
            
            {/* Left Side: Portrait & Biography Context */}
            <div className="flex flex-col items-start gap-4">
              <div className="relative w-32 h-32 rounded-full overflow-hidden border border-neutral-100">
                {/* Fallback to Unsplash if local placeholder doesn't exist to prevent crash */}
                <Image 
                  src='/v1775584478/Desmond_ucybwu.jpg'
                  alt="Desmond Freeman Portrait" 
                  fill 
                  sizes="128px"
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>
              <div className="mt-4 flex flex-col items-start text-left">
                <h3 className="font-serif text-xl tracking-wide">Desmond Freeman</h3>
                <p className="font-sans text-xs uppercase tracking-widest text-neutral-400 mt-2">Architectural Artist</p>
              </div>
            </div>

            {/* Right Side: Links & Navigation Sub-Grid */}
            <div className="flex flex-col justify-start h-full">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 font-sans w-full">
                
                {/* Column 1: Cities */}
                <div className="flex flex-col gap-4">
                  <h4 className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-bold mb-2">Cities</h4>
                  <Link href="/gallery/new-york" className="text-neutral-600 hover:text-foreground transition-colors text-xs">New York</Link>
                  <Link href="/gallery/paris" className="text-neutral-600 hover:text-foreground transition-colors text-xs">Paris</Link>
                  <Link href="/gallery/rome" className="text-neutral-600 hover:text-foreground transition-colors text-xs">Rome</Link>
                  <Link href="/gallery/venice" className="text-neutral-600 hover:text-foreground transition-colors text-xs">Venice</Link>
                  <Link href="/gallery/southern-highlands" className="text-neutral-600 hover:text-foreground transition-colors text-xs">Southern Highlands</Link>
                </div>

                {/* Column 2: Resources */}
                <div className="flex flex-col gap-4">
                  <h4 className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-bold mb-2">Resources</h4>
                  <Link href="/books" className="text-neutral-600 hover:text-foreground transition-colors text-xs">Books</Link>
                  <Link href="/shop" className="text-neutral-600 hover:text-foreground transition-colors text-xs">Shop</Link>
                  <Link href="/shop/prints" className="text-neutral-600 hover:text-foreground transition-colors text-xs">Prints</Link>
                  <Link href="/commissions" className="text-neutral-600 hover:text-foreground transition-colors text-xs">Commissions</Link>
                </div>

                {/* Column 3: Socials */}
                <div className="flex flex-col gap-4">
                  <h4 className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-bold mb-2">Socials</h4>
                  <a href="#" className="text-neutral-600 hover:text-foreground transition-colors text-xs">X</a>
                  <a href="#" className="text-neutral-600 hover:text-foreground transition-colors text-xs">LinkedIn</a>
                  <a href="#" className="text-neutral-600 hover:text-foreground transition-colors text-xs">Instagram</a>
                  <a href="#" className="text-neutral-600 hover:text-foreground transition-colors text-xs">Facebook</a>
                </div>

                {/* Column 4: Company */}
                <div className="flex flex-col gap-4">
                  <h4 className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-bold mb-2">Company</h4>
                  <Link href="/about" className="text-neutral-600 hover:text-foreground transition-colors text-xs">About</Link>
                  <Link href="/press" className="text-neutral-600 hover:text-foreground transition-colors text-xs">Press</Link>
                  <Link href="/contact" className="text-neutral-600 hover:text-foreground transition-colors text-xs">Contact</Link>
                  <Link href="/privacy" className="text-neutral-600 hover:text-foreground transition-colors text-xs">Privacy Policy</Link>
                </div>

              </div>
            </div>

          </div>

          <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-neutral-400 pt-8 border-t border-neutral-100 w-full">
            <div className="font-serif italic capitalize tracking-normal text-sm text-foreground text-left mb-4 md:mb-0">
              Fine Art illustration
            </div>
            <div className="text-right">
              © 2026 Desmond Freeman Fine Arts PTY Ltd. All rights reserved.
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
