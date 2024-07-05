export function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img 
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt={movie.title} 
      />
    </div>
  );
}