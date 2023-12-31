
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


export const Note = ({id, title, author, timeStamp, content, setNoteId }) => {
  const [modal, setModal] = useState(false);
  const navigate=useNavigate()
  
  const toggle = () => {
    setModal(!modal)
    setNoteId(id)
  };

  const handleEdit=()=>{
    setNoteId(id)
    navigate('/editnote')
  }


  return (
    <div className='note-container rounded m-1 p-2 w-100' style={{backgroundColor:'rgb(184,184,184)'}}>
      <h3>{title}</h3>
      <p>{content.slice(0,100) + '...'}</p>
      <button onClick={toggle} className='btn btn-dark btn-sm me-2'>
        details
      </button>
     <button onClick={handleEdit} className='btn btn-dark btn-sm me-2'>
        edit
      </button>
      

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
           {title}
        </ModalHeader>
        <ModalBody>
          <div>
            <p>author: {author}</p>
          </div>
          {content}
        </ModalBody>
        <ModalFooter>
          <NavLink to="/editnote"><Button color="dark">
            edit
          </Button> </NavLink>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
}
