import type { Metadata } from "next";
import { VT323, Orbitron } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Home, Swords, Shield, Target, Scroll } from "lucide-react";
import SoundProvider from "@/providers/SoundProvider";
import AudioToggle from "@/components/AudioToggle";

const vt323 = VT323({
  variable: "--font-vt323",
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
      <body className={`${vt323.variable} ${orbitron.variable} antialiased`}>
        <SoundProvider>
        <header className="hud">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-sm font-body">
              <div className="flex items-center gap-2">
                <span className="text-text-primary/90">LV.</span>
                <span className="text-rpg-accent text-lg font-bold">26</span>
                <div className="w-16 h-2 bg-gray-700 rounded-full ml-2">
                  <div className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>
              <span className="text-text-primary/80">Quest: <strong className="text-rpg-accent">Building Scalable Systems</strong></span>
              <span className="text-text-primary/80">Guild: <strong className="text-rpg-highlight">UCSB</strong></span>
            </div>
            <nav className="flex items-center gap-5">
              <Link href="/" className="nav-link flex items-center gap-2 hover:text-rpg-accent transition-colors"><Home size={16}/> Hub</Link>
              <Link href="/projects" className="nav-link flex items-center gap-2 hover:text-rpg-accent transition-colors"><Swords size={16}/> Projects</Link>
              <Link href="/experience" className="nav-link flex items-center gap-2 hover:text-rpg-accent transition-colors"><Shield size={16}/> Experience</Link>
              <Link href="/interests" className="nav-link flex items-center gap-2 hover:text-rpg-accent transition-colors"><Target size={16}/> Interests</Link>
              <Link href="/newsletter" className="nav-link flex items-center gap-2 hover:text-rpg-accent transition-colors"><Scroll size={16}/> Newsletter</Link>
            </nav>
          </div>
        </header>
        <div className="relative">
          <div className="ambient-dots pointer-events-none absolute inset-0" />
          <main className="relative">{children}</main>
          <AudioToggle />
        </div>
        </SoundProvider>
      </body>
    </html>
  );
}
