'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function BlogPost({ post }) {
  const postUrl = `/blog/${post.slug}`;

  return (
    <Link href={postUrl} className="block group">
      <article className="h-full bg-gray-50 backdrop-blur-xl border border-[#CFADFF]/20 rounded-2xl overflow-hidden hover:border-[#CFADFF]/40 transition-all duration-300 hover:scale-[1.02]">
              {post.thumbnail_url && (
                <div className="relative h-48 w-full">
                  <Image
                    src={post.thumbnail_url}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">
                    {post.category?.name || 'Uncategorized'}
                  </span>
                  <time className="text-black text-sm">
                    {new Date(post.published_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                  </time>
                </div>
                
                <h2 className="text-xl font-bold text-black mb-3 transition-colors">
                  <span className="bg-gradient-to-r from-black to-purple-900 bg-clip-text text-transparent">
                    {post.title}
                  </span>
                </h2>
                
                <p className="text-black mb-4 flex-grow">
                  {post.excerpt}
                </p>
              </div>
            </article>
    </Link>
  );
}