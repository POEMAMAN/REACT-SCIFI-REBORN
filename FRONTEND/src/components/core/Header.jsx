import { Link } from 'react-router-dom';


const Header = () => {


  return (
    <header className="container-header">
      <nav>
        <ul className="header-title-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/main">Main (Solo usuarios Registrados)</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
