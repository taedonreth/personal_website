export default function InterestsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-2xl font-semibold mb-6">Interests</h1>
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
          <div key={name} className="card p-4 bg-gradient-to-b from-interests/10 to-transparent">
            <div className="text-white text-sm font-medium">{name}</div>
            <div className="text-white/70 text-xs">Structure placeholder</div>
          </div>
        ))}
      </div>
    </div>
  );
}


