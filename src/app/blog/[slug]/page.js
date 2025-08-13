import Image from 'next/image';
import {PortableText} from '@portabletext/react';
import {client, urlFor} from '../../../lib/sanity';
import {notFound} from 'next/navigation';

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await client.fetch(`*[_type=="post" && defined(slug.current)][].slug.current`);
  return slugs.map(slug => ({slug}));
}

async function getPost(slug) {
  const query = `*[_type=="post" && slug.current==$slug][0]{title,excerpt,body,mainImage}`;
  return client.fetch(query, {slug});
}

export async function generateMetadata({params}) {
  const post = await getPost(params.slug);
  if (!post) return {};
  return {title: post.title, description: post.excerpt};
}

export default async function PostPage({params}) {
  const post = await getPost(params.slug);
  if (!post) return notFound();
  return (
    <article className="prose mx-auto py-8">
      <h1>{post.title}</h1>
      {post.mainImage && (
        <Image
          src={urlFor(post.mainImage).width(800).url()}
          alt={post.title}
          width={800}
          height={500}
          className="w-full h-auto"
        />
      )}
      <PortableText value={post.body} />
    </article>
  );
}
