import Link from "next/link";
import { BlogPost } from "../data/blogPosts";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.id}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-40 object-cover rounded-md"
        />
        <h2 className="mt-4 text-xl font-bold">{post.title}</h2>
        <p className="mt-2 text-sm text-gray-600">{post.excerpt}</p>
      </div>
    </Link>
  );
}
