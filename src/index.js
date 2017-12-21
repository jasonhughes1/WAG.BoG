import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promise from 'redux-promise';
import RootReducers from './Reducers/RootReducers';
import geoMiddleware from 'redux-effects-geolocation';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const middleware = applyMiddleware(thunk, promise, logger)
export const store = createStore(
  RootReducers,
  devTools,
  middleware,
  applyMiddleware(
    geoMiddleware()
  )
);


render(
  <BrowserRouter>
   <Provider store={ store } >
    <App />
  </Provider>
 </BrowserRouter>,
document.getElementById('root')
)
