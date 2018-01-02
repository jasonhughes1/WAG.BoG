import { fetchLocationSuccess, fetchLocation, fetchDogSuccess } from '../Actions/Actions'
import dataCleaner from './dataCleaner'



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

export const fetchDogs = async () => {
  try {
    const fetchRaw = await     fetch('https://galvanize-cors-proxy.herokuapp.com/http://api.petfinder.com/pet.find?key=ff2ba3ff151ed0332df60d1672e67959&location=80112&animal=dog&format=json');

    const dogObj = await fetchRaw.json();
    const cleanData = dataCleaner(dogObj);

    return cleanData;


  } catch (type) {
    return Error('Fetch Failed!')
  }
};


export const searchDogs = async (location) => {
  try {
    const fetchRaw = await     fetch('https://galvanize-cors-proxy.herokuapp.com/http://api.petfinder.com/pet.find?key=ff2ba3ff151ed0332df60d1672e67959&location=colorado&animal=dog&format=json');

    const dogObj = await fetchRaw.json();
    const cleanData = dataCleaner(dogObj);

    return cleanData;


  } catch (type) {
    return Error('Fetch Failed!')
  }
};
