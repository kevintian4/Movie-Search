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
    <div className="card" onClick={DisplayDetails}>
      <img src={photoUrl} alt={person.name}/>
      <div className="person-name">{person.name}</div>
    </div>
  );
}