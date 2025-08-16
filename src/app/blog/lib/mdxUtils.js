import fs from 'fs';
import path from 'path';
import { compile } from '@mdx-js/mdx';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src/app/blog/content/posts');

export async function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.filter(fileName => fileName.endsWith('.mdx')).map(fileName =>
    fileName.replace(/\.mdx$/, '')
  );
}

export async function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    // Parse frontmatter and content using gray-matter
    const { data, content } = matter(fileContents);
    
    return {
      slug,
      ...data,
      content: content // Raw content for client-side rendering
    };
  } catch (error) {
    console.error('Error reading post:', error);
    return null;
  }
}

export async function getAllPosts() {
  const slugs = await getAllPostSlugs();
  const posts = [];
  
  for (const slug of slugs) {
    const post = await getPostBySlug(slug);
    if (post) {
      posts.push(post);
    }
  }
  
  return posts;
}