// app/blog/[id]/page.tsx
'use client';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const BlogPostPage = () => {
  const router = useRouter();
  const { id } = router.query;  // Fetch the dynamic id from the URL
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (id) {
      // Fetch data based on the post id
      fetch(`/api/blog/${id}`)
        .then((response) => response.json())
        .then((data) => setPost(data));
    }
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPostPage;
