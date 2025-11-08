'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';

export default function AuthCallbackPage() {
  const [message, setMessage] = useState('Please wait while we process your authentication...');
  const router = useRouter();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'PASSWORD_RECOVERY') {
        // This handles password resets for existing users.
        setMessage('Redirecting you to update your password...');
        router.push('/update-password');
      } else if (event === 'SIGNED_IN' && session) {
        // This handles both new user invitations and regular logins.
        // We need to differentiate between them.
        
        // A new user from an invitation will have a null `last_sign_in_at` value.
        if (session.user.last_sign_in_at === null) {
          // This is a new user who has never signed in before.
          // Force them to the update password page.
          setMessage('Welcome! Redirecting you to set up your password...');
          router.push('/update-password');
        } else {
          // This is a regular sign-in for an existing user.
          setMessage('Authentication successful! Redirecting...');
          router.push('/dashboard');
        }
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [router]);

  return (
    <div className="flex justify-center items-center h-screen">
      <p>{message}</p>
    </div>
  );
}