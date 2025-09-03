"use client";

import { createContext, useCallback, useContext, useMemo, useRef, useState } from "react";
import { Howl } from "howler";

type SoundName = "hover" | "click";

type SoundContextValue = {
  enabled: boolean;
  toggle: () => void;
  play: (name: SoundName) => void;
};

const SoundContext = createContext<SoundContextValue | null>(null);

export function useSound() {
  const ctx = useContext(SoundContext);
  if (!ctx) throw new Error("useSound must be used within <SoundProvider>");
  return ctx;
}

export default function SoundProvider({ children }: { children: React.ReactNode }) {
  const [enabled, setEnabled] = useState(true);

  // Lazy-init and cache Howl instances
  const howls = useRef<Partial<Record<SoundName, Howl>>>({});

  const getOrCreate = useCallback((name: SoundName) => {
    if (howls.current[name]) return howls.current[name]!;
    const src = name === "hover" ? ["/sfx/hover.mp3"] : ["/sfx/click.mp3"];
    const h = new Howl({ src, volume: name === "hover" ? 0.15 : 0.2 });
    howls.current[name] = h;
    return h;
  }, []);

  const play = useCallback(
    (name: SoundName) => {
      if (!enabled) return;
      try {
        getOrCreate(name).play();
      } catch {
        // fail silently if asset missing
      }
    },
    [enabled, getOrCreate]
  );

  const toggle = useCallback(() => setEnabled((v) => !v), []);

  const value = useMemo(() => ({ enabled, toggle, play }), [enabled, toggle, play]);

  return <SoundContext.Provider value={value}>{children}</SoundContext.Provider>;
}


