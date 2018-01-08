import { combineReducers } from 'redux';
import { dogs, location, searchForDogs, favorites } from './Reducers';



const rootReducer = combineReducers({
  dogs,
  location,
  searchForDogs,
  favorites
})


export default rootReducer
