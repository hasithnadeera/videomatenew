'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function ClientWrapper({ children }) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash.includes('access_token') && pathname === '/') {
      // This is an auth redirect from Supabase.
      // The token is in the URL hash, but we are on the home page.
      // We need to forward the user to our dedicated callback page
      // so the Supabase client can process the session.
      router.push('/auth/callback' + hash);
    }
  }, [pathname, router]);

  return <>{children}</>;
}