import './index.scss';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom

import LogoS from '../../assets/images/hotel/logo1.png'

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/"> 
        <img src= {LogoS} alt="Jungle Breeze Lodge" />
        </Link>
      </div>
      <ul className="nav-links">
        <Link to="/"> 
        <li><a href="#">Home</a></li>
        </Link>
        <Link to="/rooms"> 
        <li><a href="#">Rooms</a></li>
        </Link>
        <Link to="/"> 
        <li><a href="#">Reservation</a></li>
        </Link>
        <Link to="/contact"> 
        <li><a href="#">Contact</a></li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav
