import pieces from "@/data/pieces.json";
import Link from "next/link";

export default function PiecesPage() {
    return (
        <main style={{ padding: 24 }}>
            <h1>Pieces</h1>

            <ul>
                {pieces.map((piece) => (
                    <li key={piece.id} style={{ marginBottom: 12 }}>
                        <Link href={`/pieces/${piece.id}`}>
                            <strong>{piece.name}</strong>
                        </Link>

                        <br />
                        {piece.short}
                    </li>
                ))}
            </ul>
        </main>
    );
}
