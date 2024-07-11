function TVTrailer({ trailerKey }) {
  return (
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
  )
}

export default TVTrailer;