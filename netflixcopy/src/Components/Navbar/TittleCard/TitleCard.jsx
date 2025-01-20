import React, { useEffect, useRef, useState } from 'react'
import cards_data from "../../../assets/cards/Cards_data";
import "./TittleCard.css"
import { NavLink } from 'react-router-dom';
import axios from 'axios';
 export const TitleCard = ({title,category}) => {


    const cardsRef=useRef();

    const [apiData,setApiData]=useState([]);

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjN2EyMDY4ZmVjNTNlOTFiNzFhNjUwZGUzNTk4YjMzZSIsIm5iZiI6MTczNDYxNjEwNC42ODQsInN1YiI6IjY3NjQyNDI4MTYxYWI3ZGVjNTAwMGU2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F2R4WSxGbjgNZ_Co3bBkyWA-xxZR83iB5a4Y8nZvAA8'
        }
      };
      
     

    const handleWheel=(event)=>{
        event.preventDefault();
        cardsRef.current.scrollLeft +=event.deltaY;
    }

    const api = `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`;
   
    const getData = async () => {
      try {
          const res = await axios.get(api ,options);
          console.log(res.data.results);
          
          setApiData(res.data.results); // Correctly accessing the results
      } catch (error) {
          console.error('Error fetching data:', error.message);
          
      }
  };


    useEffect(()=>{
        getData();
        
         cardsRef.current.addEventListener('wheel',handleWheel);
    },[])


  return apiData?(
   <div className="title-cards">
    <h2>{title}</h2>
    <div className="card-list" ref={cardsRef}>
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


