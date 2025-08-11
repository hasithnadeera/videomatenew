import { blogPosts } from '../data/blogPosts';

const baseUrl = 'https://videomate.com';

export default function sitemap() {
  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date,
  }));

  return [
    { url: baseUrl, lastModified: new Date().toISOString().split('T')[0] },
    ...blogUrls,
  ];
}
