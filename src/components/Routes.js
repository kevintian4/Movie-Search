import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SearchResults from "../pages/SearchResults";
import ShowDetails from "../pages/ShowDetails";
import MovieDetails from "../pages/MovieDetails";
import PersonDetails from "../pages/PersonDetails";

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<SearchResults />} />
                <Route path="/movie/:id" element={<MovieDetails />} />
                <Route path="/show/:id" element={<ShowDetails />} />
                <Route path="/person/:id" element={<PersonDetails />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;