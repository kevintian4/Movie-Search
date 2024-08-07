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
    <div className="card" id="movie-card" onClick={DisplayDetails}>
      <img src={posterUrl} alt={movie.title}/>
      <div className="show-card-name card-name" id="movie-card-name">{movie.title} {releaseYearDisplay}</div>
    </div>
  );
}