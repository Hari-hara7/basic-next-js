'use client'; // Place this at the very top

import { useRouter } from "next/router";
import blogPosts, { BlogPost } from "../../../data/blogPosts";

export default function BlogPostPage() {
  const { query } = useRouter();  // This is where the `id` param comes from
  const postId = query.id as string;  // Get the dynamic `id` param as string

  // Find the post by ID
  const post = blogPosts.find((p) => p.id === postId);

  // Handle case where post is not found
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <header className="text-center py-12 bg-gradient-to-r from-blue-400 to-purple-600 text-white rounded-lg">
        <h1 className="text-4xl font-bold">{post.title}</h1>
        <p className="mt-2">{post.excerpt}</p>
      </header>
      <div className="mt-8 p-4">
        <img src={post.image} alt={post.title} className="w-full h-64 object-cover" />
        <p className="mt-4">{post.content}</p>
      </div>
    </div>
  );
}
