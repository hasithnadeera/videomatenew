// scripts/migrate-to-supabase.js
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import dotenv from 'dotenv';

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

// --- SUPABASE SETUP ---
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error("Supabase URL or Service Role Key is missing. Check your .env.local file.");
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

// --- DATA SOURCE ---
const postsDirectory = path.join(process.cwd(), 'src/app/blog/content/posts');

// --- DATA FROM blogData.js (Hardcoded) ---
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
  { name: "future", slug: "future" },
  { name: "content marketing", slug: "content-marketing" },
  { name: "growth", slug: "growth" }
];

// --- HTML CONVERSION LOGIC (from blogData.js) ---
function getStyledHtml(content) {
    marked.setOptions({
        breaks: true,
        gfm: true,
    });
    
    let htmlContent = marked(content);

    // This styling logic is copied from your project to maintain consistency
    htmlContent = htmlContent
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
      .replace(/<p>/g, '<p class="text-gray-700 mb-4 leading-relaxed">')
      .replace(/<ul>/g, '<ul class="list-disc list-inside mb-4 text-gray-700 space-y-2">')
      .replace(/<ol>/g, '<ol class="list-decimal list-inside mb-4 text-gray-700 space-y-2">')
      .replace(/<li>/g, '<li class="mb-2">')
      .replace(/<a href="/g, '<a href="')
      .replace(/<a /g, '<a class="text-purple-600 hover:text-purple-800 underline transition-colors duration-300" target="_blank" rel="noopener noreferrer" ')
      .replace(/<strong>/g, '<strong class="font-bold text-gray-800">')
      .replace(/<em>/g, '<em class="italic text-gray-800">')
      .replace(/<blockquote>/g, '<blockquote class="border-l-4 border-purple-500 pl-4 italic text-gray-600 my-4">')
      .replace(/<pre><code>/g, '<pre class="bg-gray-100 rounded-lg p-4 mb-4 overflow-x-auto"><code class="text-sm font-mono text-gray-800">')
      .replace(/<code>/g, '<code class="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800">');

    // Handle custom components - this is a simplified version
    htmlContent = htmlContent.replace(/<Callout[^>]*>([\s\S]*?)<\/Callout>/g, '<div>$1</div>');
    htmlContent = htmlContent.replace(/<Card[^>]*>([\s\S]*?)<\/Card>/g, '<div>$1</div>');

    return htmlContent;
}

// --- MIGRATION SCRIPT ---
async function migrate() {
  console.log('Starting migration...');

  // 1. Migrate Categories
  console.log('Migrating categories...');
  const { data: insertedCategories, error: categoriesError } = await supabase
    .from('categories')
    .upsert(categories, { onConflict: 'slug' })
    .select();
  if (categoriesError) throw new Error(`Categories migration failed: ${categoriesError.message}`);
  console.log(`${insertedCategories.length} categories migrated.`);

  // 2. Migrate Tags
  console.log('Migrating tags...');
  const { data: insertedTags, error: tagsError } = await supabase
    .from('tags')
    .upsert(tags, { onConflict: 'slug' })
    .select();
  if (tagsError) throw new Error(`Tags migration failed: ${tagsError.message}`);
  console.log(`${insertedTags.length} tags migrated.`);

  // 3. Migrate Posts
  console.log('Migrating posts...');
  const fileNames = fs.readdirSync(postsDirectory);
  const mdxFiles = fileNames.filter(fileName => fileName.endsWith('.mdx'));

  for (const fileName of mdxFiles) {
    const slug = fileName.replace(/\.mdx$/, '');
    console.log(`Processing post: ${slug}`);

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data: frontmatter, content } = matter(fileContents);

    // Find author and category IDs from the data we just migrated
    // NOTE: This assumes author names are unique. For a real-world scenario, you might need a more robust mapping.
    const { data: author } = await supabase.from('authors').select('id').eq('full_name', frontmatter.author).single();
    const { data: category } = await supabase.from('categories').select('id').eq('name', frontmatter.category).single();

    if (!author) {
        console.warn(`Skipping post "${frontmatter.title}" because author "${frontmatter.author}" was not found. Please ensure an author with this name exists in your Supabase auth users and authors table.`);
        continue;
    }

    // Prepare post object
    const postToInsert = {
      title: frontmatter.title,
      slug: slug,
      excerpt: frontmatter.excerpt,
      html_content: getStyledHtml(content),
      final_thoughts: frontmatter.finalThoughts || null,
      thumbnail_url: frontmatter.thumbnail,
      published_at: frontmatter.date ? new Date(frontmatter.date).toISOString() : null,
      author_id: author.id,
      category_id: category ? category.id : null,
    };

    // Insert post
    const { data: insertedPost, error: postError } = await supabase
      .from('posts')
      .upsert(postToInsert, { onConflict: 'slug' })
      .select('id')
      .single();

    if (postError) {
      console.error(`Failed to insert post "${slug}":`, postError.message);
      continue;
    }

    // Link tags to the post
    if (frontmatter.tags && frontmatter.tags.length > 0) {
      const postTags = frontmatter.tags.map(tagName => {
        const tag = insertedTags.find(t => t.name === tagName.toLowerCase());
        if (tag) {
          return { post_id: insertedPost.id, tag_id: tag.id };
        }
        return null;
      }).filter(Boolean); // Filter out any nulls if a tag wasn't found

      if (postTags.length > 0) {
        const { error: postTagsError } = await supabase.from('post_tags').upsert(postTags);
        if (postTagsError) {
          console.error(`Failed to link tags for post "${slug}":`, postTagsError.message);
        }
      }
    }
  }

  console.log('Post migration complete.');
  console.log('Migration finished successfully!');
}

migrate().catch(error => {
  console.error('Migration failed:', error);
  process.exit(1);
});
