import { useNavigate } from "react-router-dom";

export function PersonCard({ person }) {
  const photoUrl = person.profile_path
    ? `https://image.tmdb.org/t/p/original${person.profile_path}`
    : '/defaultPerson.png';

  const navigate = useNavigate();
  const DisplayDetails = () => {
    navigate(`/person/${person.id}`);
  };

  return (
    <div className="card" id="person-card" onClick={DisplayDetails}>
      <div className="card-name" id="person-card-name">{person.name}</div>
      <img src={photoUrl} alt={person.name}/>
    </div>
  );
}