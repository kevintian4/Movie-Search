import { MovieCard } from "./MovieCard";

function MovieList({ items }) {
  return (
    <>
      {items.length > 0 && 
        <>  
          <h2 className="list-header">Movies</h2> 
          <hr />
        </>
      }
      <div className="item-list" id="movie-list">
        {items.length === 0 ? (
          <></>
        ) : (
          items.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        )}
      </div>
    </>
  );
}

export default MovieList;