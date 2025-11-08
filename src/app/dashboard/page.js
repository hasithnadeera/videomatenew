'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUser(user);
        const { data: posts, error } = await supabase
          .from('posts')
          .select('id, title, published_at')
          .order('published_at', { ascending: false });

        if (error) {
          console.error('Error fetching posts:', error);
        } else {
          setPosts(posts);
        }
      } else {
        router.push('/login');
      }
    };

    fetchData();
  }, [router]);

  const handleDelete = async (postId) => {
    if (window.confirm('Are you sure you want to delete this post? This action cannot be undone.')) {
      const { error } = await supabase
        .from('posts')
        .delete()
        .eq('id', postId);

      if (error) {
        console.error('Error deleting post:', error);
        alert('Failed to delete post.');
      } else {
        // Remove the post from the local state to update the UI
        setPosts(posts.filter(p => p.id !== postId));
      }
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  if (!user) {
    return (
        <div className="flex justify-center items-center h-screen">
            <p>Loading...</p>
        </div>
    );
  }

  return (
    <div className="text-white min-h-screen p-4 sm:p-8" style={{ background: 'linear-gradient(to bottom, #150A28, #000000)' }}>
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Author Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors"
          >
            Log Out
          </button>
        </div>
        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-gray-200">Manage Blog Posts</h2>
          <div className="space-y-4">
            {posts.length > 0 ? (
              posts.map(post => (
                <div key={post.id} className="flex justify-between items-center p-4 bg-gray-800 rounded-lg border border-gray-700 hover:bg-gray-700/50 transition-colors">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-100">{post.title}</h3>
                    <p className="text-sm text-gray-400">
                      Published on: {new Date(post.published_at).toLocaleDateString()}
                    </p>
                  </div>
                  <button
                    onClick={() => handleDelete(post.id)}
                    className="bg-red-800/50 text-red-300 px-3 py-1 rounded-md text-sm font-medium hover:bg-red-700/50 hover:text-white transition-all"
                  >
                    Delete
                  </button>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-400 py-8">No posts found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}