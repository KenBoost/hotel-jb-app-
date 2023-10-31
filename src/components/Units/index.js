import './index.scss';

import { Visual1 } from "../Importedimages";


const Units = () => {
  return (
    <div className="unitsection">
      <h2>Every Unit is designed in its own uniqness</h2>
      <p>
        We invite you to explore our bungalow paradise. From affordable to
        luxurious options, we offer a variety of styles to suit all tastes. With
        stunning views, exceptional amenities, and an unbeatable location, your
        perfect getaway awaits.
      </p>
      <div className="unitcontainer">
        <div className="unit">
          <h3>Wilderness Retreat</h3>
          <p></p>
          <ul><li></li></ul>
          <h4>Ammenities</h4>
          <div className='amenities'></div>
          <button>Explore</button>
        </div>
        <div className="unit">
        <h3>Coastal Haven</h3>
          <p></p>
          <ul><li></li></ul>
          <h4>Ammenities</h4>
          <div className='amenities'></div>
          <button>Explore</button>
        </div>
        <div className="unit">
        <h3>Emerald Paradise</h3>
          <p></p>
          <ul><li></li></ul>
          <h4>Ammenities</h4>
          <div className='amenities'></div>
          <button>Explore</button>
        </div>
      </div>
    </div>
  );
};

export default Units
