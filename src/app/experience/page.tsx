import PixelDivider from "@/components/PixelDivider";
import { Shield } from "lucide-react";

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12 bg-mc">
      <h1 className="text-2xl font-semibold mb-2 flex items-center gap-2"><Shield size={18}/> Experience</h1>
      <PixelDivider />
      <div className="space-y-4">
        {[
          { role: "Engineer I", mat: "Wood", years: 1 },
          { role: "Engineer II", mat: "Iron", years: 2 },
          { role: "Senior Engineer", mat: "Diamond", years: 3 },
        ].map((r, idx) => (
          <div key={idx} className="card p-5 bg-gradient-to-r from-experience/10 to-transparent rounded-xl ring-1 ring-white/10">
            <div className="text-white">{r.role}</div>
            <div className="text-white/70 text-sm">Material tier: {r.mat}</div>
            <div className="mt-2 flex items-center gap-1">
              {Array.from({ length: r.years }).map((_, i) => (
                <span key={i} aria-label="heart" title="Tenure" className="text-red-400">❤</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


