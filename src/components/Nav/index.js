import React from 'react';
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
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Habitaciones</a></li>
        <li><a href="#">Reservar</a></li>
        <li><a href="#">Contácto</a></li>
      </ul>
    </nav>
  );
};

export default Nav
