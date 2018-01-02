export const dogs = (state = [], action) => {
  switch (action.type) {
  case 'DOG_SUCCESS':
    return [...state, action.dogs];
  default:
    return state;
  }
};

export const searchForDogs = (state = [], action) => {
  switch (action.type) {
  case 'SEARCH_DOG_SUCCESS':
    return [...state, action.searchDogs];
  default:
    return state;
  }
};

export const location = (state = [], action) => {
  switch (action.type) {
    case 'LOCATION_SUCCESS':
      return [...state, action.location];
    default:
      return state;
  }
}
