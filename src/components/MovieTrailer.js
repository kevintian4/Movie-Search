function Trailer({ trailerKey }) {
  return (
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
  );
}

export default Trailer;
