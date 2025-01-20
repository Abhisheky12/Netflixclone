
import "../Movies/Movies.css";
import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom';
import axios from 'axios';
// import '../../index.css';

 export const Movies = () => {

    const [apiData,setApiData]=useState([]);

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjN2EyMDY4ZmVjNTNlOTFiNzFhNjUwZGUzNTk4YjMzZSIsIm5iZiI6MTczNDYxNjEwNC42ODQsInN1YiI6IjY3NjQyNDI4MTYxYWI3ZGVjNTAwMGU2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F2R4WSxGbjgNZ_Co3bBkyWA-xxZR83iB5a4Y8nZvAA8'
        }
      };

    const api = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=2`;
   
    const getData = async () => {
      try {
          const res = await axios.get(api, options);
          setApiData(res.data.results); // Correctly accessing the results
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  };


    useEffect(()=>{
        getData();

    },[])


  return apiData?(
   <div className="title-card">
    <h2 className="text-red-700">Movies</h2>
    <div className="card-lists">
        {
            apiData.map((card,index)=>(
                <NavLink to={`/player/${card.id}`}><div className='card' key={index}>
                    <img src={`https://image.tmdb.org/t/p/w500/`+card.poster_path} alt="" />
                </div></NavLink>
              
            ))
        }
    </div>
   </div>
  ):""
}



