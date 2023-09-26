// BlogPost.js
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import blogData from '../mock/data';
import '../styles/BlogPost.css'

function BlogPost() {
  const { id } = useParams();
  const blog = blogData.find((blog) => blog.id === parseInt(id));

  useEffect(() => {
    document.title = `${blog.title}`;
  }, [blog]);
  
  useEffect(() => {
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = `${blog.description}`;
    document.head.appendChild(metaDescription);
  }, [blog]);

  if (!blog) {
    return <div>Blog post not found.</div>;
  }

  return (
    <>
    <div className='header'>{blog.title}</div>
    <div className='container'>
       <div className='imageDiv'>
            <img
        src={blog.url}
        alt={blog.title}
        className='img'
       
      />
      </div>
      <div className='desc'>{blog.description}</div>
      <div className='cont'>{blog.content}</div>
    </div>
    </>
  );
}

export default BlogPost;
