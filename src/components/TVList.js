import React from 'react';

function TVList({ items }) {
  return (
    <>
      <h2>TV Shows</h2>
      <div className="tv-list">
        {items.length === 0 ? (
          <></>
        ) : (
          items.map((tv) => (
            <>
              <img
                src={`https://image.tmdb.org/t/p/original${tv.poster_path}`}
                alt={tv.title || 'TV Show'}
              />
            </>
          ))
        )}
      </div>
    </>
  );
}

export default TVList;
