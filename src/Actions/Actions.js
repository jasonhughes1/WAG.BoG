export const fetchDogSuccess = dogs => {
  return {
    type: 'DOG_SUCCESS',
    dogs
  };
};

export const fetchDogs = () => {
  return dispatch => {
    fetch('http://api.petfinder.com/pet.getRandom?key=ff2ba3ff151ed0332df60d1672e67959&shelterid=KY305&output=full&format=json')
      .then(response => response.json())
      .then(results => dispatch(fetchDogSuccess(results.data)))
      .catch(error => alert('error from fetch dogs call'))
  };
};
