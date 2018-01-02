import { combineReducers } from 'redux';
import { dogs, location, searchForDogs } from './Reducers';



const rootReducer = combineReducers({
  dogs,
  location,
  searchForDogs
})


export default rootReducer
