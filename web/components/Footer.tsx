import Link from "next/link";

export default function Footer() {
    return (
        <footer className="mt-16 border-t border-gray-200 pt-8 dark:border-gray-800 md:mt-24">
            <div className="flex flex-col items-center gap-4 text-center text-sm text-gray-600 dark:text-gray-400">
                <div>
                    <p className="font-semibold">Pixie Chess Guide</p>
                    <p className="mt-1">Unofficial community project</p>
                </div>
                <div className="flex gap-4">
                    <Link
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-purple-600 dark:hover:text-purple-400"
                    >
                        GitHub
                    </Link>
                </div>
                <p className="text-xs">
                    Made with ❤️ by the community
                </p>
            </div>
        </footer>
    );
}
