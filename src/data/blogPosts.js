export const blogPosts = [
  {
    slug: 'getting-started',
    title: 'Getting Started with Videomate',
    description: 'Learn how Videomate helps you produce high-quality videos effortlessly.',
    date: '2024-01-01',
  },
  {
    slug: 'editing-tips',
    title: 'Top 5 Video Editing Tips',
    description: 'Simple editing tricks to elevate your video content.',
    date: '2024-02-15',
  },
];

export function getPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug);
}
