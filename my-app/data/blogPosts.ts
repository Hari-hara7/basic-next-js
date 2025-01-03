// Define the BlogPost type
export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    image: string;
  }
  
  // Array of blog posts
  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "Getting Started with ShadCN",
      excerpt: "Learn the basics of ShadCN UI in this beginner-friendly guide.",
      content: "Full blog content goes here...",
      image: "/images/blog-image.jpg", 
    },
    {
      id: "2",
      title: "Building Responsive UI with Tailwind",
      excerpt: "Discover how to create stunning responsive designs.",
      content: "Full blog content goes here...",
      image: "/images/blog-image2.jpg", 
    },
    {
      id: "3",
      title: "TypeScript Tips for Next.js",
      excerpt: "Enhance your Next.js projects with these TypeScript tips.",
      content: "Full blog content goes here...",
      image: "/images/blog-image3.jpg", 
    },
  ];
  
  export default blogPosts;
  