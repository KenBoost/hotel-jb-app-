import React from "react";
import GoogleMapReact from 'google-map-react';
import env from "react-dotenv"

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
    <div style={{ height: '100%', width: '100%', borderRadius: '5px 0 0 5px'}}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: env.REACT_APP_GOOGLE_MAPS_API_KEY }}
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
   



