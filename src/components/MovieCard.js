import { useNavigate } from "react-router-dom";

export function MovieCard({ movie }) {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
    : '/defaultMovie.png';

  const releaseYear = new Date(movie.release_date).getFullYear();
  const releaseYearDisplay = releaseYear ? `(${releaseYear})` : "";

  const navigate = useNavigate();
  const DisplayDetails = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div className="card" onClick={DisplayDetails}>
      <img src={posterUrl} alt={movie.title}/>
      <div className="movie-title">{movie.title} {releaseYearDisplay}</div>
    </div>
  );
}