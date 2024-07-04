function MovieList({ items }) {
  return (
    <>
      <h2>Movies</h2>
      <div className="movie-list">
        {items.length === 0 ? (
          <></>
        ) : (
          items.map((movie) => (
            <>
              <img 
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title} 
              />
            </>
          ))
        )}
      </div>
    </>
  );
}

export default MovieList;