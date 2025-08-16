import { getAllPosts, getAllCategories, getAllTags } from './lib/blogData';
import BlogClientPage from './BlogClientPage';

export default async function BlogPage() {
  const postsData = await getAllPosts();
  const categoriesData = await getAllCategories();
  const tagsData = await getAllTags();

  return <BlogClientPage initialPosts={postsData} initialCategories={categoriesData} initialTags={tagsData} />;
}