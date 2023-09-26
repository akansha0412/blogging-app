// CreateBlog.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import blogData from '../mock/data';
import '../styles/CreateBlog.css'

function EditBlog() {
  
  const { id } = useParams();
  const blog = blogData.find((blog) => blog.id === parseInt(id));
  const [title, setTitle] = useState(blog.title);
  const [description, setDescription] = useState(blog.description);
  const [content, setContent] = useState(blog.content);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to the server) and show the list again with updated data
  };

  return (
    <div>
      <div className='heading'>Edit a Blog Post</div>
      <form onSubmit={handleSubmit}>
        <div className='inputField'>
        <label>
          Title:
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        
        </div>
        <div className='inputField'>
        <label>
          Description:
          
</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
       
        </div>
        <div className='inputField'>
        <label>
          Content:
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button className='submitButton' type="submit">Save</button>
      </form>
    </div>
  );
}

export default EditBlog;
