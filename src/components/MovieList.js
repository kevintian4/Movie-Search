import { useState } from 'react';
import { MovieCard } from "./MovieCard";

function MovieList({ items }) {
  const [displayedItems, setDisplayedItems] = useState(items.slice(0, 12));
  const [nextIndex, setNextIndex] = useState(12);

  const loadMoreItems = () => {
    const newNextIndex = nextIndex + 12;
    setDisplayedItems(items.slice(0, newNextIndex));
    setNextIndex(newNextIndex);
  };

  const loadAllItems = () => {
    setDisplayedItems(items);
    setNextIndex(items.length)
  }

  return (
    <>
      {items.length > 0 && 
        <>  
          <h2 className="list-header" id="movie-list-header">Movies</h2> 
          <hr />
        </>
      }
      <div className="item-list" id="movie-list">
        {displayedItems.length === 0 ? (
          <></>
        ) : (
          displayedItems.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        )}
      </div>
      {nextIndex < items.length && (
        <>
          <div className="load-results-button-container">
            <button onClick={loadMoreItems} className="load-results-button button" id="load-more-button">
              Show More...
            </button>
            <button onClick={loadAllItems} className="load-results-button button" id="load-all-button">
              Show All ({items.length} results)
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default MovieList;
