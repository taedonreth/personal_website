export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-2xl font-semibold mb-6">Experience</h1>
      <div className="space-y-4">
        {[
          { role: "Engineer I", mat: "Wood" },
          { role: "Engineer II", mat: "Iron" },
          { role: "Senior Engineer", mat: "Diamond" },
        ].map((r, idx) => (
          <div key={idx} className="card p-5 bg-gradient-to-r from-experience/10 to-transparent">
            <div className="text-white">{r.role}</div>
            <div className="text-white/70 text-sm">Material tier: {r.mat}</div>
          </div>
        ))}
      </div>
    </div>
  );
}


