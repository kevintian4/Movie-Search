import { useLocation } from 'react-router-dom';

function MovieList() {
  const location = useLocation();
  const { movies } = location.state || { movies: [] };

  return (
    <div className="movie-list">
      <h2>Search Results</h2>
      {movies.length === 0 ? (
        <h2>No movies found.</h2>
      ) : (
        movies.map((movie) => (
          <div key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default MovieList;