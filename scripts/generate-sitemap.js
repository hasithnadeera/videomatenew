// This script generates a sitemap for the blog
// In a real implementation, this would be run during the build process

const fs = require('fs');
const path = require('path');

// Mock blog data
const mockPosts = [
  {
    id: 1,
    title: "Getting Started with Video Editing",
    date: "2025-08-10",
    slug: "getting-started-with-video-editing"
  },
  {
    id: 2,
    title: "5 Tips to Improve Your Social Media Content",
    date: "2025-08-05",
    slug: "5-tips-to-improve-social-media-content"
  },
  {
    id: 3,
    title: "The Future of Video Marketing",
    date: "2025-08-01",
    slug: "future-of-video-marketing"
  }
];

const categories = ["Tutorials", "Marketing", "Industry News"];
const tags = ["video editing", "beginners", "tutorial", "social media", "content strategy", "tips", "trends", "future"];

async function generateSitemap() {
  const baseUrl = 'https://www.videomate.io';
  
  // Generate sitemap XML
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/blog/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`;
  
  // Add blog posts
  mockPosts.forEach(post => {
    sitemap += `  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${post.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
`;
  });
  
  // Add categories
  categories.forEach(category => {
    const slug = category.toLowerCase().replace(/\s+/g, '-');
    sitemap += `  <url>
    <loc>${baseUrl}/blog/category/${slug}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.5</priority>
  </url>
`;
  });
  
  // Add tags
  tags.forEach(tag => {
    const slug = tag.toLowerCase().replace(/\s+/g, '-');
    sitemap += `  <url>
    <loc>${baseUrl}/blog/tag/${slug}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.5</priority>
  </url>
`;
  });
  
  sitemap += `</urlset>`;
  
  // Write sitemap to file
  const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemap);
  
  console.log('Sitemap generated successfully at', sitemapPath);
}

// Run the script
generateSitemap().catch(console.error);