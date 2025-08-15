# Blog Components Architecture

## Overview
This document details the component architecture for the Videomate blog system, focusing on reusable components and their interactions.

## Component Hierarchy

```
BlogLayout (/src/app/blog/layout.js)
├── BlogHeader
│   ├── Breadcrumb
│   └── Search
├── BlogList (/src/app/blog/page.js)
│   ├── BlogFilters
│   ├── BlogCard (repeated)
│   └── Pagination
└── BlogPost (/src/app/blog/[slug]/page.js)
    ├── BlogPostHeader
    ├── TableOfContents
    ├── MDXContent
    ├── BlogPostFooter
    │   ├── Tags
    │   ├── SocialShare
    │   └── AuthorBio
    └── RelatedPosts
```

## Key Components

### 1. BlogCard Component

```jsx
// src/app/blog/components/BlogCard.js
export default function BlogCard({ post }) {
  return (
    <article className="blog-card">
      {post.featuredImage && (
        <div className="blog-card-image">
          <Image 
            src={post.featuredImage} 
            alt={post.title}
            width={400}
            height={200}
            layout="responsive"
          />
        </div>
      )}
      <div className="blog-card-content">
        <div className="blog-card-meta">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          {post.category && (
            <span className="blog-card-category">{post.category}</span>
          )}
        </div>
        <h2 className="blog-card-title">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>
        <p className="blog-card-excerpt">{post.excerpt}</p>
        {post.tags && (
          <div className="blog-card-tags">
            {post.tags.map(tag => (
              <span key={tag} className="blog-card-tag">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
```

### 2. BlogPost Component

```jsx
// src/app/blog/components/BlogPost.js
import { MDXRemote } from 'next-mdx-remote';
import TableOfContents from './TableOfContents';
import SocialShare from './SocialShare';
import RelatedPosts from './RelatedPosts';

export default function BlogPost({ post }) {
  return (
    <article className="blog-post">
      <header className="blog-post-header">
        <h1 className="blog-post-title">{post.title}</h1>
        <div className="blog-post-meta">
          <div className="blog-post-author">
            <Image 
              src={post.author.avatar} 
              alt={post.author.name}
              width={40}
              height={40}
            />
            <span>By {post.author.name}</span>
          </div>
          <time dateTime={post.date} className="blog-post-date">
            {formatDate(post.date)}
          </time>
        </div>
        {post.featuredImage && (
          <div className="blog-post-image">
            <Image 
              src={post.featuredImage} 
              alt={post.title}
              width={800}
              height={400}
              layout="responsive"
            />
          </div>
        )}
      </header>
      
      <div className="blog-post-content-wrapper">
        <TableOfContents content={post.tableOfContents} />
        <div className="blog-post-content">
          <MDXRemote {...post.source} />
        </div>
      </div>
      
      <footer className="blog-post-footer">
        {post.tags && (
          <div className="blog-post-tags">
            {post.tags.map(tag => (
              <Link key={tag} href={`/blog/tag/${tag}`} className="blog-tag">
                {tag}
              </Link>
            ))}
          </div>
        )}
        <SocialShare 
          title={post.title} 
          url={`https://www.videomate.io/blog/${post.slug}`} 
        />
        <RelatedPosts posts={post.relatedPosts} />
      </footer>
    </article>
  );
}
```

### 3. Search Component

```jsx
// src/app/blog/components/Search.js
import { useState, useEffect } from 'react';

export default function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query.length > 2) {
      // Perform search
      searchPosts(query).then(setResults);
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <div className="blog-search">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search blog posts..."
        className="blog-search-input"
      />
      {results.length > 0 && (
        <div className="blog-search-results">
          {results.map(post => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="blog-search-result"
            >
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
```

### 4. RelatedPosts Component

```jsx
// src/app/blog/components/RelatedPosts.js
export default function RelatedPosts({ posts }) {
  if (!posts || posts.length === 0) return null;

  return (
    <div className="related-posts">
      <h2>Related Posts</h2>
      <div className="related-posts-grid">
        {posts.map(post => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
```

### 5. Breadcrumb Component

```jsx
// src/app/blog/components/Breadcrumb.js
export default function Breadcrumb({ items }) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <ol className="breadcrumb-list">
        {items.map((item, index) => (
          <li key={index} className="breadcrumb-item">
            {index < items.length - 1 ? (
              <Link href={item.href} className="breadcrumb-link">
                {item.label}
              </Link>
            ) : (
              <span className="breadcrumb-current">{item.label}</span>
            )}
            {index < items.length - 1 && (
              <span className="breadcrumb-separator">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
```

## Data Fetching Layer

### Blog Utility Functions

```javascript
// src/app/blog/lib/blog.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

const postsDirectory = path.join(process.cwd(), 'src/app/blog/content/posts');

export async function getPostSlugs() {
  const files = fs.readdirSync(postsDirectory);
  return files.map(file => file.replace(/\.mdx?$/, ''));
}

export async function getPostBySlug(slug, fields) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items = {};

  for (const field of fields) {
    if (field === 'slug') {
      items[field] = slug;
    }
    if (field === 'content') {
      items[field] = content;
    }
    if (data[field]) {
      items[field] = data[field];
    }
  }

  // Serialize MDX content
  if (content) {
    const mdxSource = await serialize(content);
    items.source = mdxSource;
  }

  return items;
}

export async function getAllPosts(fields) {
  const slugs = getPostSlugs();
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      return await getPostBySlug(slug, fields);
    })
  );
  return posts;
}
```

## SEO and Performance Optimizations

### 1. Image Optimization Strategy

- Use Next.js Image component for all images
- Implement proper `sizes` attributes for responsive images
- Configure automatic WebP conversion
- Lazy loading for all images by default
- Placeholder images for better perceived performance

### 2. Code Splitting Implementation

```javascript
// Dynamic import for heavy components
import dynamic from 'next/dynamic';

const TableOfContents = dynamic(() => import('./TableOfContents'), {
  ssr: false,
  loading: () => <p>Loading table of contents...</p>
});
```

### 3. Performance Monitoring

```jsx
// Track page view and performance metrics
useEffect(() => {
  // Report page view to analytics
  analytics.pageview(window.location.pathname);
  
  // Measure Core Web Vitals
  if ('performance' in window) {
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        analytics.send({
          name: entry.name,
          value: entry.value,
          type: 'core-web-vital'
        });
      });
    });
    
    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input-delay'] });
  }
}, []);
```

## Responsive Design Considerations

### Mobile-First Approach

```css
/* Base styles for mobile */
.blog-card {
  width: 100%;
  margin-bottom: 2rem;
}

/* Tablet styles */
@media (min-width: 768px) {
  .blog-card {
    width: calc(50% - 1rem);
    margin-bottom: 1.5rem;
  }
}

/* Desktop styles */
@media (min-width: 1024px) {
  .blog-card {
    width: calc(33.333% - 1rem);
  }
}
```

## Accessibility Features

### Semantic HTML Structure

```jsx
<article role="article" aria-labelledby="post-title">
  <header>
    <h1 id="post-title">{post.title}</h1>
    <p>
      Published on <time dateTime={post.date}>{formatDate(post.date)}</time>
    </p>
  </header>
  <div className="blog-content">
    <MDXRemote {...post.source} />
  </div>
  <footer>
    <section aria-label="Post tags">
      {post.tags.map(tag => (
        <a key={tag} href={`/blog/tag/${tag}`} className="tag">
          {tag}
        </a>
      ))}
    </section>
  </footer>
</article>
```

### Keyboard Navigation

```jsx
<Link href={`/blog/${post.slug}`} tabIndex="0">
  <h2>{post.title}</h2>
</Link>
```

## Error Handling and Fallbacks

### Component Error Boundaries

```jsx
import ErrorBoundary from '../components/ErrorBoundary';

<ErrorBoundary fallback={<p>Failed to load blog content</p>}>
  <BlogPost post={post} />
</ErrorBoundary>
```

## Caching Strategy

### Client-Side Caching

```javascript
// Cache blog data in localStorage
const CACHE_KEY = 'blog-posts-cache';
const CACHE_DURATION = 1000 * 60 * 30; // 30 minutes

export async function getCachedPosts() {
  const cached = localStorage.getItem(CACHE_KEY);
  const timestamp = localStorage.getItem(`${CACHE_KEY}-timestamp`);
  
  if (cached && timestamp && (Date.now() - timestamp < CACHE_DURATION)) {
    return JSON.parse(cached);
  }
  
  const posts = await fetchPosts();
  localStorage.setItem(CACHE_KEY, JSON.stringify(posts));
  localStorage.setItem(`${CACHE_KEY}-timestamp`, Date.now());
  
  return posts;
}
```

This component architecture provides a solid foundation for building a performant, accessible, and SEO-optimized blog system that integrates well with the existing Videomate website.