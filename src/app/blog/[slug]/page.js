import { getPostBySlug, blogPosts } from '../../../data/blogPosts';

const baseUrl = 'https://videomate.com';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  const url = `${baseUrl}/blog/${post.slug}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    url,
    datePublished: post.date,
    dateModified: post.date,
  };
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: 'article',
    },
    other: {
      'script:ld+json': JSON.stringify(jsonLd),
    },
  };
}

export default function BlogPost({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return <div>Post not found</div>;
  }
  return (
    <article className="prose max-w-none">
      <h1>{post.title}</h1>
      <p>{post.description}</p>
    </article>
  );
}
