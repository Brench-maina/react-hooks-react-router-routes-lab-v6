import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
    .then((res) => res.json())
    .then(setMovie)
    .catch((error) => console.error("Error fetching movie:", error));
  }, [id]);

  if(!movie) {
    return<h1>Loading...</h1>; // Handle loading state
  }
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Movie Page</h1>
        <h1>{movie.title}</h1>
        <p>Time: {movie.time} mins</p>
        <h3>Genres:</h3>
        <ul>
          {movie.genres.map((genre) => (
            <li key={genre}><span>{genre}</span></li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default Movie;
