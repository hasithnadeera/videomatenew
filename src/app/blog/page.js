export const revalidate = 60;

import Link from "next/link";

export default async function BlogPage() {
  // Placeholder data; replace with CMS fetch
  const posts = [{ slug: "hello-world", title: "Hello World" }];

  return (
    <main className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug} className="mb-2">
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
