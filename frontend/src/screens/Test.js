import React, { useState } from 'react';
import GooglePlacesAutocomplete, {
  getLatLng,
  geocodeByAddress,
} from 'react-google-places-autocomplete';

const Test = () => {
  const [address, setAddress] = useState('');
  const onChangeHandler = value => {
    setAddress(value.label);
    geocodeByAddress(value.label)
      .then(results => getLatLng(results[0]))
      .then(({ lat, lng }) =>
        console.log('Successfully got latitude and longitude', { lat, lng })
      );
  };
  return (
    <div>
      <GooglePlacesAutocomplete
        apiKey='AIzaSyCxxJCkw3wokAorMMsWOXVbTPAqGt2bgYE'
        selectProps={{
          onChange: onChangeHandler,
        }}
      />
    </div>
  );
};

export default Test;
