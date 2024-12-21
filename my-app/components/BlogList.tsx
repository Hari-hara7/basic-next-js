'use client';  // Add this at the top if you're using hooks

import Link from 'next/link';


interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
}

interface BlogListProps {
  posts: BlogPost[];
}

const BlogList = ({ posts }: BlogListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {posts.map((post) => (
        <div key={post.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="mt-2">{post.excerpt}</p>
            <Link href={`/blog/${post.id}`} className="text-blue-500 hover:underline mt-4 inline-block">
              Read More
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
