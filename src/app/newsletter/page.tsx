export default function NewsletterPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-2xl font-semibold mb-6">Newsletter</h1>
      <p className="text-white/80 text-sm mb-4">
        Posts about coding, music, sports, exercise, reading, school, and video games.
      </p>
      <div className="space-y-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <article key={i} className="card p-5">
            <h2 className="text-white font-medium">Post title {i + 1}</h2>
            <p className="text-white/70 text-sm">Character-select-styled excerpt placeholder.</p>
          </article>
        ))}
      </div>
    </div>
  );
}


