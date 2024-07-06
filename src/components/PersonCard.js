export function PersonCard({ person }) {
  const photoUrl = person.profile_path
    ? `https://image.tmdb.org/t/p/original${person.profile_path}`
    : '/defaultPerson.png';

  return (
    <div className="card">
      <img src={photoUrl} alt={person.name}/>
      <div className="person-name">{person.name}</div>
    </div>
  );
}