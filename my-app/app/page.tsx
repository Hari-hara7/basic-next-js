import BlogCard from "../components/BlogCard";
import blogPosts from "../data/blogPosts";

export default function Home() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-6">Welcome to Our Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post: { slug: string; title: string; content: string }) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
