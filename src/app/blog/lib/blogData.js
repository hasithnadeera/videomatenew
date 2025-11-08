// Blog data utility

import { supabase } from '@/lib/supabaseClient';

// Helper function to handle Supabase errors
function handleSupabaseError({ error, message }) {
    if (error) {
        console.error(message, error);
        return [];
    }
}

export async function getAllPosts() {
    const { data: posts, error } = await supabase
        .from('posts')
        .select(`
            id,
            title,
            slug,
            excerpt,
            thumbnail_url,
            published_at,
            author:authors(full_name, avatar_url),
            category:categories(name, slug)
        `)
        .order('published_at', { ascending: false });

    handleSupabaseError({ error, message: 'Error fetching posts:' });
    return posts || [];
}

export async function getPostBySlug(slug) {
    const { data: post, error } = await supabase
        .from('posts')
        .select(`
            *,
            author:authors(full_name, avatar_url),
            category:categories(name, slug),
            tags:post_tags(tag:tags(name, slug))
        `)
        .eq('slug', slug)
        .single();
    
    handleSupabaseError({ error, message: `Error fetching post ${slug}:` });
    
    if (post) {
      // The content is already stored as HTML, so we just return it.
      // We rename some fields to match the old data structure for compatibility.
      return {
        ...post,
        content: post.html_content,
        date: post.published_at,
        // The tags are nested, so we flatten them
        tags: post.tags.map(t => t.tag.name),
      };
    }
    
    return null;
}

export async function getPostsByCategory(categorySlug) {
    const { data: category, error: categoryError } = await supabase
        .from('categories')
        .select('id')
        .eq('slug', categorySlug)
        .single();

    handleSupabaseError({ error: categoryError, message: `Error fetching category ${categorySlug}:` });

    if (!category) return [];

    const { data: posts, error } = await supabase
        .from('posts')
        .select(`
            id, title, slug, excerpt, thumbnail_url, published_at,
            author:authors(full_name, avatar_url),
            category:categories(name, slug)
        `)
        .eq('category_id', category.id)
        .order('published_at', { ascending: false });

    handleSupabaseError({ error, message: 'Error fetching posts by category:' });
    return posts || [];
}

export async function getPostsByTag(tagSlug) {
    const { data: tag, error: tagError } = await supabase
        .from('tags')
        .select('id')
        .eq('slug', tagSlug)
        .single();
    
    handleSupabaseError({ error: tagError, message: `Error fetching tag ${tagSlug}:` });

    if (!tag) return [];

    const { data: posts, error } = await supabase
        .from('post_tags')
        .select(`
            post:posts!inner(
                id, title, slug, excerpt, thumbnail_url, published_at,
                author:authors(full_name, avatar_url),
                category:categories(name, slug)
            )
        `)
        .eq('tag_id', tag.id)
        .order('published_at', { referencedTable: 'posts', ascending: false });
        
    handleSupabaseError({ error, message: 'Error fetching posts by tag:' });

    // The result is nested, so we map it to the expected structure
    return posts ? posts.map(p => p.post) : [];
}

export async function getAllCategories() {
    const { data: categories, error } = await supabase
        .from('categories')
        .select('name, slug');
    handleSupabaseError({ error, message: 'Error fetching categories:' });
    return categories || [];
}

export async function getAllTags() {
    const { data: tags, error } = await supabase
        .from('tags')
        .select('name, slug');
    handleSupabaseError({ error, message: 'Error fetching tags:' });
    return tags || [];
}

export async function getRelatedPosts(post, limit = 3) {
    if (!post || (!post.category_id && (!post.tags || post.tags.length === 0))) {
        return [];
    }

    // This is a simplified logic. A more robust implementation might use database functions.
    const { data: posts, error } = await supabase
        .from('posts')
        .select(`
            id, title, slug, thumbnail_url,
            author:authors(full_name)
        `)
        .neq('id', post.id)
        .eq('category_id', post.category_id)
        .limit(limit);

    handleSupabaseError({ error, message: 'Error fetching related posts:' });
    return posts || [];
}