import type { Metadata } from "next";
import { Press_Start_2P, Orbitron } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Home, Swords, Shield, Target, Scroll } from "lucide-react";
import SoundProvider from "@/providers/SoundProvider";
import AudioToggle from "@/components/AudioToggle";

const pressStart = Press_Start_2P({
  variable: "--font-minecraft",
  subsets: ["latin"],
  weight: "400",
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
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
      <body className={`${pressStart.variable} ${orbitron.variable} antialiased`}>
        <SoundProvider>
        <header className="hud">
          <div className="w-full px-2 sm:px-4 py-3 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-xs flex-1">
              <div className="flex items-center gap-1 minecraft-text whitespace-nowrap">
                <span>LV</span>
                <span className="text-base font-bold text-yellow-400 leading-none">26</span>
                <div className="w-24 h-1.5 bg-gray-700 ml-1" style={{border: '1px solid #8B8B8B'}}>
                  <div className="h-full bg-green-500" style={{width: '85%'}} />
                </div>
              </div>
              <span className="minecraft-text whitespace-nowrap max-w-[36ch] overflow-hidden text-ellipsis">Quest: <strong className="text-yellow-400">Machine Learning</strong></span>
              <span className="minecraft-text whitespace-nowrap">Guild: <strong className="text-yellow-400">UCSB</strong></span>
            </div>
            <nav className="flex items-center gap-4">
              <Link href="/" className="nav-link hover:text-yellow-400 transition-colors"><Home size={12}/> Hub</Link>
              <Link href="/experience" className="nav-link hover:text-yellow-400 transition-colors"><Shield size={12}/> Experience</Link>
              <Link href="/projects" className="nav-link hover:text-yellow-400 transition-colors"><Swords size={12}/> Projects</Link>
              <Link href="/interests" className="nav-link hover:text-yellow-400 transition-colors"><Target size={12}/> Interests</Link>
              <Link href="/newsletter" className="nav-link hover:text-yellow-400 transition-colors"><Scroll size={12}/> Newsletter</Link>
            </nav>
          </div>
        </header>
        <div className="relative">
          {/* Pixel night sky background (global for all pages) */}
          <div aria-hidden className="pixel-night-sky">
            <div className="sky-base" />
            <div className="stars stars-1" />
            <div className="stars stars-2" />
            <div className="stars stars-3" />
            <div className="cloud c1" />
            <div className="cloud c2" />
            <div className="cloud c3" />
            <div className="cloud c4" />
            <div className="cloud c5" />
            <div className="cloud c6" />
          </div>
          <div className="ambient-dots pointer-events-none absolute inset-0" />
          <main className="relative">{children}</main>
          <AudioToggle />
        </div>
        </SoundProvider>
      </body>
    </html>
  );
}
