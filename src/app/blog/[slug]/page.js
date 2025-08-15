import { getAllPosts, getPostBySlug, getRelatedPosts } from '../lib/blogData';
import BlogPostClient from './BlogPostClient';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }) {
  const slug = (await params).slug;
  const post = await getPostBySlug(slug);
  
  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(post);

  return <BlogPostClient post={post} relatedPosts={relatedPosts} />;
}