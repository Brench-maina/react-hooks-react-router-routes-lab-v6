import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
const [directors, setDirectors] = useState([]);

useEffect(() => {
  fetch("http://localhost:4000/directors")
    .then((res) => res.json())
    .then(setDirectors)
    .catch((error) => console.error("Error fetching directors", error));
}, []);


  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {directors.map((director) => (
          <div key={director.name}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map((movie) => (
                <li key={movie}>{movie}</li>
              ))}
            </ul>
          </div>
        ))}
      </main>
    </>
  );
};

export default Directors;
