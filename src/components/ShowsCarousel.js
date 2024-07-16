import { TVCard } from "./TVCard";

function ShowsCarousel({ credits_data }) {
  // filter out duplicate credits and sort by popularity
  const cast_credits = (credits_data.cast)
  .filter((item, index, self) => self.findIndex(i => i.id === item.id) === index)
  .sort((a, b) => b.popularity - a.popularity);

  return (
    // <div className="shows-carousel">
    //   <TVCard tv={cast_credits[0]}/>
    // </div>
    <></>
  );
}

export default ShowsCarousel;
