import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";


function Actors() {
  const [actors, setActors] = useState([]);


  useEffect(() => {
    fetch("http://localhost:4000/actors")
    .then((res) => res.json())
    .then(setActors)
    .catch((erro) =>console.error("Error fetching actors:", erro));

  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {actors.map((actor) => (
          <div key={actor.name}>
            <h2>{actor.name}</h2>
            <ul>
              {actor.movies.map((movie) => (
                <li key={movie}>{movie}</li>
              ))}
            </ul>
          </div>
        ))}
      </main>
    </>
  );
};

export default Actors;
