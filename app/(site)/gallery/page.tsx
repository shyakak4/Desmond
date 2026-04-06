import GalleryGrid from "../../components/gallery-grid";

export default function GalleryPage() {
  return (
    <main className="min-h-screen w-full mx-auto py-12 animate-in fade-in duration-1000 overflow-x-hidden">
      <div className="mb-20 mt-12 text-center px-6">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-tight">
          Selected Works
        </h1>
        <div className="h-[1px] w-24 bg-neutral-300 mx-auto mt-12"></div>
      </div>
      <div className="max-w-7xl mx-auto">
        <GalleryGrid />
      </div>
    </main>
  );
}