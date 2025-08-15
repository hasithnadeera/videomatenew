import fs from 'fs';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'src/app/blog/content/posts');

// Helper function to parse frontmatter
function parseFrontmatter(fileContents) {
  const lines = fileContents.split('\n');
  const metadata = {};
  
  // Extract frontmatter (between --- and ---)
  let contentStart = 0;
  if (lines[0] === '---') {
    for (let i = 1; i < lines.length; i++) {
      if (lines[i] === '---') {
        contentStart = i + 1;
        break;
      }
    }
  }
  
  // Parse frontmatter if it exists
  if (lines[0] === '---') {
    let frontmatterEnd = 0;
    for (let i = 1; i < lines.length; i++) {
      if (lines[i] === '---') {
        frontmatterEnd = i;
        break;
      }
    }
    
    if (frontmatterEnd > 0) {
      const frontmatterLines = lines.slice(1, frontmatterEnd);
      frontmatterLines.forEach(line => {
        const colonIndex = line.indexOf(':');
        if (colonIndex > 0) {
          const key = line.substring(0, colonIndex).trim();
          let value = line.substring(colonIndex + 1).trim();
          
          // Remove quotes if present
          if (value.startsWith('"') && value.endsWith('"')) {
            value = value.substring(1, value.length - 1);
          } else if (value.startsWith("'") && value.endsWith("'")) {
            value = value.substring(1, value.length - 1);
          }
          
          // Parse arrays
          if (value.startsWith('[') && value.endsWith(']')) {
            try {
              metadata[key] = JSON.parse(value);
            } catch (e) {
              // If JSON parsing fails, split by comma
              metadata[key] = value.substring(1, value.length - 1).split(',').map(item => item.trim().replace(/^["']|["']$/g, ''));
            }
          } else {
            metadata[key] = value;
          }
        }
      });
    }
  }
  
  // Extract title from first # heading if not in frontmatter
  if (!metadata.title) {
    for (let i = contentStart; i < lines.length; i++) {
      if (lines[i].startsWith('# ')) {
        metadata.title = lines[i].substring(2);
        break;
      }
    }
  }
  
  return {
    ...metadata,
    content: lines.slice(contentStart).join('\n')
  };
}

export async function GET(request, { params }) {
  try {
    const { slug } = params;
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    
    // Check if file exists
    if (!fs.existsSync(fullPath)) {
      return new Response(
        JSON.stringify({ error: 'Post not found' }),
        {
          status: 404,
          headers: {
            "content-type": "application/json",
          },
        }
      );
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const postData = parseFrontmatter(fileContents);
    
    return new Response(
      JSON.stringify({
        id: `mdx-${slug}`,
        slug,
        ...postData
      }),
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error('Error fetching post:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to fetch post' }),
      {
        status: 500,
        headers: {
          "content-type": "application/json",
        },
      }
    );
  }
}