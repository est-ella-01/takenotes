import React from "react";
import { signIn } from "../utils/userFunctions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignIn = ({currentUser}) => {
  const [loading,setLoading]=useState(false)

  const navigate=useNavigate()
  

const handleLogIn= async ()=>{
  event.preventDefault()
  const email=document.getElementById('newUserEmail').value
  const password=document.getElementById('newUserPassword').value
  setLoading(true)
  try {
    signIn(email,password)
  } catch (error) {
    alert('There has been an error')
    console.log(error)
  }
  setLoading(false)
  navigate('/')
}

  return (
    <div className="mt-3"
    >
      <form>
        <div className="mb-3">
          <label htmlFor="newUserEmail" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="newUserEmail"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="newUserPassword" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="newUserPassword"
          />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        </div>
    
        <button disabled={loading || currentUser} className="btn btn-dark" onClick={()=>handleLogIn()}>
          Login
        </button>
        
      </form>
    </div>
  );
};
