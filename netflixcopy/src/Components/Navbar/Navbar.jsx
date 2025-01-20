import React, { useEffect, useRef, useState } from 'react'
import "./Navbar.css"
import { logout } from '../../firebase';
import { NavLink, useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";

 export const Navbar = () => {
  const navigate=useNavigate();
  const [show, setShow] = useState(false);
   const navRef=useRef();


   useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY>=80){
        navRef.current.classList.add('nav-dark')
      }
      else{
        navRef.current.classList.remove('nav-dark')
      }
    })
   },[])

  return (
    <div ref={navRef} className='navbar'>
      <div className='navbar-left'>
        <img src="./images/logo.png" alt="" srcset="" />
        <div>
        <ul >
          <li>Home</li>
          <li onClick={()=>navigate("tvshow")}>TV shows</li>
          <li onClick={()=>navigate("/movies")}>Movies</li>
          <li onClick={()=>navigate("/popular")}>New & Popular</li>
          <li  onClick={()=>navigate("/Mylist")}>My List</li>
          <li>Browse by language</li>
        </ul>
        </div>
      </div>
      <div className='navbar-right'>
        <img src="./images/search_icon.svg" className='icons' alt=""  />
        <p>Children</p>
        <img src="./images/bell_icon.svg" className='icons' alt=""  />
        <div className='navbar-profile'>
          <img src="./images/profile_img.png" className='profile' alt=""w />
          <img src="./images/caret_icon.svg" alt="" srcset="" />
          <div className='dropdown'>
            {/* <p onClick={()=>{logout()}} >Sign out of Netflix</p> */}
            <p onClick={()=>navigate("/login")} >Sign out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  )
}


