import React from 'react';
import BlogArticles from './BlogArticles'
import BlogAside from './BlogAside'

const BlogMain = (props) => {
  return (
    <div class="wrap grid-wrapper">
      <BlogArticles />
      <BlogAside />
    </div>
  )
}

export default BlogMain;
