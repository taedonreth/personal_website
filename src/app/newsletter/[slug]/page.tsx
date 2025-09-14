import Link from "next/link";
import { getPostBySlug, getAllPostSlugs } from '@/lib/posts';
import NewsletterPostClient from './NewsletterPostClient';

export default async function NewsletterPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4">Post Not Found</h1>
          <p className="text-white/80 mb-6">The post you&apos;re looking for doesn&apos;t exist.</p>
          <Link 
            href="/newsletter" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-medium transition-colors"
          >
            Back to Newsletter
          </Link>
        </div>
      </div>
    );
  }

  return <NewsletterPostClient post={post} />;
}

// Generate static params for all posts
export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}
