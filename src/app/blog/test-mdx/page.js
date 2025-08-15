import Link from 'next/link';

export default function TestMDXPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/blog" className="text-[#B47DFF] hover:text-[#E2CDFF] mb-4 inline-block">
        ← Back to Blog
      </Link>
      <h1 className="text-3xl font-bold mb-6">MDX Test Page</h1>
      <p className="mb-4">This page is used to test MDX rendering capabilities.</p>
      <p className="mb-4">If you can see this text, the page is working, but we need to verify MDX rendering.</p>
      <p className="mb-4">To test MDX rendering, try visiting: <Link href="/blog/mdx/test-mdx" className="text-[#B47DFF] hover:text-[#E2CDFF]">/blog/mdx/test-mdx</Link></p>
    </div>
  );
}