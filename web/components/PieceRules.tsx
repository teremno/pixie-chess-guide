export default function PieceRules({ rules }: { rules: string[] }) {
    return (
        <ul className="space-y-3">
            {rules.map((rule, index) => (
                <li
                    key={index}
                    className="rounded-lg border border-white/5 bg-white/5 p-4 text-sm leading-relaxed md:text-base"
                >
                    {rule}
                </li>
            ))}
        </ul>
    );
}
