import React, { useState } from 'react'
import "./Login.css"
import {login,signup} from "../../firebase.js"
import { Navigate, useNavigate } from 'react-router-dom';
export const Login = () => {

  const [signState,setsignState]=useState("Sign In");
  const navigate=useNavigate();

   const [name,setname]=useState("");
   const [email,setemail]=useState("");
   const [password,setpassword]=useState("");


   const user_auth=async(event)=>{
    event.preventDefault()
    if(signState==="sign In"){
      await login(email,password);
    }
    else{
      await signup(name,email,password);
    }
   }
     

  return (
    <div className='login'>
      <img src="./images/logo.png"  className="login-logo"alt="" />
      <div className='login-form'>
        <h1>{signState}</h1>
        <form action=''>
          {signState==="Sign Up"?<input   value={name} onChange={(e)=>setname(e.target.value)}  type="text" placeholder='Your name'/>:""}

          <input   value={email} onChange={(e)=>setemail(e.target.value)}    type="email" placeholder='Email'/>

          <input    value={password} onChange={(e)=>setpassword(e.target.value)}    type="password" placeholder='password' />

          <button  onSubmit={user_auth} type='submit' onClick={()=>navigate("/")}>Sign In</button>
          <div className='form-help'>
                  <div className='remember'>
                       <input type="checkbox" />
                       <label htmlFor="">Remember me</label>
                  </div>
                  <p>Need help?</p>
          </div>
          </form>
          <div className="form-switch" >
           {signState==="Sign Up"? <p>Already have account? <span onClick={()=>setsignState("Sign In")}>Sign In Now</span></p>:<p>New to Netflix? <span onClick={()=>setsignState("Sign Up")}>Sign Up Now</span></p>}
          </div>
      </div>
    </div>
  )
}


