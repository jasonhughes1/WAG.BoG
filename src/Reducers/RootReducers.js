import { combineReducers } from 'redux';
import { dogsReducer, locationReducer, searchForDogs, favorites } from './Reducers';



const rootReducer = combineReducers({
  dogs: dogsReducer,
  location: locationReducer,
  searchForDogs,
  favorites
})


export default rootReducer
