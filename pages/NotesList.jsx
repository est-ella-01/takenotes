import React from "react";
import { Note } from "../components/Note";
import { TakeNoteBtn } from "../components/TakeNoteBtn";
import {db} from '../src/takeNotesFirebase'
import { useEffect, useState} from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore"


export const NotesList = ({ setNoteId, currentUser }) => {
  
  const [notesList,setNotesList]=useState([])

  useEffect(()=>{
    if(currentUser){
    const collectionRef=collection(db,'notesDB')
    const q=query(collectionRef,where('userId','==',currentUser?.uid))
    const unsubscribe=onSnapshot(q,(snapshot)=>{
      setNotesList(snapshot.docs.map(doc =>({id: doc.id, ...doc.data()})))
    return unsubscribe
    })
    }else{
      console.log('loading')
    }
  },[currentUser])


  return (
    <div className="noteslist d-flex flex-column align-items-center">
      <TakeNoteBtn setNoteId={setNoteId} currentUser={currentUser} />
      {currentUser ? notesList.map(note => <Note key={note.id} {...note} setNoteId={setNoteId} />)
      : "you don't have any notes yet"}
    </div>
  );
};
