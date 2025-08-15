'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import BlogPost from '../../../components/BlogPost';
import { getAllPosts } from '../../../lib/blogData';

export default function CategoryArchivePage({ params }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const allPosts = await getAllPosts();
        // Filter posts by category (in a real app, this would be done server-side)
        const filteredPosts = allPosts.filter(post => 
          post.category === decodeURIComponent(params.category)
        );
        setPosts(filteredPosts);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setLoading(false);
      }
    };
    
    fetchPosts();
  }, [params.category]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="w-12 h-12 border-2 border-[#B47DFF] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="category-archive">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm">
        <Link href="/blog" className="text-[#8B5CF6] hover:text-[#6B46C1]">
                  Blog
                </Link>
                <span className="text-gray-500 mx-2">/</span>
                <span className="text-gray-700">Category: {decodeURIComponent(params.category)}</span>
      </nav>
      
      {/* Category Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-black to-purple-900 bg-clip-text text-transparent">
                      {decodeURIComponent(params.category)} Posts
                    </span>
                  </h1>
                  <p className="text-xl text-black max-w-3xl mx-auto">
                    {posts.length} post{posts.length !== 1 ? 's' : ''} found
                  </p>
      </div>

      {/* Blog Posts Grid */}
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <h3 className="text-2xl font-bold text-black mb-4">No posts found</h3>
                    <p className="text-black mb-6">There are no posts in this category yet.</p>
                    <Link
                      href="/blog"
                      className="px-6 py-3 bg-gradient-to-r from-[#8B5CF6] to-[#6B46C1] text-white rounded-full font-semibold hover:brightness-110 transition-all inline-block"
                    >
                      Back to Blog
                    </Link>
        </div>
      )}
    </div>
  );
}