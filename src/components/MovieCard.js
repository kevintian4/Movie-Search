export function MovieCard({ movie }) {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
    : '/defaultMovie.png';

  return (
    <div className="movie-card">
      <img
        src={posterUrl}
        alt={movie.title} 
      />
    </div>
  );
}