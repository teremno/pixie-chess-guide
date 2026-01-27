import Link from "next/link";

interface Piece {
    id: string;
    name: string;
    short: string;
    type: string;
}

export default function PieceCard({ piece }: { piece: Piece }) {
    return (
        <div className="flex h-full flex-col rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
            <div className="mb-2 flex items-start justify-between gap-2">
                <h3 className="text-lg font-semibold">
                    {piece.name}
                </h3>
                <span className="shrink-0 rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    {piece.type}
                </span>
            </div>
            <p className="mb-4 flex-grow text-sm text-gray-600 dark:text-gray-400">
                {piece.short}
            </p>
            <Link
                href={`/pieces/${piece.id}`}
                className="inline-block rounded bg-blue-600 px-4 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-blue-700"
            >
                View Details
            </Link>
        </div>
    );
}
