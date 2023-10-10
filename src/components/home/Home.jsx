// import React, { useState } from 'react';
import './Home.css'
import Navbar from '../navbar/Navbar'
import Featured from '../featured/Featured'
import Movies from '../movies/Movies'
import MovieCard from '../movies/MovieCard'



const Home = () => {

  return (
    <div className='home'>
      <Navbar />
      {/* <Featured type="movie"/> */}
      {/* <Featured type=""/> */}
      <Movies />
      {/* <MovieCard/> YOU ALREADY DEFINED IT IN THE MOVIES COMPONENT SO YOU CAN'T DO IT HERE AGAIN */} 
    </div>
  )
}

export default Home