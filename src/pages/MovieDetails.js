import { useParams } from 'react-router-dom';
import { getItemDetails } from '../services/api';
import { useState, useEffect } from 'react';
import { marked } from 'marked';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function MovieDetails() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    getItemDetails('movie', id)
    .then((data) => {
        setData(data);
    });
  }, [id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  function formatRuntime(runtime) {
    if (runtime < 60) {
      return `${runtime}m`;
    } else {
      const hours = Math.floor(runtime / 60);
      const minutes = runtime % 60;
      return `${hours}h ${minutes}m`;
    }
  }  

  function formatRating(rating) { 
    if (rating === null || rating === undefined) {
      return null;
    }
    return `${rating.toFixed(1)}/10`;
  }

  const genres = data.genres.length > 0 ? data.genres : null;
  const runtime = data.runtime > 0 ? formatRuntime(data.runtime) : null;
  const tagline = data.tagline !== "" ? data.tagline : null;
  const rating = data.vote_count > 0 ? formatRating(data.vote_average) : null;
  const releaseDate = data.release_date !== "" ? data.release_date : null;

  const officialTrailer = data.videos.results.find(video => video.name === 'Official Trailer' && video.site === 'YouTube');
  const trailer = officialTrailer || data.videos.results.find(video => video.type === 'Trailer' && video.site === 'YouTube');

  const trailerKey = trailer ? trailer.key : null;
  const reviews = data.reviews.results.length > 0 ? data.reviews.results : null;

  console.log(data);

  return (
    <div className="details" id="movie-details">
      <header className="details-header" id="movie-details-header" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})` }}>
        { rating && 
          <div id="rating-badge">
            <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} /> {rating}
          </div> 
        }
        <div className="header-content" id="movie-header-content">
          <h1 className="details-header-title">{data.title}</h1>
          { tagline &&<p className="tagline">{data.tagline}</p>}
          <div className="header-info">
            {genres && (
              <div className="genres item-tags">
                {genres.map((genre) => (
                  <span className="genre" key={genre.id}>{genre.name}</span>
                ))}
              </div>
            )}
            <div className="extra-details item-tags" id="movie-extra-details">
              { releaseDate && <span><strong>Release Date:</strong> {releaseDate}</span> }
              { runtime && <span><strong>Runtime:</strong> {runtime}</span> }
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
          <section className="trailer-section" id="movie-trailer-section">
            <h2>Trailer</h2>
            <iframe
              className="trailer"
              id="movie-trailer"
              src={`https://www.youtube.com/embed/${trailerKey}`}
              allowFullScreen
              title="Movie Trailer"
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

export default MovieDetails;