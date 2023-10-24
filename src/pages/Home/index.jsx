import React from 'react';
import Carrusel from '../../components/Carrusel'
import './index.scss'

function Home() {
  return (
    <div className="contenedorprincipal">
      <div className="cuadro1">
      <Carrusel></Carrusel>
      </div>
      <div className="cuadro2">
        <h1>Bienvenido a la página de inicio</h1>
        <p>
          Esta es la página de inicio de nuestra aplicación. Puedes agregar
          contenido y elementos adicionales aquí.
        </p>
        <p>¡Comienza a construir tu aplicación con React!</p>
      </div>
      <div className="cuadro3">
    
      </div>
    </div>
  );
}

export default Home;
