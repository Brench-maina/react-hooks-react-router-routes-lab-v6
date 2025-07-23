import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/movies")
    .then((res) =>res.json())
    .then(setMovies)
    .catch((error) => console.error("Error fetching movies:", error));
  }, []); // Added dependency array to avoid infinite loop


  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <h2>{movie.title}</h2>
              <Link to={`/movie/${movie.id}`}>View Info</Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default Home;
