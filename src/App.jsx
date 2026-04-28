import './App.css';
import { genres } from "./mock-data/genres";
import { movies } from "./mock-data/movies";
import { useState } from "react";
import GenreList from "./components/GenreList";
import MovieList from "./components/MovieList";

function App() {
  const [currentGenre, setCurrentGenre] = useState("");
  const [movieData] = useState(movies);

  // Filtering movies based on selected genre
  const filteredMovies = movieData.filter((movie) => movie.genre === currentGenre);

  return (
    <div>
      <h1>Movie Browser</h1>

      <GenreList
        genres={genres}
        setCurrentGenre={setCurrentGenre}
      />
		{/*conditional rendering*/}
      {currentGenre && (
        <>
          <h2>{currentGenre} Movies</h2>

          {filteredMovies.length > 0 ? ( <MovieList movies={filteredMovies} />) : 
		  ( <p>No movies found for this genre.</p>)}
        </>
      )}
    </div>
  );
}

export default App;