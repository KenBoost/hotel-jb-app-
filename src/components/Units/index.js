import './index.scss';

import { Visual1 } from "../Importedimages";


const Units = () => {
  
  const amenitiesData = [
    [
      { name: 'Wifi', available: true },
      { name: 'Bathtub', available: false },
      { name: 'Pool', available: true },
      { name: 'Kitchen', available: true },
    ], // Amenidades para Wilderness Retreat
    [
      { name: 'Wifi', available: true },
      { name: 'Kitchen', available: true },
      { name: 'Ocean view', available: true },
      { name: 'Fireplace', available: false },
    ], // Amenidades para Coastal Haven
    [
      { name: 'Wifi', available: true },
      { name: 'Outdoor dining', available: true },
      { name: 'Nature trails', available: false },
      { name: 'Private deck', available: true },
    ], // Amenidades para Emerald Paradise
  ];


  return (
    <div className="unitsection">
      <h2>Every Unit is designed in its own uniqness</h2>
      <p className='textounidades'>
        We invite you to explore our bungalow paradise. From affordable to
        luxurious options, we offer a variety of styles to suit all tastes. With
        stunning views, exceptional amenities, and an unbeatable location, your
        perfect getaway awaits.
      </p>
      
      <div className="unitcontainer">
        <div className="unit">
          <div className="contenido">
            <h3>Wilderness Retreat</h3>
            <p>Our luxurious retreat is nestled high above the rainforest with a majestic view</p>
            <ul className='listageneral'>
              <li><p><b>3</b> Bedroms</p> <p><b>3</b> Bathrooms</p><p><b>6</b> Guest</p></li>
            </ul>
            <h4>Ammenities</h4>
            <div className="amenities">
            <ul>
                {amenitiesData[0].map((amenity, idx) => (
                  <li key={idx}  style={{textDecoration: amenity.available ? 'none' : 'line-through'}}>
                    {amenity.available ? (
                      <span style={{ color: 'green' }}>✔</span>
                    ) : (
                      <span style={{ color: 'gray' }}>✔</span>
                    )}
                    {amenity.name}
                  </li>
                ))}
              </ul>
            </div>
            
            <button>Explore</button>
          </div>
        </div>
        <div className="unit">
          <div className="contenido">
            <h3>Coastal Haven</h3>
            <p>Our exclusive bungalows offer elevated luxury within the heart of the forest</p>
            <ul className='listageneral'>
            <li><p><b>2</b> Bedroms</p> <p><b>2</b> Bathrooms</p><p><b>4</b> Guest</p></li>

            </ul>
            <h4>Ammenities</h4>
            <div className="amenities">
            <ul>
                {amenitiesData[1].map((amenity, idx) => (
                  <li key={idx} style={{textDecoration: amenity.available ? 'none' : 'line-through'}}>
                    {amenity.available ? (
                      <span style={{ color: 'green' }}>✔</span>
                    ) : (
                      <span style={{ color: 'gray' }}>✔</span>
                    )}
                    {amenity.name}
                  </li>
                ))}
              </ul>
            </div>
            <button>Explore</button>
          </div>
        </div>
        <div className="unit">
          <div className="contenido">
            <h3>Emerald Paradise</h3>
            <p>Explore our premium glamping pods and absorb the jungle living.</p>
            <ul className='listageneral'>
            <li><p><b>1</b> Bedrom</p> <p><b>1</b> Bathrooms</p><p><b>2</b> Guest</p></li>

            </ul>
            <h4>Ammenities</h4>
            <div className="amenities">
            <ul>
                {amenitiesData[2].map((amenity, idx) => (
                  <li key={idx} style={{textDecoration: amenity.available ? 'none' : 'line-through'}}>
                    {amenity.available ? (
                      <span style={{ color: 'green' }}>✔</span>
                    ) : (
                      <span style={{ color: 'gray' }}>✔</span>
                    )}
                    {amenity.name}
                  </li>
                ))}
              </ul>
            </div>
            <button>Explore</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Units
