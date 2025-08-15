// This script runs both sitemap and RSS generation
const { spawn } = require('child_process');

async function buildBlog() {
  console.log('Building blog assets...');
  
  // Run sitemap generation
  const sitemap = spawn('node', ['scripts/generate-sitemap.js'], { stdio: 'inherit' });
  
  sitemap.on('close', (code) => {
    if (code === 0) {
      console.log('Sitemap generated successfully');
      
      // Run RSS generation
      const rss = spawn('node', ['scripts/generate-rss.js'], { stdio: 'inherit' });
      
      rss.on('close', (code) => {
        if (code === 0) {
          console.log('RSS feed generated successfully');
          console.log('Blog build completed!');
        } else {
          console.error('RSS generation failed with code', code);
        }
      });
    } else {
      console.error('Sitemap generation failed with code', code);
    }
  });
}

// Run the build process
buildBlog().catch(console.error);