import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import RootReducers from '../../Reducers/RootReducers';
import { connect } from 'react-redux';
import { fetchDogSuccess, fetchDogs} from '../../Actions/Actions';
import Card from '../../Components/Card/Card';


const Home = () => {
  return(
    <div>
      <h1>Home</h1>
      <Card />
    </div>
    )
  }



export default Home;
