import React from 'react'
import './index.scss'
import { Habitacion1, Habitacion2} from "../../components/Importedimages";


const Room = () => {
  return (
    <div>
      <div className="partearriba">
        <h2>BUNGALOWS</h2>
      </div>
      <div className='partemedia'>
        <div className='room1'></div>
        <div className='room2'></div>
        <div className='room3'></div>
      </div>
    </div>
  );
};
export default Room;