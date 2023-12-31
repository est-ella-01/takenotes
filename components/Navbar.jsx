import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import {logOut} from "../utils/userFunctions";


export const Navbar = ({ currentUser }) => {

  const handleLogOut= async ()=>{
    event.preventDefault()
    try {
      logOut()
    } catch (error) {
      alert('There has been an error')
      console.log(error)
    }
  }

  return (
    <div className="navbar-container">
      <div
        className="p-1 d-flex justify-content-between align-items-center
      container-sm container-md"
      >
        <div>
          <NavLink to="/">
            <span className="appname">takenotes</span>
          </NavLink>
        </div>
        <div>
          {currentUser ?  (
            <>
            <NavLink to="/profile">
              <span className="me-3 menu-item">{currentUser?.displayName}</span>
            </NavLink>
            <NavLink to="/">
              <span className="menu-item" onClick={()=>handleLogOut()}>log out</span>
            </NavLink>
            </>
          ) :   (
          <>
            <NavLink to="/signup">
              <span className="me-3 menu-item">sign up</span>
            </NavLink>
            <NavLink to="/signin">
              <span className="menu-item">log in</span>
            </NavLink>
          </>
        ) }
        </div>
      </div>
    </div>
  );
};
