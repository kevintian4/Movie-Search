import { useLocation } from 'react-router-dom';
import PeopleList from '../components/PeopleList';
import MovieList from '../components/MovieList';
import TVList from '../components/TVList';

function SearchResults() {
  const location = useLocation();
  const { results } = location.state || { results: [] };

  const people = results.filter(item => item.media_type === 'person');
  const movies = results.filter(item => item.media_type === 'movie');
  const tvShows = results.filter(item => item.media_type === 'tv');

  return (
    <>
      {results.length === 0 ? (
        <h1>No results found...</h1>
      ) : (
        <>
          <MovieList items={movies} />
          <TVList items={tvShows} />
          <PeopleList items={people} />
        </>
      )}
    </>
  );
}

export default SearchResults;
