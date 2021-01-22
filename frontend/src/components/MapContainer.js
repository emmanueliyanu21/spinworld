import React, { useState } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const MapContainer = ({ google, lat, lng }) => {
  const [any, setAny] = useState({
    showingInfoWindow: false, // Hides or shows the InfoWindow
    activeMarker: {}, // Shows the active marker upon click
    selectedPlace: {}, // Shows the InfoWindow to the selected place upon a marker
  });

  const onMarkerClick = (props, marker, e) =>
    setAny({
      ...any,
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  const onClose = props => {
    if (any.showingInfoWindow) {
      setAny({
        ...any,
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  return (
    <Map
      google={google}
      zoom={14}
      style={{
        width: '100%',
        height: '100%',
      }}
      containerStyle={{
        position: 'absolute',
        width: '100%',
        height: '100%',
      }}
      initialCenter={{
        lat,
        lng,
      }}
    >
      <Marker
        onClick={onMarkerClick}
        name={'Kenyatta International Convention Centre'}
      />
      <InfoWindow
        marker={any.activeMarker}
        visible={any.showingInfoWindow}
        onClose={onClose}
      >
        <div>
          <h4>{any.selectedPlace.name}</h4>
        </div>
      </InfoWindow>
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCxxJCkw3wokAorMMsWOXVbTPAqGt2bgYE',
})(MapContainer);
