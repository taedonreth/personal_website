"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useSound } from "@/providers/SoundProvider";

export default function Home() {
  const { play } = useSound();
  return (
    <div className="min-h-screen overflow-hidden">
      <section className="relative mx-auto max-w-6xl px-6 pt-16 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1 flex flex-col items-center md:items-start gap-4">
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-hub-accent/40 to-transparent blur-md" />
              <div className="relative card p-2 bg-black/20">
                <Image src="/avatar.png" alt="Player avatar" width={220} height={220} className="rounded-xl object-cover" />
              </div>
            </div>
            <p className="text-sm text-white/70">I’m building immersive, performant web experiences.</p>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { href: "/projects", title: "Projects", desc: "League of Legends style", accent: "from-projects-accent" },
              { href: "/experience", title: "Experience", desc: "Minecraft-inspired", accent: "from-experience-accent" },
              { href: "/interests", title: "Interests", desc: "Clash of Clans vibe", accent: "from-interests-accent" },
              { href: "/newsletter", title: "Newsletter", desc: "Thoughts & writing", accent: "from-hub-accent" },
            ].map((p) => (
              <motion.a
                key={p.href}
                href={p.href}
                onMouseEnter={() => play("hover")}
                onClick={() => play("click")}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="group relative card p-5 bg-white/5"
              >
                <div className={`absolute inset-x-0 -top-0.5 h-px bg-gradient-to-r ${p.accent} to-transparent opacity-70`} />
                <div className="text-lg font-semibold text-white">{p.title}</div>
                <div className="text-sm text-white/70">{p.desc}</div>
                <div className="absolute inset-0 rounded-xl ring-1 ring-white/10 group-hover:ring-white/20 transition" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
