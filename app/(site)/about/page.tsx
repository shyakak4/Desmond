export const metadata = {
  title: 'About | Desmond Freeman Art',
  description: 'The history and artistic autonomy of Desmond Freeman.',
};

export default function AboutPage() {
  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center py-48 px-6">
      <div className="max-w-3xl text-center">
        <h1 className="font-serif text-5xl md:text-6xl text-neutral-950 tracking-tighter mb-8">
          About Desmond Freeman
        </h1>
        <p className="font-sans uppercase tracking-[0.2em] text-neutral-500 text-sm">
          Biography & Collection History Coming Soon
        </p>
      </div>
    </div>
  );
}
