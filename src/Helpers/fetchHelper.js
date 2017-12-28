import { fetchLocationSuccess, fetchLocation, fetchDogSuccess } from '../Actions/Actions'
import dataCleaner from './dataCleaner'



export const postLocation = async (dataObject) => {
  try {
    const postCurrLocation = await fetch('https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDOxCWI5v69dw3ljge9fiJHdsC8BGrMbvE', {
      method: 'POST',
      body: JSON.stringify(dataObject),
      headers: { 'Content-Type': 'application/json'}
  })
    const locObj = await postCurrLocation.json();
    return locObj;
  } catch (error) {
    return false;
  }
};

export const fetchDogs = () => {
  return dispatch => {
    fetch('https://galvanize-cors-proxy.herokuapp.com/http://api.petfinder.com/pet.find?key=ff2ba3ff151ed0332df60d1672e67959&location=colorado&animal=dog&format=json')
      .then(response => response.json())
      .then(response => dataCleaner(response))
      .then(results => dispatch(fetchDogSuccess(results)))
      .catch(error => alert('error from fetch dogs call'))
  };
};

export default {
  postLocation
}
