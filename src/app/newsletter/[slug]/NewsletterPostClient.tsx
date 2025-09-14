"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";

interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  content: string;
  htmlContent: string;
}

interface NewsletterPostClientProps {
  post: Post;
}

export default function NewsletterPostClient({ post }: NewsletterPostClientProps) {
  // Add CSS class to body to hide clouds on newsletter post pages
  useEffect(() => {
    document.body.classList.add('no-clouds');
    return () => {
      document.body.classList.remove('no-clouds');
    };
  }, []);

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <Link 
          href="/newsletter" 
          className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
        >
          ← Back to Newsletter
        </Link>
      </motion.div>

      {/* Article Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-white/80 text-sm mb-4">{post.excerpt}</p>
        <p className="text-white/50 text-sm">{post.date}</p>
      </motion.header>

      {/* Article Content */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="prose prose-invert max-w-none"
      >
        <div 
          className="text-white/90 leading-relaxed space-y-6"
          dangerouslySetInnerHTML={{ __html: post.htmlContent }}
        />
      </motion.article>
    </div>
  );
}
