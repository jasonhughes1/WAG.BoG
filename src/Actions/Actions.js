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
