import React from 'react'
import './LoginSignup.css'
import { useState } from 'react';
import user_icon from "../../assets/person.png";
import email_icon from "../../assets/email.png";
import password_icon from "../../assets/password.png";

const LoginSignup = () => {

    const [action,setAction]=useState("Sign Up");
  return (
    <div className='container' >
      <div className="header">
        <div className="text">
            {action}
        </div>
        <div className="underline"></div>
      </div>
     <div className="inputs">
     {action === "Login" ? (
  <div></div>
) : (
  <div className="input">
    <img src={user_icon} alt="user icon" />
    <input type="text" placeholder="name" />
  </div>
)}     
         <div className="input">
            <img src={email_icon} alt="email icon" />
            <input type="email" placeholder='email' />
         </div>

         <div className="input">
            <img src={password_icon} alt="password icon" />
            <input type="password" placeholder='password' />
         </div>
         {action=="Sign Up"?<div></div>:<div className="forgot_password">Lost password? <span>click here</span></div>}
     
     <div className="submit_container">
        <div className={action=="Login"?"submit gray":"submit"}  onClick={()=>{
            setAction("Sign Up")
        }}>
        <div className="signup_button">Sign Up</div>

        </div>
        
        <div className={action=="Sign Up"?"submit gray":"submit"}  onClick={()=>{
            setAction("Login")
        }}>
        <div className="login_button" >Login</div>

        </div>
        </div>
     </div>

     </div>


    )
}

export default LoginSignup