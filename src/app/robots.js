export default function robots() {
  const isProd = process.env.VERCEL_ENV === 'production';
  return {
    rules: isProd
      ? { userAgent: '*', allow: '/' }
      : { userAgent: '*', disallow: '/' }, // block previews
    sitemap: 'https://www.videomate.io/sitemap.xml',
    host: 'https://www.videomate.io',
  };
}
