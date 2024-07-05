import { PersonCard } from './PersonCard';

function PeopleList({ items }) {
  return (
    <>
      {items.length > 0 && <h2 className="list-header">People</h2>}
      <div className="people-list">
        {items.length === 0 ? (
          <></>
        ) : (
          items.map((person) => (
            <PersonCard key={person.id} person={person} />
          ))
        )}
      </div>
    </>
  );
}

export default PeopleList;

  