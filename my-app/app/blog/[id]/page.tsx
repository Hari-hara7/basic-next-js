'use client'; // Place this at the very top


// Import Next.js's required types
import { useParams } from 'next/navigation'; // Ensure you're using the right hook
import blogPosts from "../../../data/blogPosts";
import { BlogPost } from "../../../data/blogPosts"; // Ensure the BlogPost type is imported

export default function BlogPostPage() {
  // Get the id from params using the useParams hook
  const { id } = useParams(); // This hook automatically gets the dynamic params from the URL

  // If no id is found in params, show an error or fallback UI
  if (!id) {
    return <div>Post not found</div>;
  }

  // Find the post by id
  const post = blogPosts.find((post: BlogPost) => post.id === id);

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

