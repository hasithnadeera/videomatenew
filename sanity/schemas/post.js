export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    {
      name: 'slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 }
    },
    { name: 'excerpt', type: 'text' },
    {
      name: 'mainImage',
      type: 'image',
      options: { hotspot: true }
    },
    { name: 'body', type: 'array', of: [{ type: 'block' }] },
    { name: 'publishedAt', type: 'datetime' }
  ]
};
