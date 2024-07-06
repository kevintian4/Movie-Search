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
  const runtime = formatRuntime(data.runtime);

  function formatRating(rating) { 
    if (rating === null || rating === undefined) {
      return null;
    }
    return `${rating.toFixed(1)}/10`;
  }
  const rating = formatRating(data.vote_average);

  const trailer = data.videos.results.find(video => video.type === 'Trailer' && video.site === 'YouTube');
  const videoKey = trailer ? trailer.key : null;

  const reviews = data.reviews.results.length > 0 ? data.reviews.results : null;

  return (
    <div className="details" id="movie-details">
      <header className="details-header" id="movie-details-header" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})` }}>
        { rating && 
          <div id="rating-badge">
            <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} /> {rating}
          </div> 
        }
        <div className="header-content" id="movie-header-content">
          <h1>{data.title}</h1>
          <p className="tagline">{data.tagline}</p>
          <div className="header-info">
            <div className="genres">
              {data.genres.map((genre) => (
                <span key={genre.id} className="genre">{genre.name}</span>
              ))}
            </div>
            <div className="extra-details" id="movie-extra-details">
              <span><strong>Release Date:</strong> {data.release_date}</span>
              { runtime && <span><strong>Runtime:</strong> {formatRuntime(data.runtime)} </span> }
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="overview-section">
          <h2>Overview</h2>
          <p className="overview">{data.overview}</p>
        </section>

        {videoKey && (
          <section className="movie-trailer-section">
            <h2>Trailer</h2>
            <iframe
              id="movie-trailer"
              src={`https://www.youtube.com/embed/${videoKey}`}
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