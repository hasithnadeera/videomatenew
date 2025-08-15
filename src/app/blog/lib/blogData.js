// Blog data utility

"use server";
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const postsDirectory = path.join(process.cwd(), 'src/app/blog/content/posts');

// Get all MDX files and extract slugs
function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.filter(fileName => fileName.endsWith('.mdx'))
    .map(fileName => fileName.replace(/\.mdx$/, ''));
}

const categories = [
  { name: "Tutorials", slug: "tutorials" },
  { name: "Marketing", slug: "marketing" },
  { name: "Industry News", slug: "industry-news" }
];

const tags = [
  { name: "video editing", slug: "video-editing" },
  { name: "beginners", slug: "beginners" },
  { name: "tutorial", slug: "tutorial" },
  { name: "social media", slug: "social-media" },
  { name: "content strategy", slug: "content-strategy" },
  { name: "tips", slug: "tips" },
  { name: "trends", slug: "trends" },
  { name: "future", slug: "future" }
];

export async function getAllPosts() {
  try {
    const fileNames = fs.readdirSync(postsDirectory);
    const mdxFiles = fileNames.filter(fileName => fileName.endsWith('.mdx'));
    
    // Extract slugs
    const slugs = mdxFiles.map(fileName => fileName.replace(/\.mdx$/, ''));
    
    // Get post data for each slug
    const posts = [];
    for (const slug of slugs) {
      const post = await getPostBySlug(slug);
      if (post) {
        posts.push(post);
      }
    }
    
    // Sort posts by date (newest first)
    posts.sort((a, b) => {
      const dateA = new Date(a.date || '1970-01-01');
      const dateB = new Date(b.date || '1970-01-01');
      return dateB - dateA; // Newest first
    });
    
    return posts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export async function getPostBySlug(slug) {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    
    // Check if file exists
    if (!fs.existsSync(fullPath)) {
      return null;
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    // Parse frontmatter and content using gray-matter
    const { data, content } = matter(fileContents);
    
    // Configure marked with proper options and styling
    marked.setOptions({
      breaks: true,
      gfm: true,
    });
    
    // Compile markdown to HTML using marked
    let htmlContent = marked(content);
    
    // Remove the first H1 heading if it matches the title (to avoid duplication)
    if (data.title) {
      const titleRegex = new RegExp(`<h1[^>]*>\\s*${data.title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*</h1>`, 'i');
      htmlContent = htmlContent.replace(titleRegex, '');
    }
    
    // Post-process HTML to add proper styling classes
    htmlContent = htmlContent
      // Style headings (H1 should rarely appear now since we remove duplicate titles)
      .replace(/<h1>/g, '<h1 class="text-3xl md:text-4xl font-bold mb-6 mt-8"><span class="bg-gradient-to-r from-[#E2CDFF] to-[#B47DFF] bg-clip-text text-transparent">')
      .replace(/<\/h1>/g, '</span></h1>')
      .replace(/<h2>/g, '<h2 class="text-2xl font-bold mb-4 mt-6"><span class="bg-gradient-to-r from-[#E2CDFF] to-[#B47DFF] bg-clip-text text-transparent">')
      .replace(/<\/h2>/g, '</span></h2>')
      .replace(/<h3>/g, '<h3 class="text-xl font-bold mb-3 mt-5 text-gray-800">')
      .replace(/<\/h3>/g, '</h3>')
      .replace(/<h4>/g, '<h4 class="text-lg font-bold mb-2 mt-4 text-gray-800">')
      .replace(/<\/h4>/g, '</h4>')
      .replace(/<h5>/g, '<h5 class="text-base font-bold mb-2 mt-3 text-gray-800">')
      .replace(/<\/h5>/g, '</h5>')
      .replace(/<h6>/g, '<h6 class="text-sm font-bold mb-2 mt-2 text-gray-800">')
      .replace(/<\/h6>/g, '</h6>')
      
      // Style paragraphs
      .replace(/<p>/g, '<p class="text-gray-700 mb-4 leading-relaxed">')
      
      // Style lists
      .replace(/<ul>/g, '<ul class="list-disc list-inside mb-4 text-gray-700 space-y-2">')
      .replace(/<ol>/g, '<ol class="list-decimal list-inside mb-4 text-gray-700 space-y-2">')
      .replace(/<li>/g, '<li class="mb-2">')
      
      // Style links
      .replace(/<a href="/g, '<a href="')
      .replace(/<a /g, '<a class="text-purple-600 hover:text-purple-800 underline transition-colors duration-300" target="_blank" rel="noopener noreferrer" ')
      
      // Style strong/bold
      .replace(/<strong>/g, '<strong class="font-bold text-gray-800">')
      
      // Style emphasis/italic
      .replace(/<em>/g, '<em class="italic text-gray-800">')
      
      // Style blockquotes
      .replace(/<blockquote>/g, '<blockquote class="border-l-4 border-purple-500 pl-4 italic text-gray-600 my-4">')
      
      // Style code blocks
      .replace(/<pre><code>/g, '<pre class="bg-gray-100 rounded-lg p-4 mb-4 overflow-x-auto"><code class="text-sm font-mono text-gray-800">')
      .replace(/<code>/g, '<code class="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800">');
    
    // Handle custom MDX components by converting them to HTML
    // Replace <Callout> components
    htmlContent = htmlContent.replace(
      /<Callout\s+type="([^"]*)"(?:\s+title="([^"]*)")?\s*>([\s\S]*?)<\/Callout>/g,
      (match, type, title, content) => {
        const typeStyles = {
          info: 'bg-blue-500/10 border-blue-500/30 text-blue-300',
          warning: 'bg-yellow-500/10 border-yellow-500/30 text-yellow-300',
          error: 'bg-red-500/10 border-red-500/30 text-red-300',
          success: 'bg-green-500/10 border-green-500/30 text-green-300'
        };
        const style = typeStyles[type] || typeStyles.info;
        const titleHtml = title ? `<div class="font-semibold ${style.split(' ').pop()}">${title}</div>` : '';
        return `<div class="border-l-4 pl-4 py-2 my-4 ${style}">
          <div class="flex items-start">
            <div class="flex-1">
              ${titleHtml}
              <div class="text-white/90">${content.trim()}</div>
            </div>
          </div>
        </div>`;
      }
    );
    
    // Replace <Card> components
    htmlContent = htmlContent.replace(
      /<Card(?:\s+title="([^"]*)")?\s*>([\s\S]*?)<\/Card>/g,
      (match, title, content) => {
        const titleHtml = title ? `<div class="px-6 py-4 border-b border-[#CFADFF]/20">
          <h3 class="text-lg font-bold text-white">${title}</h3>
        </div>` : '';
        return `<div class="bg-white/5 backdrop-blur-xl border border-[#CFADFF]/20 rounded-xl overflow-hidden hover:border-[#CFADFF]/40 transition-all duration-300 my-4">
          ${titleHtml}
          <div class="p-6">
            ${content.trim()}
          </div>
        </div>`;
      }
    );
    
    return {
      id: `mdx-${slug}`,
      slug,
      ...data,
      content: htmlContent, // Return compiled HTML with proper styling
      finalThoughts: data.finalThoughts || ''
    };
  } catch (error) {
    console.error(`Error fetching post ${slug}:`, error);
    return null;
  }
}

export async function getPostsByCategory(category) {
  try {
    const posts = await getAllPosts();
    return posts.filter(post => post.category === category);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export async function getPostsByTag(tag) {
  try {
    const posts = await getAllPosts();
    return posts.filter(post => post.tags && post.tags.includes(tag));
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export async function getAllCategories() {
  return categories;
}

export async function getAllTags() {
  return tags;
}

export async function getRelatedPosts(post, limit = 3) {
  try {
    const posts = await getAllPosts();
    return posts
      .filter(p => p.id !== post.id && (p.category === post.category || p.tags && p.tags.some(t => post.tags.includes(t))))
      .slice(0, limit);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}