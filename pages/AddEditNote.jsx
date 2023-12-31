import React from "react";
import {db} from '../src/takeNotesFirebase'
import { serverTimestamp, doc, getDoc} from "firebase/firestore"
import { addNewNote, deleteNote, updateNote} from "../utils/crud";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const AddEditNote = ({currentUser, noteId}) => {  

  const [note,setNote]=useState()

  const navitage=useNavigate()

  const getNote = async ()=>{
    const docRef=doc(db, 'notesDB', noteId)
    try {
       const noteSnapshot=await getDoc(docRef)
       setNote(noteSnapshot.data())
    } catch (error) {
        console.log(error)
    }
  }

 useEffect(()=>{
    if(noteId==null){
       return
    }else{
      getNote(noteId)
    }
  },[])

  const readOutData=()=>{
    event.preventDefault()
    const title=document.getElementById('title-input-field').value
    const content=document.getElementById('note-input-field').value
    const timeStamp=serverTimestamp()
    const newNote={
      title,
      content,
      timeStamp,
      author: currentUser.displayName,
      userId: currentUser.uid
    }
    console.log(newNote)
    setNote(newNote)
  }

  const handleSave=()=>{
    event.preventDefault
    readOutData()
    if(noteId==null){
      addNewNote(note)
    }else{
      updateNote(noteId,note)
    }
    navitage('/')
  }

  const handleDelete=()=>{
   deleteNote(noteId)
   navitage('/')
 }

  return (
    <>
      <div className="mt-3">
        <div className="mb-3">
        
          <label htmlFor="title-input-field" className="form-label" >
            Title
          </label>
          <input 
            type="text"
            className="form-control"
            id="title-input-field"
            placeholder="Add a title"
            defaultValue={note?.title}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="note-input-field" className="form-label">
            Note text
          </label>
          <textarea
            className="form-control"
            id="note-input-field"
            rows="10"
            placeholder="Write your note"
            defaultValue={note?.content}
          ></textarea>
        </div>
       
        <button className="btn btn-dark me-2" onClick={()=>handleSave()} style={{marginTop:'10px'}}>
             save       
            </button>
            <button type="submit" className="btn btn-secondary" onClick={()=>handleDelete()} style={{marginTop:'10px'}}>
             delete note       
            </button>
      </div>
   
    </>
  );
};
