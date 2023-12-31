import React from "react";
import { updateProfile } from "firebase/auth";
import { auth } from "../src/takeNotesFirebase";

export const Profile = ({ currentUser }) => {

  const handleProfileUpdate=()=>{
    event.preventDefault()
    const newUserName=document.getElementById('username').value
    console.log(newUserName)
    try {
      updateProfile(auth.currentUser,{
      displayName: newUserName
    })
    } catch (error) {
      console.log(error)
    }
   
  }

  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="username" className="form-label" >
            username
          </label>
          <input type="text" className="form-control" id="username" defaultValue={currentUser?.displayName}/>
        </div>
        <div className="mb-3">
          <label htmlFor="useremail" className="form-label" >
            email address
          </label>
          <input disabled type="email" className="form-control" id="useremail" defaultValue={currentUser?.email}/>
        </div>
        <button className="btn btn-dark" onClick={handleProfileUpdate}>save changes</button>
      </form>
    </div>
  );
};
