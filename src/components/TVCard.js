export function TVCard({ show }) {
  const posterUrl = show.poster_path
    ? `https://image.tmdb.org/t/p/original${show.poster_path}`
    : '/defaultTV.png';

  const firstAirYear = new Date(show.first_air_date).getFullYear();
  const firstAirYearDisplay = firstAirYear ? `(${firstAirYear})` : "";

  return (
    <div className="card">
      <img src={posterUrl} alt={show.name}/>
      <div className="show-name">{show.name} {firstAirYearDisplay}</div>
    </div>
  );
}