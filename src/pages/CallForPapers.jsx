function CallForPapers() {
  return (
    <div className="page">
      <h1 className="page-title">Call for Papers</h1>
      <div className="page-content">
        <p className="highlight-text">Registration is free this year!</p>

        <p>
          The 2026 Family History Technology Workshop will bring together developers,
          researchers, technology professionals, and users to discuss current and
          emerging family history technologies.
        </p>

        <div className="submission-category">
          <h3>Developer Talk</h3>
          <p>
            10-15 minute talk about new tools, libraries, or languages, accompanied by a demo.
            We are looking for novel approaches that have the potential to impact family
            history technology.
          </p>
          <p>
            Presenters should submit a 1-2 paragraph description of what you will cover,
            a short biographical statement, and a link to your GitHub profile or other
            relevant developer profile.
          </p>
        </div>

        <div className="submission-category">
          <h3>Lightning Talk</h3>
          <p>
            2-5 minute presentation on your latest work in family history technology.
            This could be a startup, an open source project, or work in progress.
          </p>
          <p>
            Presenters should submit a one-paragraph description of what you will cover,
            a short biographical statement, a link to your product or company website,
            and a link to your social media profile. Please indicate whether you would
            like to demo your work between sessions.
          </p>
        </div>

        <div className="submission-category">
          <h3>Research Talk</h3>
          <p>
            10-15 minute presentation on your research, including key ideas, algorithms
            and results. Topics can include big data, deep learning, data modeling,
            extraction, search, natural language processing, and other areas of computing
            as applied to genealogy and family history.
          </p>
          <p>
            Presenters should submit a 1-2 page extended abstract, including citations,
            a short biographical statement, and a link to your personal web presence.
          </p>
        </div>

        <p>
          Presenters should submit the above information by January 30, 2026 to{' '}
          <a href="mailto:fhtworkshop@gmail.com">fhtworkshop@gmail.com</a>.
        </p>

        <div className="key-dates">
          <h2>Key Dates</h2>
          <ul>
            <li><strong>Submissions due:</strong> January 30, 2026</li>
            <li><strong>Acceptance notification:</strong> February 9, 2026</li>
            <li><strong>Final research paper version:</strong> February 20, 2026</li>
            <li><strong>Workshop date:</strong> March 2, 2026</li>
          </ul>
        </div>

        <div className="contact-info">
          <h2>Program Committee</h2>
          <p>Mark Clement, Chair (BYU)</p>
          <p>Joe Price, Chair (BYU)</p>
          <p>Daniel Zappala, Website (BYU)</p>
        </div>
      </div>
    </div>
  )
}

export default CallForPapers
