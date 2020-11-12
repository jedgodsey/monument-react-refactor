import './Blog.css';
import React from 'react';
import BlogHeader from '../components/BlogHeader';
import BlogMain from '../components/BlogMain';
import CommentForm from '../components/CommentForm';



const Blog = (props) => {
  return (
    <body className="blog-page">
      <BlogHeader />
      <BlogMain />
      <CommentForm />
    </body>
  )
}

export default Blog;
