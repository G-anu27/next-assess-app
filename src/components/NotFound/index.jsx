import {Link} from 'react-router-dom'

import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <div className="not-found-card">
      <img
        src="https://cdn.pixabay.com/photo/2024/07/20/17/12/warning-8908707_1280.png"
        alt="not found"
        className="not-found-image"
      />

      <h1 className="not-found-heading">Page Not Found</h1>

      <p className="not-found-description">
        We are sorry, the page you requested could not be found.
      </p>

      <Link to="/">
        <button type="button" className="home-btn">
          Go To Home
        </button>
      </Link>
    </div>
  </div>
)

export default NotFound
