import BlogList from "../components/BlogList";
import blogPosts from "../data/blogPosts";

export default function Home() {
  return (
    <div>
      <header className="text-center py-12 bg-gradient-to-r from-blue-400 to-purple-600 text-white rounded-lg">
        <h1 className="text-4xl font-bold">Welcome to Medium Blog</h1>
        <p className="mt-2">Discover the latest articles and insights.</p>
      </header>
      <BlogList posts={blogPosts} />
    </div>
  );
}
