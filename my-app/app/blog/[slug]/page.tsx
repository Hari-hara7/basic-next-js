import { useRouter } from "next/router";
import blogPosts from "../../../data/blogPosts";

export default function BlogPost() {
  const { query } = useRouter();
  const { slug } = query;

  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return <p>Blog post not found!</p>;
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700 mb-6">{post.date}</p>
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-auto rounded-lg mb-6"
      />
      <p>{post.content}</p>
    </div>
  );
}
