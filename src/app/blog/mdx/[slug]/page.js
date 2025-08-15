import Link from 'next/link';
import { notFound } from 'next/navigation';
// Dynamically import MDX files
import { getAllPosts, getPostBySlug } from '../../lib/blogData';

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function MDXBlogPostPage({ params }) {
  try {
    const { slug } = await params;
    const post = await getPostBySlug(slug);
    
    if (!post) {
      return notFound();
    }
    
    // For now, we'll just simulate related posts
    const relatedPosts = [
      {
        slug: "sample-blog-post",
        title: "Sample MDX Blog Post",
        excerpt: "This is a sample MDX blog post to demonstrate MDX functionality in our blog system.",
        category: "Tutorials",
        tags: ["mdx", "tutorial", "sample"]
      }
    ];
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="blog-post">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm">
            <Link href="/blog" className="text-[#B47DFF] hover:text-[#E2CDFF]">
              Blog
            </Link>
            <span className="text-white/50 mx-2">/</span>
            <span className="text-white/70">{post.title}</span>
          </nav>
          
          {/* Post Header */}
          <header className="mb-12 text-center">
            <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
              <span className="px-4 py-2 bg-[#B47DFF]/20 text-[#E2CDFF] rounded-full font-medium">
                {post.category || 'Uncategorized'}
              </span>
              {post.date && (
                <time className="text-white/70">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              )}
              {post.author && (
                <span className="text-white/70">by {post.author}</span>
              )}
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#E2CDFF] to-[#B47DFF] bg-clip-text text-transparent">
                {post.title}
              </span>
            </h1>
            
            {post.excerpt && (
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                {post.excerpt}
              </p>
            )}
          </header>
          
          {/* Post Content */}
          <div className="max-w-3xl mx-auto">
            <div className="blog-content prose prose-invert max-w-none prose-headings:text-white prose-p:text-white/90 prose-a:text-[#B47DFF] hover:prose-a:text-[#E2CDFF] prose-strong:text-white prose-em:text-white/90 prose-ul:text-white/90 prose-ol:text-white/90 prose-li:text-white/90 prose-blockquote:text-white/90 prose-blockquote:border-l-[#B47DFF]">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </div>
          
          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-white/10 max-w-3xl mx-auto">
              <div className="flex flex-wrap justify-center gap-2">
                {post.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-white/10 text-white/80 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {/* Social Share */}
          <div className="mt-16 pt-8 border-t border-white/10 max-w-3xl mx-auto text-center">
            <h3 className="text-lg font-medium text-white mb-4">Share this post</h3>
            <div className="flex justify-center gap-4">
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://www.videomate.io/blog/mdx/${slug}`)}&text=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-all flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
                Twitter
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://www.videomate.io/blog/mdx/${slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-all flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`https://www.videomate.io/blog/mdx/${slug}`)}&title=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-all flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.43v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </article>
      </div>
    );
  } catch (error) {
    console.error('Error rendering MDX post:', error);
    return notFound();
  }
}