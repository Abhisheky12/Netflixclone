import React from 'react'
import "./Home.css"
import { Navbar } from '../../Components/Navbar/Navbar'
import { TitleCard } from '../../Components/Navbar/TittleCard/TitleCard'
import { Footer } from '../../Components/Footer/Footer'
import { Player } from '../Player/Player'
export const Home = () => {
  return (
    <div className='home'>
     <Navbar/>
     <div className='hero'>
       <img src="./images/hero_banner.jpg"  className ='banner-img' alt=""   />
       <div className="hero-caption">
        <img src="./images/hero_title.png"  className='caption-img'alt="" />
        <p>Discovering his ties to a scret ancient order, a young man 
          living in modern istanbul embarks on a quest to save the city 
          from an immortal enemy</p>
          <div className='hero-btns'>
            <button className='btn'><img src='/images/play_icon.png'></img>Play</button>
            <button className='btn dark-btn'><img src='./images/info_icon.png' alt="" />More Info</button>
          </div>
          <TitleCard/>
       </div>
     </div>
      <div className='more-cards'>
        <TitleCard title={"Blockbuster Movies"} category={"now_playing"}/>
        <TitleCard title={"Only on Netflix"} category={"popular"}/>
        <TitleCard title={"Upcoming"} category={"upcoming"}/>
        <TitleCard title={"Top Pics for You"} category={"top_rated"}/>
       

      </div>
      {/* <Player/> */}
      <Footer/>


    </div>
  )
}

