'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';

export default function UpdatePasswordPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        // If no user is signed in, they can't update a password.
        router.push('/login');
      } else {
        setUser(user);
      }
    };
    fetchUser();
  }, [router]);

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    setError(null);
    setMessage('');

    if (!user) {
      setError("No user is currently signed in.");
      return;
    }

    const { error } = await supabase.auth.updateUser({ password });

    if (error) {
      setError(error.message);
    } else {
      setMessage('Your password has been updated successfully! Redirecting to the dashboard...');
      setTimeout(() => {
        router.push('/dashboard');
      }, 2000);
    }
  };

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-w-md mx-auto mt-16 p-8 border rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">Set Your Password</h1>
      <p className="text-center text-gray-600 mb-6">Welcome! Please set a password to complete your account setup.</p>
      <form onSubmit={handlePasswordUpdate}>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2" htmlFor="password">
            New Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        {message && <p className="text-green-500 text-sm mb-4">{message}</p>}
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors"
        >
          Save Password
        </button>
      </form>
    </div>
  );
}