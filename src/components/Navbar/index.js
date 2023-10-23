import React from 'react';
import './index.scss';

import LogoS from '../../assets/images/hotel/logo1.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src= {LogoS} alt="Jungle Breeze Lodge" />
      </div>
      <ul className="nav-links">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Acerca de</a></li>
        <li><a href="#">Servicios</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navbar
