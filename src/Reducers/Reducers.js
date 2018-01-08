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
}

export const favorites = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FAVORITES':
      return [...state, action.favorites]
    case 'REMOVE_FAVORITES':
      // const updateFavs = state.map(item => {
      //   if(item.name === action.name) {
      //     return {...item, ...action.favorites}
      //   }
      //   return item;
      // })
      // return updateFavs;
      return [];
    default:
      return state;
  }
};
