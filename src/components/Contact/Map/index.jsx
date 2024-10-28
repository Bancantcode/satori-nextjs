'use client'
import React from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px'
};

const origin = {
  lat: 14.556410794803403,
  lng: 121.0347952883736
};

const GoogleMapRouteComponent = () => {
  const [infoOpen, setInfoOpen] = React.useState(false);

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={origin} zoom={15} >
        <Marker position={origin} onClick={() => setInfoOpen(true)} />
        {infoOpen && (
          <InfoWindow position={origin} onCloseClick={() => setInfoOpen(false)} >
            <div>Satori Specialty Coffee</div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapRouteComponent;
