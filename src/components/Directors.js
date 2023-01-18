import React from "react";
import { directors } from "../data";

function Directors() {
  const directorsList = directors.map((director)=>{
    const {name, movies} = director
    return <div key={name}>
      <h1>{name}</h1>
      <ul>
        {movies.map((movie, index)=>{
          return <li key={index}>{movie}</li>
        })}
      </ul>
    </div>
  })


  return (
    <>
    <h1>Directors Page</h1>
    {directorsList}
    </>
  );
}

export default Directors;
