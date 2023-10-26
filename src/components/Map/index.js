import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat:  9.6564943,
      lng: -82.7535654
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100%', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAXE8gg8R11hU0-23cq-HfvDmWKiMkSS28' }}
        defaultCenter={defaultProps.center}
        defaultZoom={11}
      >
        <AnyReactComponent
          lat={9.6564943}
          lng={-82.7535654}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}
   



