import nextMdx from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx']
};

const withMDX = nextMdx({
  extension: /\.mdx?$/
});


export default withMDX(nextConfig);
