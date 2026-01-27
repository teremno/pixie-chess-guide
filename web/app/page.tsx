import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
        Pixie Chess Guide
      </h1>
      <p className="mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-400 md:text-xl">
        Community-made guide for Pixie Chess (beta)
      </p>
      <Link
        href="/pieces"
        className="w-full rounded-lg bg-blue-600 px-8 py-3 text-center font-semibold text-white transition-colors hover:bg-blue-700 md:w-auto"
      >
        View Pieces
      </Link>
    </main>
  );
}
