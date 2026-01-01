import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

function Layout() {
  const [archiveOpen, setArchiveOpen] = useState(false);
  const archiveYears = Array.from({ length: 24 }, (_, i) => 2024 - i);

  const getArchiveLink = (year) => {
    if (year === 2025) {
      return 'https://docs.google.com/document/d/1cKvGu-PyGNoSuzEfGIkt8DEKnp0S06kPQYiCzQeVWXE/edit?tab=t.0';
    }
    return `https://fhtw.byu.edu/archive/${year}`;
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        {/* Navigation */}
        <nav className="nav">
          <ul className="nav-main">
            <li className="logo">
              <Link to="/">
                <img src="/fhtw-small-logo.svg" alt="FHTW" className="logo-img" />
              </Link>
            </li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/call-for-papers">Call for Papers</Link></li>
            <li><Link to="/local-info">Local Information</Link></li>
            <li><Link to="/program">Program</Link></li>
            <li><Link to="/registration">Registration</Link></li>
            <li className="archive-dropdown">
              <button
                className="archive-toggle"
                onClick={() => setArchiveOpen(!archiveOpen)}
              >
                Archive
              </button>
              {archiveOpen && (
                <div className="archive-links">
                  <a
                    key={2025}
                    href={getArchiveLink(2025)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    2025
                  </a>
                  {archiveYears.map(year => (
                    <a
                      key={year}
                      href={getArchiveLink(year)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {year}
                    </a>
                  ))}
                </div>
              )}
            </li>
          </ul>
        </nav>
      </header>

      {/* Page Content */}
      <main className="main">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="footer">
        <p className="copyright">
          Papers and presentations are copyright by their authors, for personal, non-commercial use.
        </p>
        <p className="license">
          Other site materials are licensed under{' '}
          <a href="https://creativecommons.org/licenses/by-sa/3.0/" target="_blank" rel="noopener noreferrer">
            Creative Commons BY-SA 3.0
          </a>
        </p>
        <div className="cc-badge">
          <img
            src="https://licensebuttons.net/l/by-sa/3.0/88x31.png"
            alt="Creative Commons License"
          />
        </div>
      </footer>
    </div>
  )
}

export default Layout
