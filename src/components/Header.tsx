import { Link } from "react-router-dom";
import '../styles/Header.css'

const Header = () => {
  return (
    <header className="header-container">
      <Link to="/"><h2>MZ</h2></Link>
      <nav>
        <ul className="header-nav-list">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/writing">Writing</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;