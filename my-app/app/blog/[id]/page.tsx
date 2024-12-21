'use client'; // Place this at the very top

// Import the BlogPost type and blogPosts array from the correct file
import { BlogPost } from "../../data/blogPosts";  // Adjust the path as necessary
import blogPosts from "../../data/blogPosts";

interface PageProps {
  params: { id: string };
}

export default function BlogPostPage({ params }: PageProps) {
  // Find the blog post with the id from params
  const post = blogPosts.find((post: BlogPost) => post.id === params.id);

  // Handle case if the post is not found
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
