import { createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { auth } from "../src/takeNotesFirebase";
import { useState } from "react";
import { useEffect } from "react";

export const signUp= async (email,password,displayName)=>{
   try {
      await createUserWithEmailAndPassword(auth, email, password)
      await updateProfile(auth.currentUser, {displayName})
   } catch (error) {
      alert('There has been an error')
      console.log(error)
   }
}

export const signIn= async (email,password)=>{
   try {
      await signInWithEmailAndPassword(auth, email, password)
   } catch (error) {
      console.log(error)
   }
  
}

export const logOut=()=>{
   signOut(auth)
}

export const useAuth=()=>{
   const [currentUser, setCurrentUster]=useState()
   useEffect(()=>{
      const unsub= onAuthStateChanged(auth, user => setCurrentUster(user))
      return unsub
   }, [])
   return currentUser
}