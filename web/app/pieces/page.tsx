import pieces from "@/data/pieces.json";
import PieceCard from "@/components/PieceCard";

export default function PiecesPage() {
    // Group pieces by type
    const groupedPieces = pieces.reduce((acc, piece) => {
        if (!acc[piece.type]) {
            acc[piece.type] = [];
        }
        acc[piece.type].push(piece);
        return acc;
    }, {} as Record<string, typeof pieces>);

    return (
        <main className="py-4">
            <h1 className="mb-8 text-3xl font-bold md:text-4xl">Pieces</h1>

            <div className="space-y-12">
                {Object.entries(groupedPieces).map(([type, typePieces]) => (
                    <section key={type}>
                        <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                        </h2>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {typePieces.map((piece) => (
                                <PieceCard key={piece.id} piece={piece} />
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </main>
    );
}
