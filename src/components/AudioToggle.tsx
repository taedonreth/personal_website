"use client";

import { useSound } from "@/providers/SoundProvider";

export default function AudioToggle() {
  const { enabled, toggle, play } = useSound();
  return (
    <button
      type="button"
      aria-label={enabled ? "Mute sounds" : "Unmute sounds"}
      onClick={() => {
        play("click");
        toggle();
      }}
      className="fixed right-4 bottom-4 z-50 rounded-full bg-white/10 text-white ring-1 ring-white/20 backdrop-blur px-3 py-2 text-sm hover:bg-white/15"
    >
      {enabled ? "🔊" : "🔇"}
    </button>
  );
}


