function PeopleList({ items }) {
	return (
		<>
			<h2>People</h2>
			<div className="people-list">
			{items.length === 0 ? (
					<></>
			) : (
					<>
							{items.map((person) => (
									<>
									<img src={`https://image.tmdb.org/t/p/original${person.profile_path}`} alt={person.name} />
									<h3>{person.name}</h3>
									</>
							))}
					</>
			)}
			</div>
		</>
	);
}
  
  export default PeopleList;
  