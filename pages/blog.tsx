// pages/blog.tsx
import React from 'react';
import { FC } from 'react';
import styles from '../styles/Blog.module.css';
import { blogData } from '../data/blogData';
import BlogContent from '@/components/organisms/BlogContent/BlogContent';

const Blog: FC = () => {
  return (
    <div className={styles.container}>
      {blogData.map((post) => (
        <BlogContent key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Blog;