import { combineReducers } from 'redux';
import { dogs } from './Reducers';
import { location } from './Reducers';


const rootReducer = combineReducers({
  dogs,
  location
})


export default rootReducer
