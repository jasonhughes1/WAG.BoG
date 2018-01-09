export const dogsReducer = (state = [], action) => {
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
    return [...action.searchDogs];
  default:
    return state;
  }
};

export const locationReducer = (state = [], action) => {
  switch (action.type) {
  case 'LOCATION_SUCCESS':
    return [...state, action.location];
  default:
    return state;
  }
};

export const favorites = (state = [], action) => {
  // let newState;
  switch (action.type) {
  case 'ADD_FAVORITES':
    return [...state, action.favorites];
  case 'REMOVE_FAVORITES':
    console.log(action);
    return [...state.filter(item => item.name !== action.favorites.name)];
    // return {newState};
    // return [...newState];
  default:
    return state;
  }
};
