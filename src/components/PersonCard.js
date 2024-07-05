export function PersonCard({ person }) {
  return (
    <div className="person-card">
      <img 
        src={`https://image.tmdb.org/t/p/original${person.profile_path}`}
        alt={person.name} 
      />
    </div>
  );
}