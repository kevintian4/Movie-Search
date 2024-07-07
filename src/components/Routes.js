import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import SearchResults from '../pages/SearchResults';
import TVDetails from '../pages/TVDetails';
import MovieDetails from '../pages/MovieDetails';
import PersonDetails from '../pages/PersonDetails';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<SearchResults />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/tv/:id" element={<TVDetails />} />
      <Route path="/person/:id" element={<PersonDetails />} />
    </Routes>
  );
}

export default AppRoutes;