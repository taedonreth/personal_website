import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Trophy, Swords, Shield, Newspaper } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Taedon Reth — Portfolio",
  description: "Gaming-inspired portfolio showcasing projects, experience, and interests.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="hud">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-sm">
              <span className="text-white/90">Lv. <strong className="text-hub-accent">3</strong></span>
              <span className="text-white/80">Quest: <strong className="text-white">Building immersive personal world</strong></span>
              <span className="text-white/80">Guild: <strong className="text-white">Your Company</strong></span>
            </div>
            <nav className="flex items-center gap-5">
              <Link href="/" className="nav-link flex items-center gap-2"><Shield size={16}/> Hub</Link>
              <Link href="/projects" className="nav-link flex items-center gap-2"><Swords size={16}/> Projects</Link>
              <Link href="/experience" className="nav-link flex items-center gap-2"><Trophy size={16}/> Experience</Link>
              <Link href="/interests" className="nav-link flex items-center gap-2"><Shield size={16}/> Interests</Link>
              <Link href="/newsletter" className="nav-link flex items-center gap-2"><Newspaper size={16}/> Newsletter</Link>
            </nav>
          </div>
        </header>
        <div className="relative">
          <div className="ambient-dots pointer-events-none absolute inset-0" />
          <main className="relative">{children}</main>
        </div>
      </body>
    </html>
  );
}
