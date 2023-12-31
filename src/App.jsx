import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from '../components/Navbar'
import { NotesList } from '../pages/NotesList'
import { SignUp } from '../pages/SignUp'
import { SignIn } from '../pages/SignIn'
import {AddEditNote} from '../pages/AddEditNote'
import {Profile} from '../pages/Profile'
import {Routes, Route} from 'react-router-dom'
import { NotFound } from '../pages/NotFound'
import { useState } from 'react'
import { useAuth } from '../utils/userFunctions';

export const App=()=>{

const [noteId,setNoteId]=useState(null)
const currentUser=useAuth()

console.log('this is the selected note: '+noteId)
console.log('currently logged in as: '+currentUser?.email)


  return (
    <>
    <div>
      <div className='my-navbar'>
        <Navbar currentUser={currentUser}/>
      </div>
      <div className='page-container ps-1 pe-1 pb-1 container-sm container-md'>
        <Routes>
          <Route path='/' element={<NotesList setNoteId={setNoteId} currentUser={currentUser}/>} /> 
          <Route path='signup' element={<SignUp currentUser={currentUser} />} />
          <Route path='signin' element={<SignIn currentUser={currentUser}/>} />
          <Route path='editnote' element={<AddEditNote currentUser={currentUser} noteId={noteId} />} />
          <Route path='profile' element={currentUser && <Profile currentUser={currentUser}/>} />
          <Route path='*' element={<NotFound />} />
      </Routes>
      </div>
    </div>
    </>
  )
}