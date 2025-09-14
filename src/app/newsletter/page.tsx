import { getAllPosts } from '@/lib/posts';

export default async function NewsletterPage() {
  const posts = await getAllPosts();

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-2xl font-semibold mb-6">Newsletter</h1>
      <p className="text-white/80 text-sm mb-4">
        Here I write about random thoughts regarding tech, career, hobbies, and lifestyle!
      </p>
      <div className="space-y-4">
        {posts.map((post) => (
          <article key={post.id} className="card p-5">
            <h2 className="text-white font-medium">{post.title}</h2>
            <p className="text-white/70 text-sm">{post.excerpt}</p>
            <p className="text-white/50 text-xs mt-2">{post.date}</p>
            <div className="mt-4">
              <a
                href={`/newsletter/${post.slug}`}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
              >
                Read More
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}


