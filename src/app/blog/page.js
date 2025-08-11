import Link from "next/link";

export const revalidate = 60;

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Blog</h1>
      <ul className="space-y-6">
        {posts.slice(0, 10).map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`} className="block">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-400">
                {post.body.substring(0, 100)}...
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
