import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import NavBar from '../../Containers/NavBar/NavBar';
import Search from '../../Containers/Search/Search';
import Map from '../../Containers/Map/Map';
import Home from '../../Containers/Home/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/' component={NavBar} key='NavBar'/>
        <Route exact path='/' component={Home} key='Home'/>
        <Route path='/search' component={Search} key='Search'/>
        <Route path='/map' component={Map} key='Map'/>
      </div>
    );
  }
}

export default App;
