'use client';

import Link from 'next/link';

export default function SocialShareIcon({ href, children }) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <div className="w-12 h-12 rounded-full border-2 border-purple-600 flex items-center justify-center bg-black text-white hover:bg-purple-600 transition-colors">
        {children}
      </div>
    </Link>
  );
}