import { useNavigate } from "react-router-dom";

export function TVCard({ tv }) {
  const posterUrl = tv.poster_path
    ? `https://image.tmdb.org/t/p/original${tv.poster_path}`
    : '/defaultTV.png';

  const firstAirYear = new Date(tv.first_air_date).getFullYear();
  const firstAirYearDisplay = firstAirYear ? `(${firstAirYear})` : "";

  const navigate = useNavigate();
  const DisplayDetails = () => {
    navigate(`/tv/${tv.id}`);
  };

  return (
    <div className="card" id="tv-card" onClick={DisplayDetails}>
      <img src={posterUrl} alt={tv.name} />
      <div className="tv-name">{tv.name} {firstAirYearDisplay}</div>
    </div>
  );
}