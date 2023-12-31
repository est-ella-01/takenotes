import React from 'react'
import { useNavigate } from 'react-router-dom'

export const TakeNoteBtn = ({setNoteId, currentUser}) => {

  const navitage=useNavigate()

  const handleNewNote=()=>{
    if (currentUser) {
      setNoteId(null)
      navitage('editnote')
    }else{
      alert('Log in or sign up in order to create your first note!')
    }
  }
  

  return (
    <div className='mt-3 mb-2'>
          <button className='btn btn-dark btn-lg' onClick={handleNewNote}>
             take a note
          </button>
    </div>
  )
}
