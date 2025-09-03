export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-2xl font-semibold mb-6">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="card p-5 bg-gradient-to-b from-projects/10 to-transparent">
            <div className="text-white font-medium">Project {i + 1}</div>
            <div className="text-white/70 text-sm">Champion card styling placeholder</div>
          </div>
        ))}
      </div>
    </div>
  );
}


