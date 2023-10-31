import './index.scss';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import LogoFoo from '../../assets/images/hotel/logo3.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        {/* Aquí puedes colocar tu logo */}
        <img src= {LogoFoo} alt="Jungle Breeze" />
      </div>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Location: Calle Principal, Ciudad</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@tuempresa.com</p>
        </div>
        <div className="footer-section">
          <h3>Links</h3>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/servicios">Servicios</a></li>
            <li><a href="/acerca-de">Acerca de Nosotros</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer
