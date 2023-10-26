import React from 'react'

import './index.scss'
import Map from '../../components/Map'

const Contact = () => {
    return (
      <div className='contenedorcontacto'>
        <div className='cont1'>
          <h3>Contact us for any information</h3>
        </div>
        <div className='cont2'>
          <Map></Map>
        </div>
      </div>
    )
}

export default Contact