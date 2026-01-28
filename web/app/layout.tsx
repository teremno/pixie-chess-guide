import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChessBackground from "@/components/ChessBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pixie Chess Guide",
  description: "Community-made guide for Pixie Chess (beta)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ChessBackground />
        <div className="flex min-h-screen items-center justify-center px-4 py-8 md:px-8 md:py-12 lg:px-12">
          <div className="mx-auto w-full max-w-6xl overflow-hidden rounded-[2.5rem] border border-white/5 bg-purple-950/10 p-6 backdrop-blur-xl md:p-12 lg:p-16">
            <Header />
            <main>
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
