import React, { useEffect } from 'react'
import { Home } from './Pages/Home/Home'
import "./App.css"
import { Login } from './Pages/Login/Login'
import {createBrowserRouter,RouterProvider, useNavigate} from 'react-router-dom'
import { Player } from './Pages/Player/Player'
import"./index.css"
import { onAuthStateChanged } from 'firebase/auth'
import {auth} from './firebase'
import { AuthListener } from "./AuthListener.jsx"
import { Movies } from './Components/Movies/Movies.jsx'
import './index.css'
import { TV } from './Components/TV/TV.jsx'
import { ShowPlayer } from './Components/TV/TVplayer.jsx'
import { Newpopular } from './Components/Newpopular/Newpopular.jsx'
import { Mylist } from './Components/Mylist/Mylist.jsx'



const App = () => {
  const router=createBrowserRouter([
    {
       path:"/",
       element:
       <>
      
       <Home/>
  
       </>
  
    },
    {
      path:"/login",
      element:
      <>
      
      <Login/>
      </>
     
    },
    {
      path:"/player/:id",
      element:
      <>
      
      <Player/>
      </>
    },
    {
      path:"/movies",
      element:
      <>
      
      <Movies/>
      </>
    },
    {
      path:"/tvshow",
      element:
      <>
      <AuthListener/>
      <TV/>
      </>
    },
    {
      path:"/popular",
      element:
      <>
      <Newpopular/>
      </>
    },
    {
      path:"/Mylist",
      element:
      <>
      
      <Mylist/>
      </>
    },
    {
      path:"/tvplayer/:showid",
      element:
      <>
    
      <ShowPlayer/>
      </>
    },


  ])
  

  return (
    <RouterProvider router={router}/>
  )
}

export default App
