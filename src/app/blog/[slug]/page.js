import Link from "next/link";

export const revalidate = 60;

async function getPost(slug) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`, {
    next: { revalidate },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }

  return res.json();
}

export default async function BlogPostPage({ params }) {
  const post = await getPost(params.slug);

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <p className="mb-8 text-gray-400">{post.body}</p>
      <Link href="/blog" className="text-blue-500">&larr; Back to blog</Link>
    </main>
  );
}

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate },
  });
  const posts = await res.json();
  return posts.slice(0, 10).map((post) => ({ slug: post.id.toString() }));
}
