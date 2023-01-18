import React from 'react'
import { actors } from '../data'

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, ind) => {
        return (
          <div key={ind}>
            <h3>Name: {actor.name}</h3>
            <p>Movies:</p>
            <ul>
              {actor.movies.map((movie, ind) => {
                return <li key={ind}>{movie}</li>
              })}
            </ul>
          </div>
        )
      })}
    </div>
  )
}

export default Actors