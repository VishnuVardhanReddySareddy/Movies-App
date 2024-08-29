const MovieLogic = ({ movie }) => {
  return (
    <li className="movie">
      <img src={movie.poster} alt="Movie Poster" />
      <p>
        {movie.title} by {movie.director} was released on {movie.year}
      </p>
      <p>Rating: {movie.rating}</p>
    </li>
  );
};

export default MovieLogic;
