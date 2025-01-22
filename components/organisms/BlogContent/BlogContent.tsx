// components/organisms/BlogContent/BlogContent.tsx
import React from 'react';
import styles from '../../../styles/BlogContent.module.css';

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
        <div className={styles.blogPost}>
            <h2 className={styles.title}>{post.title}</h2>
            <p className={styles.description}>{post.description}</p>
            <p className={styles.date}>Posted on {post.date}</p>
            <div className={styles.blogContent}>{post.content}</div>
            <ul className={styles.tags}>
                {post.tags.map((tag) => (
                    <li key={tag}>
                        <a href="#">{tag}</a>
                    </li>
                ))}
            </ul>
            
        </div>
    );
};

export default BlogContent;