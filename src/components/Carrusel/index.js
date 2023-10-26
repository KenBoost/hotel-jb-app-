import Carousel from "react-bootstrap/Carousel";
import { Carrusel10, Carrusel20, Carrusel30 } from "../Importedimages";
import "./index.scss";

const Carrusel = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img src={Carrusel10} alt="JavaScript" />
        <Carousel.Caption > 
          <h3>Deep in Nature</h3>
          <p>Take your mind off the city</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Carrusel20} alt="JavaScript" />
        <Carousel.Caption>
          <h3>With the best views of the Caribbean</h3>
          <p>Enjoy and relax during your stay with us</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Carrusel30} alt="JavaScript" />
        <Carousel.Caption >
          <h3>Close to the best beaches in the country</h3>
          <p>Beaches popular for their scenic beauty and their blue color</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carrusel;
