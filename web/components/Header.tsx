import Link from "next/link";

export default function Header() {
    return (
        <header className="mb-12 md:mb-16">
            <nav className="flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="transition-opacity hover:opacity-80">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-purple-800 px-4 text-lg font-bold text-white md:h-12 md:text-xl">
                            Pixie Chess
                        </div>
                    </div>
                </Link>

                {/* Navigation Links */}
                <div className="flex items-center gap-6">
                    <Link 
                        href="/" 
                        className="text-sm font-medium text-gray-700 transition-colors hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 md:text-base"
                    >
                        Home
                    </Link>
                    <Link 
                        href="/pieces" 
                        className="text-sm font-medium text-gray-700 transition-colors hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 md:text-base"
                    >
                        Pieces
                    </Link>
                </div>
            </nav>
        </header>
    );
}
