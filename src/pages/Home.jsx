function Home() {
  return (
    <div className="page home-page">
      <div className="hero-logo">
        <img src="/fhtw-logo.svg" alt="Family History Technology Workshop" />
      </div>
      <p className="event-date">2 March 2026, BYU Conference Center Rooms 2258-2260</p>

      <div className="featured-section">
        <div className="featured-content">
          <h1 className="event-title">The Future of Family History</h1>

          <div className="description">
            <p>
              The Family History Technology Workshop features <strong>research talks</strong>,
              <strong> developer presentations</strong> and <strong>lightning talks</strong> covering
              technologies such as handwriting recognition, automated record transcription,
              data modeling, machine learning, natural language processing, visualization,
              and user experience design.
            </p>
          </div>

          {/* Images Section */}
          <div className="images">
            <div className="image-card">
              <img src="/green-indexing.png" alt="Green Indexing" />
            </div>
            <div className="image-card">
              <img src="/historic.png" alt="Historic Documents" />
            </div>
            <div className="image-card">
              <img src="/superstructure.png" alt="Superstructure" />
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="about">
        <h2>About the Workshop</h2>
        <p>
          The Family History Technology Workshop has been running for <strong>20+ years</strong>,
          at both BYU and at RootsTech in Salt Lake City. The workshop attracts researchers,
          software developers, and professionals interested in advancing family history technology.
        </p>
      </div>
    </div>
  )
}

export default Home
