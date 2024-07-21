import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      <div>
        {actors.map((actor, index) => (
          <div key={index}>
            <h2>{actor.name}</h2>
            <div>
              <ul>
                {actor.movies.map((movie, index) => (
                  <li key={index}>{movie}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Actors;
