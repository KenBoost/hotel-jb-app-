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
        <h1>A Lodge full of life!</h1>
        <p>
        If you're seeking a unique experience on the Caribbean coast of Costa Rica, our lodge in 
        Puerto Viejo de Limón is your ideal destination. 
        Situated amidst the lush rainforest, our modern retreat offers 
        you the opportunity to be immersed in nature at its finest. 
        Here, comfort and adventure seamlessly blend. Discover the natural 
        beauty that envelops our lodge while enjoying modern facilities and 
        basking in the tranquility of the jungle. Immerse yourself in the 
        serenity and wonder of nature in its purest form.
        </p>
  
      </div>
      <div className="cuadro3">
    
      </div>
    </div>
  );
}

export default Home;
