
import { getPosition } from 'redux-effects-geolocation';
import { store } from '../index.js';



export const fetchLocationSuccess = location => {
  return {
    type: 'LOCATION_SUCCESS',
    location
  };
};

export const fetchDogSuccess = dogs => {
  return {
    type: 'DOG_SUCCESS',
    dogs
  };
};
