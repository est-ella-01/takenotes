import React from "react";
import { signUp } from "../utils/userFunctions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignUp = ({currentUser}) => {
  
  const [loading,setLoading]=useState(false)
  const navigate=useNavigate()
  

  const handleSignUp= async()=>{
    event.preventDefault()
    const userName=document.getElementById('newUserName').value
    const email=document.getElementById('newUserEmail').value
    const password=document.getElementById('newUserPassword').value
    const password2=document.getElementById('secondPassword').value


    if (!userName || !email || !password || !password2) {
      alert('Please fill all required fields!')
      return
    }
    
    if (password!=password2) {
        alert('Please type the same password twice!')
        return
      }

    console.log(email,password,userName)
    setLoading(true)
    try {
      signUp(email,password,userName)
    } catch (error) {
      alert('There has been an error')
      console.log(error)
    }
    setLoading(false)
    navigate('/')
  }

  return (
    <div className="mt-3">
      <form>
      <div className="mb-3">
          <label htmlFor="newUserName" className="form-label">
            Username *
          </label>
          <input
            type="text"
            className="form-control"
            id="newUserName"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="newUserEmail" className="form-label">
            Email address *
          </label>
          <input
            type="email"
            className="form-control"
            id="newUserEmail"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="newUserPassword" className="form-label" aria-describedby="pw-describe">
            Password *
          </label>
          <input
            type="password"
            className="form-control"
            id="newUserPassword"
            required
          />
          <div id="pw-describe" class="form-text">Your password must be at least 6 characters long.</div>
        </div>
      
        <div className="mb-3">
          <label htmlFor="secondPassword" className="form-label">
            Password again *
          </label>
          <input
            type="password"
            className="form-control"
            id="secondPassword"
            required
          />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        </div>
        <button disabled={loading || currentUser} className="btn btn-dark" onClick={()=>handleSignUp()}>
          Sign up
        </button>
        
      </form>
    </div>
  );
};
