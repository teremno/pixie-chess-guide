import pieces from "@/data/pieces.json";

export default async function PieceDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const piece = pieces.find((p) => p.id === id);

    if (!piece) {
        return (
            <main style={{ padding: 24 }}>
                <h1>Piece not found</h1>
                <p><strong>DEBUG INFO:</strong></p>
                <p>Params ID: {id}</p>
                <p>Available IDs: {pieces.map(p => p.id).join(", ")}</p>
                <p>Total pieces: {pieces.length}</p>
            </main>
        );
    }

    return (
        <main style={{ padding: 24 }}>
            <h1>{piece.name}</h1>
            <p>{piece.short}</p>

            <h3>Rules</h3>
            <ul>
                {piece.rules.map((rule, index) => (
                    <li key={index}>{rule}</li>
                ))}
            </ul>
        </main>
    );
}

