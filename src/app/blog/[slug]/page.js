export const revalidate = 60;

import { notFound } from "next/navigation";

export default async function ArticlePage({ params }) {
  // Placeholder data; replace with CMS fetch
  const posts = [
    { slug: "hello-world", title: "Hello World", content: "My first post." }
  ];

  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}
