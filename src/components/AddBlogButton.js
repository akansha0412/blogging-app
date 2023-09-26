// BlogList.js
import React from  'react';
import { useHistory } from 'react-router-dom';
import '../styles/AddBlogButton.css'


function AddBlogButton() {
    const history = useHistory()
  return (
         <button onClick={()=> history.push(`/create`)}>Add Blog</button>
  );
}

export default AddBlogButton;
