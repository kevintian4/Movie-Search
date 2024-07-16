import { TVCard } from "./TVCard";
import { MovieCard } from "./MovieCard";

function ShowsCarousel({ credits_data }) {
  // Filter out duplicate credits and sort by popularity
  const cast_credits = credits_data.cast
    .filter((item, index, self) => self.findIndex(i => i.id === item.id) === index)
    .sort((a, b) => b.popularity - a.popularity);

  return (
    <div className="shows-carousel">
      {cast_credits.length > 0 && 
        <>
          <h2 className="shows-carousel-header">Known For</h2>
          <div className="shows-carousel-list">
            {cast_credits.slice(0, 40).map((show) => (
              show.media_type === "tv" ? (
                <TVCard key={show.id} tv={show} />
              ) : (
                <MovieCard key={show.id} movie={show} />
              )
            ))}
          </div>
        </>
      }
    </div>
  );
}

export default ShowsCarousel;
