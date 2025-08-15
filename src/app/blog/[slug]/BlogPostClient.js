'use client';

import Link from 'next/link';
import { notFound } from 'next/navigation';
import MDXContent from '../components/MDXContent';
import SocialShareButtons from '../components/SocialShareButtons';

export default function BlogPostClient({ post, relatedPosts }) {
  if (!post) {
    return notFound();
  }


  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <article className="blog-post">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
                  <Link href="/blog" className="text-[#8B5CF6] hover:text-[#6B46C1]">
                    Blog
                  </Link>
                  <span className="text-gray-500 mx-2">/</span>
                  <span className="text-gray-700">{post.title}</span>
                </nav>
        
        {/* Post Header */}
        <header className="mb-12 text-center">
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
                      <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full font-medium">
                        {post.category}
                      </span>
                      <time className="text-black">
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                      <span className="text-black">by {post.author}</span>
                    </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
                      <span className="bg-gradient-to-r from-black to-purple-900 bg-clip-text text-transparent">
                        {post.title}
                      </span>
                    </h1>
                    
                    <p className="text-xl text-black max-w-3xl mx-auto">
                      {post.excerpt}
                    </p>
        </header>
        
        {/* Post Content */}
        <div className="max-w-3xl mx-auto">
          <MDXContent content={post.content} />
        </div>
        
        {/* Final Thoughts */}
        <div className="mt-12 pt-8 border-t border-gray-200 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">Final Thoughts</h2>
          <p className="text-lg text-gray-600">
            {post.finalThoughts}
          </p>
        </div>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-gray-200 max-w-3xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {post.tags && post.tags.map(tag => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      
        {/* Social Share */}
        <div className="mt-12 pt-8 border-t border-gray-200 max-w-3xl mx-auto text-center">
          <h3 className="text-lg font-semibold text-purple-600 mb-4">Share this post</h3>
          <SocialShareButtons post={post} />
        </div>
      </article>
    </div>
  );
}