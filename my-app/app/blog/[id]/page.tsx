import { useParams } from "next/navigation";
import blogPosts from "../../../data/blogPosts";

export default function BlogPostPage() {
  const { id } = useParams();
  const post = blogPosts.find((post) => post.id === id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <img src={post.image} alt={post.title} className="w-full rounded-md mb-4" />
      <p className="text-gray-700">{post.content}</p>
    </div>
  );
}
