import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SearchResults from "../pages/SearchResults";
import MovieDetails from "../pages/MovieDetails";
import NotFound from "../pages/NotFound";

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<SearchResults />} />
                <Route path="/movie/:id" element={<MovieDetails />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;