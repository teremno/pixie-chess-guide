export default function PieceRules({ rules }: { rules: string[] }) {
    return (
        <ul className="space-y-3">
            {rules.map((rule, index) => (
                <li
                    key={index}
                    className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm leading-relaxed dark:border-white/5 dark:bg-white/5 dark:backdrop-blur-sm md:text-base"
                >
                    {rule}
                </li>
            ))}
        </ul>
    );
}
