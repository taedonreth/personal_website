type BadgeProps = {
  variant?: "gold" | "elixir" | "gem" | "role";
  children: string;
};

export default function Badge({ variant = "gold", children }: BadgeProps) {
  const styles = {
    gold: "bg-amber-500/15 text-amber-300 ring-1 ring-amber-400/30",
    elixir: "bg-fuchsia-500/15 text-fuchsia-300 ring-1 ring-fuchsia-400/30",
    gem: "bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/30",
    role: "bg-sky-500/15 text-sky-300 ring-1 ring-sky-400/30",
  } as const;
  return (
    <span className={`inline-flex items-center gap-1 rounded px-2 py-0.5 text-xs ${styles[variant]}`}>
      {children}
    </span>
  );
}


