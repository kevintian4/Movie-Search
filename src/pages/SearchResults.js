import { Suspense, lazy } from 'react';
import { useLocation } from 'react-router-dom';

const PeopleList = lazy(() => import('../components/PeopleList'));
const MovieList = lazy(() => import('../components/MovieList'));
const TVList = lazy(() => import('../components/TVList'));

function SearchResults() {
  const location = useLocation();
  const { results } = location.state || { results: [] };

  const people = results
  .filter(item => item.media_type === 'person')
  .sort((a, b) => b.popularity - a.popularity);

  const movies = results
    .filter(item => item.media_type === 'movie')
    .sort((a, b) => b.popularity - a.popularity);

  const tvShows = results
    .filter(item => item.media_type === 'tv')
    .sort((a, b) => b.popularity - a.popularity);

  return (
    <>
      {results.length === 0 ? (
        <h1>No results found...</h1>
      ) : (
        <Suspense fallback={<div>Loading Components...</div>}>
          <MovieList items={movies} />
          <TVList items={tvShows} />
          <PeopleList items={people} />
        </Suspense>
      )}
    </>
  );
}

export default SearchResults;
