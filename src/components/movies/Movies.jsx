
import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard';

const Movies = () => {

  const [movie, setMovie] = useState([]) //do't forget to set empty array for movies

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=02e4c169b956405862df482c9c488092&include_adult=false&language=en-US&')
    .then(response => response.json())
    .then( (response) => { console.log(response) ;
                         setMovie(response.results) } )
    .catch(err => console.error(err));
      
  }, [] )


  return (
    <div>
      <h1>movie</h1> 

{/* THE COL BOOSTRAP IS DONE ON MAPPING NOT ON CARD COMPONENT ALONE YA ZEKO !!!! */}
      <div className="container text-center">
        <div className="row row-cols-auto">

      {
        movie.map( (item, index) => (

          <div className="col" key={index}>
          <MovieCard item={item}/>
          </div>
        ))
    
      }
      </div>
      </div>
      

    </div>
  )
}

export default Movies 
