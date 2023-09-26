// CreateBlog.js
import React, { useState } from 'react';
import '../styles/CreateBlog.css'

function CreateBlog() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');

  //here we can have upload feature also to upload image of a blog

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to the server) and show the list again with updated data
    // and we can show snackbar also after successfully blog been created
  };

  return (
    <div>
      <div className='heading'>Create a New Blog Post</div>
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
        <button className='submitButton' type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateBlog;
