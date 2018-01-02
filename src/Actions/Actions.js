import { fetchDogs, searchDogs } from '../Helpers/fetchHelper'


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

export const searchCurrentDogs = () => async dispatch => {
  const newDogs = await searchDogs();
  dispatch(searchDogSuccess(newDogs));
};
export const searchDogSuccess = searchDogs => {
  return {
    type: 'SEARCH_DOG_SUCCESS',
    searchDogs
  };
};
