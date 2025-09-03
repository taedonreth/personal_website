import { ReactNode } from "react";

type CardFrameProps = {
  rarity?: "common" | "rare" | "epic" | "legendary";
  children: ReactNode;
  className?: string;
};

const rarityToClasses: Record<NonNullable<CardFrameProps["rarity"]>, string> = {
  common: "ring-white/10",
  rare: "ring-sky-400/50 shadow-sky-400/30",
  epic: "ring-fuchsia-400/60 shadow-fuchsia-400/30",
  legendary: "ring-amber-400/70 shadow-amber-400/40",
};

export default function CardFrame({ rarity = "common", children, className = "" }: CardFrameProps) {
  const ring = rarityToClasses[rarity];
  return (
    <div
      className={`relative rounded-xl ring-1 ${ring} shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition-transform duration-150 hover:scale-[1.01] ${className}`}
    >
      <div className="absolute inset-0 rounded-xl pointer-events-none bg-gradient-to-b from-white/5 to-transparent" />
      <div className="relative">{children}</div>
    </div>
  );
}


