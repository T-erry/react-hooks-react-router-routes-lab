import React, { useEffect } from "react";
import { movies } from "../data";

function Movies() {

  const movieList = movies.map((movie)=>{
  return <div key={movie.title}>
    <li>{movie.title}</li>
    <p> Time: {movie.time}</p>
    <ul>
      {movie.genres.map((genre, index)=>{
        return <li key={index}>{genre}</li>
      })}
    </ul>
   </div>
  })
  return(
    <>
    <h1>Movies Page</h1>
    {movieList}
    </>
  );
    
}

export default Movies;
