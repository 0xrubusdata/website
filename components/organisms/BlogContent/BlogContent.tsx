// components/organisms/BlogContent/BlogContent.tsx
import React from 'react';

interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  tags: string[];
  content: string;
}

const BlogContent: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <div className="blog-post">
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      <p>Posted on {post.date}</p>
      <ul>
        {post.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <div className="blog-content">{post.content}</div>
    </div>
  );
};

export default BlogContent;