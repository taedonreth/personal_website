import Badge from "@/components/Badge";
import { Shield } from "lucide-react";

export default function InterestsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-2xl font-semibold mb-2 flex items-center gap-2"><Shield size={18}/> Interests</h1>
      <div className="text-white/70 text-sm mb-4">Village layout: evolving structures and goals</div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {[
          "AI research lab",
          "Music studio",
          "Sports arena",
          "Reading library",
          "Exercise yard",
          "School projects",
          "Video games",
        ].map((name) => (
          <div key={name} className="card p-4 bg-gradient-to-b from-interests/10 to-transparent rounded-xl ring-1 ring-white/10">
            <div className="flex items-center justify-between mb-2">
              <div className="text-white text-sm font-medium">{name}</div>
              <Badge variant="gold">L2</Badge>
            </div>
            <div className="text-white/70 text-xs">Structure placeholder</div>
            <div className="mt-3 flex gap-2">
              <Badge variant="gold">Gold</Badge>
              <Badge variant="elixir">Elixir</Badge>
              <Badge variant="gem">Gems</Badge>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


