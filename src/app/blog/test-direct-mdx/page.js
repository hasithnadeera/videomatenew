import Link from 'next/link';
// This import should work if MDX is configured correctly
import TestMDXContent from '../content/posts/test-mdx.mdx';

export default function TestDirectMDXPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/blog" className="text-[#B47DFF] hover:text-[#E2CDFF] mb-4 inline-block">
        ← Back to Blog
      </Link>
      <h1 className="text-3xl font-bold mb-6">Direct MDX Import Test</h1>
      <div className="prose prose-invert">
        <TestMDXContent />
      </div>
    </div>
  );
}