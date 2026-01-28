import Link from "next/link";
import Image from "next/image";
import PieceCard from "@/components/PieceCard";
import pieces from "@/data/pieces.json";

export default function Home() {
  // Get first 6 pieces for preview
  const previewPieces = pieces.slice(0, 6);
  
  return (
    <div className="flex flex-col gap-16 pb-16 md:gap-24 md:pb-24">
      {/* Hero Section */}
      <section className="relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden rounded-3xl bg-gray-950 px-4 py-20 text-center md:min-h-[75vh]">
        {/* Animated Background Glow */}
        <div className="animate-glow pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 bg-purple-600/20 blur-[120px] md:h-[700px] md:w-[700px]"></div>
        
        {/* Subtle Sparkles (Pure CSS) */}
        <div className="animate-sparkle pointer-events-none absolute inset-0 -z-10 opacity-20" 
             style={{ backgroundImage: 'radial-gradient(circle, #a855f7 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

        {/* Hero Logo / Banner */}
        <div className="relative mb-8 h-32 w-full max-w-sm md:h-48 md:max-w-md lg:h-56 lg:max-w-xl">
          <Image
            src="/brand/pixie-logo.png"
            alt="Pixie Chess Logo"
            fill
            className="object-contain"
            priority
          />
          {/* Fallback if image is missing */}
          <div className="absolute inset-0 flex items-center justify-center text-4xl font-black tracking-tighter text-white md:text-6xl lg:text-7xl">
            {/* This text only shows if image doesn't load or during development */}
            <span className="sr-only">Pixie Chess</span>
          </div>
        </div>

        {/* Tagline */}
        <p className="mb-10 max-w-2xl text-lg font-medium text-gray-300 md:text-xl lg:text-2xl">
          Community-made guide for Pixie Chess (beta)
        </p>

        {/* CTA Buttons */}
        <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
          <Link
            href="/pieces"
            className="rounded-xl bg-purple-600 px-10 py-4 text-center text-lg font-bold text-white transition-all hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/25 active:scale-95"
          >
            Browse Pieces
          </Link>
          <Link
            href="/pieces"
            className="rounded-xl border-2 border-purple-500/30 bg-purple-500/10 px-10 py-4 text-center text-lg font-bold text-purple-300 backdrop-blur-sm transition-all hover:border-purple-500/50 hover:bg-purple-500/20 active:scale-95"
          >
            How it works
          </Link>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="mb-6 text-3xl font-black tracking-tight text-gray-900 dark:text-white md:text-4xl">
          What is Pixie Chess?
        </h2>
        <div className="mx-auto max-w-prose space-y-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
          <p>
            Pixie Chess is an innovative chess variant that introduces unique pieces with special abilities and movement patterns beyond traditional chess.
          </p>
          <p>
            This community-driven guide helps players understand the game mechanics, piece abilities, and strategic possibilities. Whether you're new to Pixie Chess or looking to master advanced tactics, you'll find comprehensive information about every piece and rule.
          </p>
        </div>
      </section>

      {/* Pieces Preview Section */}
      <section className="px-4 sm:px-6">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <h2 className="text-3xl font-black tracking-tight text-gray-900 dark:text-white md:text-4xl">
            Explore Pieces
          </h2>
          <Link
            href="/pieces"
            className="group flex items-center font-bold text-purple-600 transition-colors hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
          >
            View all pieces
            <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {previewPieces.length > 0 ? (
            previewPieces.map((piece) => (
              <PieceCard key={piece.id} piece={piece} />
            ))
          ) : (
            <div className="col-span-full rounded-2xl border-2 border-dashed border-gray-200 p-12 text-center dark:border-gray-800">
              <p className="text-gray-500 dark:text-gray-400">
                Piece catalog loading or empty...
              </p>
            </div>
          )}
          
          {/* Placeholders for coming soon pieces if catalog is small */}
          {previewPieces.length < 3 && Array.from({ length: 3 - previewPieces.length }).map((_, i) => (
            <div key={`placeholder-${i}`} className="flex h-full flex-col rounded-xl border border-dashed border-gray-200 p-6 dark:border-gray-800">
                <div className="mb-3 h-6 w-1/2 rounded-md bg-gray-100 dark:bg-gray-800"></div>
                <div className="mb-6 h-4 w-full rounded-md bg-gray-50 dark:bg-gray-900"></div>
                <div className="mt-auto h-10 w-full rounded-lg bg-gray-100 dark:bg-gray-800"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Future Features Section */}
      <section className="px-4 sm:px-6">
        <h2 className="mb-10 text-3xl font-black tracking-tight text-gray-900 dark:text-white md:text-4xl">
          Coming Soon
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Movement Examples",
              description: "Interactive board displays showing exactly how each special piece maneuvers."
            },
            {
              title: "Strategy Guide",
              description: "Pro tips on how to combine piece abilities for powerful opening and endgame tactics."
            },
            {
              title: "Special Rules",
              description: "Deep dive into en passant, promotion, and unique Pixie-specific game mechanics."
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl border border-gray-200 bg-white p-8 transition-colors hover:border-purple-200 dark:border-gray-800 dark:bg-gray-900/50 dark:hover:border-purple-900/50"
            >
              <div className="absolute right-4 top-4 rounded-full bg-purple-100 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
                Waitlist
              </div>
              <h3 className="mb-3 text-xl font-bold">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
