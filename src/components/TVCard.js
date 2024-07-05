export function TVCard({ show }) {
  return (
    <div className="tv-card">
      <img 
        src={`https://image.tmdb.org/t/p/original${show.poster_path}`}
        alt={show.name} 
      />
    </div>
  );
}