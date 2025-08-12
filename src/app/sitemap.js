import { blogSlugs } from '../data/blog-slugs'; // optional

export default function sitemap() {
  const base = 'https://www.videomate.io';
  const now = new Date();

  const staticRoutes = [
    { path: '/', priority: 1 },
    { path: '/portfolio', priority: 0.8 },
  ];

  const blocked = new Set([
    '/call-booking',
    '/call-conformation-page', // keep as-is if this is your route name
  ]);

  const staticEntries = staticRoutes
    .filter(r => !blocked.has(r.path))
    .map(r => ({
      url: `${base}${r.path}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: r.priority,
    }));

  const blogEntries = (blogSlugs || []).map(slug => ({
    url: `${base}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}
