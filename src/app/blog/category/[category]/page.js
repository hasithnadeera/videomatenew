import { getAllPosts, getAllCategories } from '../../lib/blogData';
import CategoryClientPage from './CategoryClientPage';

export async function generateStaticParams() {
  const categories = await getAllCategories();
  return categories.map((category) => ({
    category: category.slug,
  }));
}

export default async function CategoryArchivePage({ params }) {
  const allPosts = await getAllPosts();
  const filteredPosts = allPosts.filter(post => 
    post.category === decodeURIComponent(params.category)
  );

  return <CategoryClientPage initialPosts={filteredPosts} category={decodeURIComponent(params.category)} />;
}