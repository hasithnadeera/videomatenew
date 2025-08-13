import Link from 'next/link';
import {client} from '../../lib/sanity';

export const metadata = {
  title: 'Blog',
  description: 'Latest articles'
};

export const revalidate = 60;

async function getPosts() {
  const query = `*[_type == "post"]|order(publishedAt desc){_id,title,slug,excerpt}`;
  return client.fetch(query);
}

export default async function BlogPage() {
  const posts = await getPosts();
  return (
    <div className="prose mx-auto py-8">
      <h1>Blog</h1>
      <ul>
        {posts.map(post => (
          <li key={post._id}>
            <Link href={`/blog/${post.slug.current}`} className="text-blue-600">
              {post.title}
            </Link>
            {post.excerpt && <p>{post.excerpt}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}
