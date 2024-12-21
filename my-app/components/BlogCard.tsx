interface BlogCardProps {
    post: {
      title: string;
      slug: string;
      image: string;
      date: string;
      excerpt: string;
    };
  }
  
  export default function BlogCard({ post }: BlogCardProps) {
    return (
      <div className="bg-dark shadow-md rounded-lg overflow-hidden">
        <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
          <p className="text-sm text-gray-500 mb-4">{post.date}</p>
          <p className="text-gray-700 mb-4">{post.excerpt}</p>
          <a href={`/blog/${post.slug}`} className="text-blue-500 hover:underline">
            Read More →
          </a>
        </div>
      </div>
    );
  }
  