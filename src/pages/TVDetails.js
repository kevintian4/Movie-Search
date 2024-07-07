import { useParams } from 'react-router-dom';
import { getItemDetails } from '../services/api';
import { useState, useEffect } from 'react';
import { marked } from 'marked';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function TVDetails() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    getItemDetails('tv', id)
    .then((data) => {
        setData(data);
    });
  }, [id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  function formatRuntime(episodeDuration) {
    if (episodeDuration < 60) {
      return `${episodeDuration}m`;
    } else {
      const hours = Math.floor(episodeDuration / 60);
      const minutes = episodeDuration % 60;
      return `${hours}h ${minutes}m`;
    }
  }  

  function formatRating(rating) { 
    if (rating === null || rating === undefined) {
      return null;
    }
    return `${rating.toFixed(1)}/10`;
  }

  function formatStatus(status) {
    if (status === "Planned") {
      return "Coming Soon";
    } else if (status === "Ended") {
      return `Ended ${data.last_air_date}`;
    }
    else {
      return status;
    }
  }

  function formatSeasons(seasons) {
    if(seasons === 1) {
      return "1 season";
    }
    else if(seasons > 1) {
      return `${seasons} seasons`;
    }
    else {
      return seasons;
    }
  }

  const genres = data.genres.length > 0 ? data.genres : null;
  const episodeDuration = data.episode_run_time.length > 0 ? formatRuntime(data.episode_run_time[0]) : null;
  const seasons = data.number_of_seasons > 0 ? formatSeasons(data.number_of_seasons) : null;
  const tagline = data.tagline !== "" ? data.tagline : null;
  const rating = data.vote_count > 0 ? formatRating(data.vote_average) : null;
  const first_air_date = data.first_air_date !== "" ? data.first_air_date : null;
  const status = data.status !== "" ? formatStatus(data.status) : null;

  const officialTrailer = data.videos.results.find(video => video.name === 'Official Trailer' && video.site === 'YouTube');
  const trailer = officialTrailer || data.videos.results.find(video => video.type === 'Trailer' && video.site === 'YouTube');

  const trailerKey = trailer ? trailer.key : null;
  const reviews = data.reviews.results.length > 0 ? data.reviews.results : null;

  console.log(data);

  return (
    <div className="details" id="tv-details">
      <header className="details-header" id="tv-details-header" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})` }}>
        { rating && 
          <div id="rating-badge">
            <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} /> {rating}
          </div> 
        }
        <div className="header-content" id="tv-header-content">
          <h1 className="details-header-title">{data.name}</h1>
          { tagline &&<p className="tagline">{data.tagline}</p>}
          <div className="header-info">
            {genres && (
              <div className="genres item-tags">
                {genres.map((genre) => (
                  <span className="genre" key={genre.id}>{genre.name}</span>
                ))}
              </div>
            )}
            <div className="extra-details item-tags" id="tv-extra-details">
              { first_air_date && <span><strong>First Air Date:</strong> {first_air_date}</span> }
              { status && <span><strong>Status:</strong> {status}</span> }
              { seasons && <span><strong>{seasons}</strong></span>}
              { episodeDuration && <span><strong>Episode Duration:</strong> {episodeDuration}</span> }
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="overview-section">
          <h2>Overview</h2>
          <p className="overview">{data.overview}</p>
        </section>

        {trailerKey && (
          <section className="trailer-section" id="tv-trailer-section">
            <h2>Trailer</h2>
            <iframe
              className="trailer"
              id="tv-trailer"
              src={`https://www.youtube.com/embed/${trailerKey}`}
              allowFullScreen
              title="TV Trailer"
            />
          </section>
        )}
        
        {reviews && (
          <section className="reviews-section">
            <h2>Reviews</h2>
            {reviews.map((review) => (
              <div key={review.id} className="review">
                <h4 className="author">{review.author}</h4>
                <div className="review-content" 
                  dangerouslySetInnerHTML={{ __html: marked.parse(review.content.replace(/\n/g, '<br />')) }} 
                />
              </div>
            ))}
          </section>
        )}

      </main>
    </div>
  );
}

export default TVDetails;