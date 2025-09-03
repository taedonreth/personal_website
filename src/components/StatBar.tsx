type StatBarProps = {
  label: string;
  value: number; // 0..100
};

export default function StatBar({ label, value }: StatBarProps) {
  const clamped = Math.max(0, Math.min(100, value));
  return (
    <div className="space-y-1">
      <div className="text-xs text-white/70">{label}</div>
      <div className="h-2 w-full rounded bg-white/10 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-amber-400 to-yellow-300"
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  );
}


