import {db} from '../src/takeNotesFirebase'
import { collection, addDoc, doc, setDoc, deleteDoc } from "firebase/firestore"

//create new note
export const addNewNote = async (newNote)=>{
    const collectionRef=collection(db, 'notesDB')
    await addDoc(collectionRef,newNote)
  }

//read existing note


//update existing note
export const updateNote = async (id,editedNote)=>{
  const docRef=doc(db, "notesDB",id)
  await setDoc(docRef,editedNote)
}

//delete existing note

export const deleteNote = async (id)=>{
  const docRef=doc(db, 'notesDB', id)
  await deleteDoc(docRef)
}