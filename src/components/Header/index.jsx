import {Link, useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const Header = () => {
  const navigate = useNavigate()

  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    navigate('/login')
  }

  return (
    <nav className="header-container">
      <div className="header-content">
        <Link to="/" className="logo-link">
          <img
            src="https://t3.ftcdn.net/jpg/05/32/73/04/360_F_532730425_EiwrFXiBgzIedTDr44MBmYsxYZ0opAnK.jpg"
            alt="website logo"
            className="header-logo"
          />
        </Link>

        <button type="button" className="logout-btn" onClick={onClickLogout}>
          Logout
        </button>
      </div>
    </nav>
  )
}

export default Header
