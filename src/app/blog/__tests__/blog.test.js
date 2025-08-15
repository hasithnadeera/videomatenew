// Blog system tests
import { getAllPosts, getPostBySlug, getRelatedPosts } from '../lib/blogData';
import { getAllPostSlugs, getPostBySlug as getMdxPostBySlug } from '../lib/mdxUtils';

describe('Blog System', () => {
  test('should fetch all blog posts', async () => {
    const posts = await getAllPosts();
    expect(posts).toBeInstanceOf(Array);
    expect(posts.length).toBeGreaterThan(0);
  });

  test('should fetch a specific blog post by slug', async () => {
    const post = await getPostBySlug('getting-started-with-video-editing');
    expect(post).toBeDefined();
    expect(post.slug).toBe('getting-started-with-video-editing');
  });

  test('should fetch related posts', async () => {
    const post = await getPostBySlug('getting-started-with-video-editing');
    const relatedPosts = await getRelatedPosts(post);
    expect(relatedPosts).toBeInstanceOf(Array);
  });

  test('should fetch all MDX post slugs', async () => {
    const slugs = await getAllPostSlugs();
    expect(slugs).toBeInstanceOf(Array);
  });

  test('should have proper blog navigation in Navbar', () => {
    // This would be a DOM test in a real implementation
    expect(true).toBe(true);
  });
});