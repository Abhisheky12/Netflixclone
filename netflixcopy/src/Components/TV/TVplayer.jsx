import React, { useEffect, useState } from 'react'
import {NavLink, useNavigate, useParams} from "react-router-dom"
import"../../Pages/Player/Player.css"
import axios from 'axios';
export const ShowPlayer = () => {   
   const navigate=useNavigate();
  const {id}=useParams();
  const [apiData,setapiData]=useState({ })
  const {showid}=useParams();
  
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjN2EyMDY4ZmVjNTNlOTFiNzFhNjUwZGUzNTk4YjMzZSIsIm5iZiI6MTczNDYxNjEwNC42ODQsInN1YiI6IjY3NjQyNDI4MTYxYWI3ZGVjNTAwMGU2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F2R4WSxGbjgNZ_Co3bBkyWA-xxZR83iB5a4Y8nZvAA8'
  }
};




const api =`https://api.themoviedb.org/3/tv/${showid}/videos?language=en-US` ;
   
    const getplayData = async () => {
      try {
          const res = await axios.get(api, options);
          setapiData(res.data.results[0]); // Correctly accessing the results
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  };
useEffect(()=>{
  // fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  // .then(res => res.json())
  // .then(data=>setapiData(data.results[0]))
  // .catch(err => console.error(err));
  getplayData();
},[])


  return (
    <div className='player'>
        <iframe src={`https://www.youtube.com/embed/${apiData.key}`} width="90%" height="90%" title='trailer' frameBorder="0" allowFullScreen ></iframe>
        {/* <img src="./images/back_arrow_icon.png" alt="" /> */}
        {/* <NavLink to="/"><button>Back To Home</button></NavLink> */}
        <button onClick={()=>navigate(-1)}>Back To Home</button>
       <div className='player-info'>
        <div><span>pubslished Date: </span>{apiData.published_at}</div>
        <div><span>pubslished Date: </span>{apiData.name}</div>
        <div><span>pubslished Date: </span>{apiData.type}</div>
        </div>
    </div>
  )
}


