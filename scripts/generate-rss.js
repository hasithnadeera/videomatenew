// This script generates an RSS feed for the blog
// In a real implementation, this would be run during the build process

const fs = require('fs');
const path = require('path');

// Mock blog data
const mockPosts = [
  {
    id: 1,
    title: "Getting Started with Video Editing",
    excerpt: "Learn the basics of video editing and how to create compelling content for your brand.",
    date: "2025-08-10",
    author: "Jane Smith",
    slug: "getting-started-with-video-editing"
  },
  {
    id: 2,
    title: "5 Tips to Improve Your Social Media Content",
    excerpt: "Discover how to create engaging social media content that drives results for your business.",
    date: "2025-08-05",
    author: "John Doe",
    slug: "5-tips-to-improve-social-media-content"
  },
  {
    id: 3,
    title: "The Future of Video Marketing",
    excerpt: "Explore the latest trends and predictions for video marketing in the coming years.",
    date: "2025-08-01",
    author: "Alex Johnson",
    slug: "future-of-video-marketing"
  }
];

async function generateRSS() {
  const baseUrl = 'https://www.videomate.io';
  const blogUrl = `${baseUrl}/blog`;
  const date = new Date().toISOString();
  
  // Generate RSS XML
  let rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Videomate Blog</title>
    <description>Insights, tutorials, and industry news to help you create compelling video content</description>
    <link>${blogUrl}</link>
    <language>en-us</language>
    <lastBuildDate>${date}</lastBuildDate>
    <pubDate>${date}</pubDate>
    <ttl>60</ttl>
`;
  
  // Add blog posts
  mockPosts.forEach(post => {
    rss += `    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.excerpt}]]></description>
      <link>${blogUrl}/${post.slug}</link>
      <guid>${blogUrl}/${post.slug}</guid>
      <pubDate>${new Date(post.date).toISOString()}</pubDate>
    </item>
`;
  });
  
  rss += `  </channel>
</rss>`;
  
  // Write RSS feed to file
  const rssPath = path.join(process.cwd(), 'public', 'rss.xml');
  fs.writeFileSync(rssPath, rss);
  
  console.log('RSS feed generated successfully at', rssPath);
}

// Run the script
generateRSS().catch(console.error);