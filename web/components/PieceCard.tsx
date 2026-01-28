import Link from "next/link";

interface Piece {
    id: string;
    name: string;
    short: string;
    type: string;
}

export default function PieceCard({ piece }: { piece: Piece }) {
    return (
        <div className="group flex h-full flex-col rounded-xl bg-white/5 p-6 transition-all hover:bg-white/10">
            <div className="mb-3 flex items-start justify-between gap-2">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {piece.name}
                </h3>
                <span className="shrink-0 rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-semibold text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
                    {piece.type}
                </span>
            </div>
            <p className="mb-6 flex-grow text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {piece.short}
            </p>
            <Link
                href={`/pieces/${piece.id}`}
                className="inline-flex items-center justify-center rounded-lg bg-purple-600 px-4 py-2 text-center text-sm font-semibold text-white transition-all hover:bg-purple-700 active:scale-95"
            >
                View Details
            </Link>
        </div>
    );
}
