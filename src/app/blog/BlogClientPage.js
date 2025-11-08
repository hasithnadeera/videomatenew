'use client';

import { useState } from 'react';
import BlogPost from './components/BlogPost';

export default function BlogClientPage({ initialPosts, initialCategories, initialTags }) {
  const [posts] = useState(initialPosts);
  const [categories] = useState(['All', ...initialCategories.map(cat => cat.name)]);
  const [allTags] = useState(initialTags.map(tag => tag.name));
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTag, setSelectedTag] = useState('');

  // Filter posts based on search, category, and tags
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (post.excerpt && post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())) ||
                          (post.tags && post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
    
    const matchesCategory = selectedCategory === 'All' || post.category.name === selectedCategory;
    
    const matchesTag = !selectedTag || (post.tags && post.tags.includes(selectedTag));
    
    return matchesSearch && matchesCategory && matchesTag;
  });

  return (
    <div className="blog-page">
      {/* Blog Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-black to-purple-900 bg-clip-text text-transparent">
            Videomate Blog
          </span>
        </h1>
        <p className="text-xl text-black max-w-3xl mx-auto">
          Insights, tutorials, and industry news to help you create compelling video content
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-12">
        {/* Tag Filter */}
        <div className="flex flex-wrap gap-2">
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              !selectedTag
                ? 'bg-gradient-to-r from-[#8B5CF6] to-[#6B46C1] text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
            onClick={() => setSelectedTag('')}
          >
            All Tags
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedTag === tag
                  ? 'bg-gradient-to-r from-[#8B5CF6] to-[#6B46C1] text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map(post => (
          <BlogPost key={post.id || post.slug} post={post} />
        ))}
      </div>

      {/* No Results Message */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-16">
          <h3 className="text-2xl font-bold text-black mb-4">No posts found</h3>
          <p className="text-black mb-6">Try adjusting your search or filter criteria</p>
          <button
            className="px-6 py-3 bg-gradient-to-r from-[#8B5CF6] to-[#6B46C1] text-white rounded-full font-semibold hover:brightness-110 transition-all"
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
              setSelectedTag('');
            }}
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}