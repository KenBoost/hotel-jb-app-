import React from 'react';
import Carrusel from '../../components/Carrusel'
import Units from '../../components/Units'
import {Habitacion2} from "../../components/Importedimages";


import './index.scss'


function Home() {
  return (
    <div className="contenedorprincipal">
      <div className="cuadro1">
        <Carrusel></Carrusel>
      </div>
      <div className="cuadro2">
        <div className="texto">
          <h2>A Lodge full of life!</h2>
          <br></br>
          <p>
            If you're seeking a unique experience on the Caribbean coast of
            Costa Rica, our Bungalows in Puerto Viejo de Limón is your ideal
            destination. 
          </p>
          <p>
           Situated amidst the lush rainforest, our modern retreat units
            offers you the opportunity to be immersed in nature at its finest.
            Here, comfort and adventure seamlessly blend. 
          </p>
          <p>
           Discover the natural
            beauty that envelops our units while enjoying modern facilities and
            basking in the tranquility of the jungle. Immerse yourself in the
            serenity and wonder of nature in its purest form.
          </p>
        </div>
        <div className="imagen">
           <img src={Habitacion2} loading='lazy'></img>
        </div>
      </div>
      <div className="cuadro3">
        <Units></Units>
      </div>
    </div>
  );
}

export default Home;
