// BlogList.js
import React from  'react';
import '../styles/Modal.css'


function DeleteConfirmModal({onConfirm,onClose,id}) {
  return (
        <>
         <div className="modal">
    <div className="modal-header">
    <div>Delete Blog</div>
      <div className="close" onClick={onClose}>&times;</div>
     </div>
     <div className='modal-content'>
      <div>Are you sure? You want to delete this blog</div>
      <div className='modal-buttons'>
        <button className='cancel-button' onClick={onClose}>Cancel</button>
        <button className='confirm-button' onClick={()=>onConfirm(id)}>Delete</button>
      </div>
    </div>
  </div>
  <div className="overlay"></div>
        </>
  );
}

export default DeleteConfirmModal;
