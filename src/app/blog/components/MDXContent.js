'use client';

import { useMDXComponents } from '@mdx-js/react';
import Callout from './ui/Callout';
import CodeBlock from './ui/CodeBlock';
import Card from './ui/Card';
import RoundedImage from './ui/RoundedImage';

// Custom components for MDX
const components = {
  h1: ({ children }) => (
    <h1 className="text-3xl md:text-4xl font-bold mb-6 mt-8">
      <span className="bg-gradient-to-r from-black to-purple-900 bg-clip-text text-transparent">
        {children}
      </span>
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl font-bold mb-4 mt-6 text-black">
      <span className="bg-gradient-to-r from-black to-purple-900 bg-clip-text text-transparent">
        {children}
      </span>
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl font-bold mb-3 mt-5 text-black">
      <span className="bg-gradient-to-r from-black to-purple-900 bg-clip-text text-transparent">
        {children}
      </span>
    </h3>
  ),
  p: ({ children }) => (
    <p className="text-black mb-4 leading-relaxed">
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="list-disc list-inside mb-4 text-black">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-inside mb-4 text-black">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="mb-2">
      {children}
    </li>
  ),
  a: ({ children, href }) => (
    <a
      href={href}
      className="text-purple-600 hover:text-purple-800 underline transition-colors duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ),
  strong: ({ children }) => (
    <strong className="font-bold text-black">
      {children}
    </strong>
  ),
  em: ({ children }) => (
    <em className="italic text-black">
      {children}
    </em>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-purple-600 pl-4 italic text-black my-4">
      {children}
    </blockquote>
  ),
  code: ({ children, className }) => {
    // Check if this is an inline code block or a code block with a language
    if (!className) {
      return <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-black">{children}</code>;
    }
    
    // This is a code block with a language, render as CodeBlock component
    return <CodeBlock className={className}>{children}</CodeBlock>
  },
  pre: ({ children }) => {
    // Pre elements are handled by the code element above
    return children;
  },
  // Custom components
  Callout,
  CodeBlock,
  Card,
  Image: RoundedImage
};

export default function MDXContent({ content }) {
  // Use the custom components for MDX
  const MDXComponents = useMDXComponents(components);
  
  // Render content with proper styling
  return (
    <div className="blog-content text-black">
      {typeof content === 'string' ? (
        <div dangerouslySetInnerHTML={{ __html: content }} />
      ) : (
        content
      )}
    </div>
  );
}