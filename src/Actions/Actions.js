import { fetchDogs } from '../Helpers/fetchHelper'


export const fetchLocationSuccess = location => {
  return {
    type: 'LOCATION_SUCCESS',
    location
  };
};

export const getDogs = () => async dispatch => {
  const newDogs = await fetchDogs();
  dispatch(fetchDogSuccess(newDogs));
};

export const fetchDogSuccess = dogs => {
  return {
    type: 'DOG_SUCCESS',
    dogs
  };
};

export const searchDogs = () => async dispatch => {
  
}
