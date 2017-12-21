
import { getPosition } from 'redux-effects-geolocation';
import { store } from '../index.js';


export const fetchLocationSuccess = location => {
  return {
    type: 'LOCATION_SUCCESS',
    location
  }
}

export const postLocation = (dataObject) => {
  return dispatch => { fetch('https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDOxCWI5v69dw3ljge9fiJHdsC8BGrMbvE', {
    method: 'POST',
    body: JSON.stringify(dataObject),
    headers: {
      'Content-Type': 'application/json'
    }
  }) .then(response => response.json())
  .then(result => dispatch(fetchLocationSuccess(result.location)))
  .catch(error => alert('error from location'))
  }
}


export const fetchDogSuccess = dogs => {
  return {
    type: 'DOG_SUCCESS',
    dogs
  };
};

export const fetchDogs = () => {
  return dispatch => {
    fetch('https://galvanize-cors-proxy.herokuapp.com/http://api.petfinder.com/pet.find?key=ff2ba3ff151ed0332df60d1672e67959&location=colorado&animal=dog&format=json')
      .then(response => response.json())
      .then(results => dispatch(fetchDogSuccess(results.petfinder.pets.pet)))
      .catch(error => alert('error from fetch dogs call'))
  };
};
