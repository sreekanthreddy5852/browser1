import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="bg-container">
    <div className="image-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="image"
      />
      <h1 className="heading">Wave</h1>
    </div>

    <ul className="nav-menu">
      <li>
        <Link className="nav-item" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="nav-item" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="nav-item" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)
export default Header
