import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from './firebase';

// Firestore collection for blog posts
export const postsCollection = collection(db, 'posts');

// Schema definition for blog posts
export const postSchema = {
  title: 'string',
  slug: 'string',
  body: 'string',
  metadata: 'object',
};

// Fetch all blog posts
export async function getAllPosts() {
  const snapshot = await getDocs(postsCollection);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

// Fetch a single post by slug
export async function getPostBySlug(slug) {
  const q = query(postsCollection, where('slug', '==', slug));
  const snapshot = await getDocs(q);
  if (snapshot.empty) return null;
  const doc = snapshot.docs[0];
  return { id: doc.id, ...doc.data() };
}
