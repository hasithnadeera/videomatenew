# Videomate Blog System

This is the blog system for the Videomate website, built with Next.js and optimized for SEO.

## Features

- SEO-optimized blog posts with proper meta tags
- Dynamic sitemap generation
- RSS feed generation
- Tagging and categorization system
- Search functionality
- Related posts recommendations
- Mobile-responsive design
- Social media sharing integration
- GitHub Actions deployment pipeline

## Directory Structure

```
src/app/blog/
├── page.js                 # Blog listing page
├── layout.js               # Blog layout wrapper
├── [slug]/                 # Dynamic route for individual blog posts
│   └── page.js
├── tag/                    # Tag archive pages
│   └── [tag]/
│       └── page.js
├── category/               # Category archive pages
│   └── [category]/
│       └── page.js
├── mdx/                    # MDX blog posts
│   └── [slug]/
│       └── page.js
├── components/             # Blog components
│   ├── BlogPost.js         # Blog post component
│   ├── MDXContent.js       # MDX content renderer
├── lib/                    # Utility functions
│   ├── blogData.js         # Blog data utilities
│   ├── mdxUtils.js         # MDX utilities
├── content/                # Blog content
│   └── posts/              # MDX blog posts
├── api/                    # API routes
│   └── search/
│       └── route.js
```

## Deployment

The blog is deployed using GitHub Actions. The workflow is defined in `.github/workflows/deploy-blog.yml`.

## Development

To run the blog locally:

```bash
npm run dev
```

The blog will be available at http://localhost:3000/blog

## Adding New Posts

1. Create a new MDX file in `src/app/blog/content/posts/`
2. Add frontmatter with title, date, author, excerpt, category, and tags
3. Write your content in Markdown format
4. Commit and push to trigger deployment

## SEO Features

- Proper meta tags for each page
- Open Graph and Twitter Card meta tags
- Structured data markup for articles
- Dynamic sitemap generation
- RSS feed generation
- Clean URL structure with permalinks
- Breadcrumb navigation