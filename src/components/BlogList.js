// BlogList.js
import React, { useEffect, useState } from 'react';
import blogData  from '../mock/data';
import { useHistory } from 'react-router-dom';
import '../styles/BlogList.css'
import { DeleteIcon } from '../icons/DeleteIcon';
import {EditIcon} from '../icons/EditIcon'
import AddBlogButton from './AddBlogButton';
import DeleteConfirmModal from './DeleteConfirmModal';

function BlogList() {
const history=useHistory();
const [data,setBlogData]=useState(blogData)
const [open,setOpen]=useState('')

useEffect(() => {
  document.title = 'Home Page - Your Blog';
}, []);

useEffect(() => {
  const metaDescription = document.createElement('meta');
  metaDescription.name = 'description';
  metaDescription.content = 'Welcome to our blog homepage';
  document.head.appendChild(metaDescription);
}, []);

  function handleCardClick(id){
    history.push(`/blog/${id}`)
  }

  function handleDelete(e,id){
    // first we can show modal also to confirm we want to delete this blog or not
    e.stopPropagation();
    setOpen(id)
   
  }

  function onConfirm(id){
    const newArray = data.filter(obj => obj.id !== id);
    setBlogData(newArray)
    setOpen(null)
  }

  function handleEdit(e,blog){
    e.stopPropagation();
    history.push(`/edit/${blog.id}`)
    }

  function getDetails(blog){
    return <div className='cardDetailsContainer'>
      <div className='title'>{blog.title}</div>
    <div
      className='description'
    >
      {blog.description}
    </div>
    <div className='content'>{blog.content}</div>
    <div className='iconContainer'>
          <EditIcon className='icon'onClick={(e)=>handleEdit(e,blog)}/>
          <DeleteIcon className='icon' onClick={(e)=>handleDelete(e,blog.id)}/>
        </div>
  </div>
  }

  return (
    <>
          <div className='headerDiv'>
            <div className='heading'>Blog Posts</div>
          <AddBlogButton/>
          </div>
    <div className='cardContainer'>
        {data.map((blog) => (
          <div key ={blog.id} className='card' onClick={() => handleCardClick(blog.id)}>
          <div className='imageContainer'>
            <img
        src={blog.url}
        alt={blog.title}
        className='image'
       
      />
          </div>
          <div className='cardDetails'>{getDetails(blog)}</div>       
        </div>
        
        ))}
        
    </div>
    {open && <DeleteConfirmModal onConfirm={(id)=>onConfirm(id)} onClose={()=>setOpen(null)} id={open} />}
    </>
  );
}

export default BlogList;
