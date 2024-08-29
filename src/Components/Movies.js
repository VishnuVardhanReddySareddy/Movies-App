import { moviesData } from "../data/moviesData";
import MovieLogic from "./MoviesLogic";
import "../movies.css";

//Assume this is an API call or Async way of Getting data
const fetchMovieData = () => moviesData;

const Movies = () => {
  const movies = fetchMovieData();
  return (
    <div className="movie-container">
      <h2>Famouse Movies</h2>

      <ul className="movie-list">
        {movies.map((movie) => (
          <MovieLogic movie={movie} key={movie.id} />
        ))}
      </ul>
    </div>
  );
};

export default Movies;
