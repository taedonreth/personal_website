"use client";

import CardFrame from "@/components/CardFrame";
import StatBar from "@/components/StatBar";
import { useState } from "react";
import { Swords } from "lucide-react";
import { useSound } from "@/providers/SoundProvider";

function Modal({ open, onClose, title }: { open: boolean; onClose: () => void; title: string }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 backdrop-blur-sm">
      <div className="w-full max-w-2xl rounded-xl overflow-hidden ring-1 ring-white/10 bg-[rgba(15,18,26,0.95)]">
        <div className="h-40 bg-gradient-to-r from-indigo-500/40 to-purple-500/30" />
        <div className="p-5">
          <div className="text-xl font-semibold mb-2">{title}</div>
          <p className="text-white/70 text-sm mb-4">LoL-style inspect modal. Drop a banner into public/banners/ and we can render it above.</p>
          <div className="flex justify-end">
            <button onClick={onClose} className="rounded px-3 py-1.5 bg-white/10 hover:bg-white/15 ring-1 ring-white/20">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { play } = useSound();
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-2xl font-semibold mb-6 flex items-center gap-2"><Swords size={18}/> Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <CardFrame key={i} rarity={i % 3 === 0 ? "legendary" : i % 2 === 0 ? "epic" : "rare"} className="card p-5 bg-gradient-to-b from-projects/10 to-transparent">
            <div className="flex items-center justify-between mb-1">
              <div className="text-white font-medium">Project {i + 1}</div>
              <button
                className="text-xs rounded px-2 py-1 bg-white/10 hover:bg-white/15 ring-1 ring-white/20"
                onMouseEnter={() => play("hover")}
                onClick={() => { play("click"); setOpenIndex(i); }}
              >Inspect</button>
            </div>
            <div className="text-white/70 text-sm mb-3">Champion card styling placeholder</div>
            <div className="space-y-2">
              <StatBar label="Performance" value={80 - (i % 3) * 10} />
              <StatBar label="DX" value={70 + (i % 4) * 5} />
              <StatBar label="Stability" value={60 + (i % 5) * 6} />
            </div>
          </CardFrame>
        ))}
      </div>
      <Modal open={openIndex !== null} onClose={() => setOpenIndex(null)} title={openIndex !== null ? `Project ${openIndex + 1}` : ""} />
    </div>
  );
}


