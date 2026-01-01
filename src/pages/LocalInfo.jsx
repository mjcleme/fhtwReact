function LocalInfo() {
  return (
    <div className="page">
      <h1 className="page-title">Local Information</h1>
      <div className="page-content">
        <div className="info-block">
          <h2>Location</h2>
          <p>
            BYU Conference Center<br />
            Rooms 2258-2260<br />
            Brigham Young University<br />
            Provo, Utah 84602
          </p>
          <p>
            The conference center is two blocks east of the Marriott Center. You can get{' '}
            <a href="https://conferencecenter.ce.byu.edu/driving_directions" target="_blank" rel="noopener noreferrer">
              directions and parking
            </a>{' '}
            information from the conference center website. You can also{' '}
            <a href="https://www.google.com/maps/place/BYU+Conference+Center+(CONF)/" target="_blank" rel="noopener noreferrer">
              view a Google map
            </a>{' '}
            to get directions.
          </p>
        </div>

        <div className="info-block">
          <h2>Parking</h2>
          <p>
            Disability stalls, dean and official stalls, service stalls, red curbs, and
            other specially reserved spaces, require specific permits. Parking in any of
            these spots without the proper permit will result in a parking citation.
            Timed spaces are enforced for the time posted.
          </p>
        </div>

        <div className="info-block">
          <h2>Food</h2>
          <p>
            A light lunch and snacks will be provided for attendees of the workshop.
          </p>
        </div>
      </div>
    </div>
  )
}

export default LocalInfo
