const dogs = (state = {}, action) => {
  switch (action.type) {
  case 'DOG_SUCCESS':
    return action.dogs;
  default:
    return state;
  }
};

export default dogs;
