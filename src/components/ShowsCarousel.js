import { TVCard } from "./TVCard";
import { MovieCard } from "./MovieCard";

function ShowsCarousel({ credits_data, knownFor }) {
  console.log(credits_data.cast.slice(0, 40));

  // Filter out duplicate credits
  let cast_credits = credits_data.cast.filter((item, index, self) => 
    self.findIndex(i => i.poster_path === item.poster_path) === index
  );

  // Apply additional filters if person is known for acting. Remove talk shows appearances, archive footage, and voice acting roles
  if (knownFor == "Acting") {
    cast_credits = cast_credits.filter(item =>
      !item.character.startsWith("Self") &&
      !item.character.startsWith("Himself") &&
      !item.character.startsWith("Herself") &&
      !item.character.includes("Guest") &&
      !item.character.includes("archive") &&
      !item.character.includes("(voice)") &&
      item.character !== ""
    ).sort((a, b) => b.popularity - a.popularity);
  }

  // Sort by popularity
  // cast_credits = cast_credits.sort((a, b) => b.popularity - a.popularity);

  console.log("line")
  console.log(cast_credits.slice(0, 40));

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
