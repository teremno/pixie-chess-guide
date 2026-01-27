import pieces from "@/data/pieces.json";
import PieceRules from "@/components/PieceRules";
import Link from "next/link";

export default async function PieceDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const piece = pieces.find((p) => p.id === id);

    if (!piece) {
        return (
            <main className="py-4">
                <Link
                    href="/pieces"
                    className="mb-6 inline-block text-blue-600 hover:text-blue-700 dark:text-blue-400"
                >
                    ← Back to Pieces
                </Link>
                <h1 className="text-3xl font-bold">Piece not found</h1>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                    The piece you're looking for doesn't exist.
                </p>
            </main>
        );
    }

    return (
        <main className="py-4">
            <Link
                href="/pieces"
                className="mb-6 inline-block text-blue-600 hover:text-blue-700 dark:text-blue-400"
            >
                ← Back to Pieces
            </Link>

            <h1 className="mb-4 text-3xl font-bold md:text-4xl">{piece.name}</h1>
            <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">{piece.short}</p>

            <h2 className="mb-4 text-2xl font-semibold">Rules</h2>
            <PieceRules rules={piece.rules} />
        </main>
    );
}

