import { getAllPosts, getAllTags } from '../../lib/blogData';
import TagClientPage from './TagClientPage';

export async function generateStaticParams() {
  const tags = await getAllTags();
  return tags.map((tag) => ({
    tag: tag.slug,
  }));
}

export default async function TagArchivePage({ params }) {
  const allPosts = await getAllPosts();
  const filteredPosts = allPosts.filter(post => 
    post.tags.includes(decodeURIComponent(params.tag))
  );

  return <TagClientPage initialPosts={filteredPosts} tag={decodeURIComponent(params.tag)} />;
}