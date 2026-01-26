export default function PieceDetailPage({ params }: { params: { id: string } }) {
    return (
        <main style={{ padding: 24 }}>
            <h1>Piece: {params.id}</h1>
            <p>Detail page (work in progress)</p>
        </main>
    );
}
