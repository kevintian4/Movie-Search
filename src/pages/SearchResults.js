import { Suspense, lazy } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

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

  const navigate = useNavigate();
  const returnHome = () => {
    navigate('/');
  };

  return (
    <>
      {results.length === 0 ? (
        <>
          <h1>No results found...</h1>
          <button onClick={returnHome} className="button" id="return-home-button">Try another search</button>
        </>
      ) : (
        <Suspense fallback={<div>Loading...</div>}>
          { movies.length > 0 && <MovieList items={movies} /> }
          { tvShows.length > 0 && <TVList items={tvShows} /> }
          { people.length > 0 && <PeopleList items={people} /> }
        </Suspense>
      )}
    </>
  );
}

export default SearchResults;
