import React,  { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'
import { connect } from 'react-redux';
import { postLocation, fetchDogs } from '../../Helpers/fetchHelper'
import { getDogs, searchForDogs } from '../../Actions/Actions'


export class NavBar extends Component {


  componentDidMount() {
    this.props.getAllDogs();
    this.props.getCurrentLocation();
    this.props.getSearchDogs();
  }

  render() {
  return(
    <div className='nav-bar'>
      <h1>WAG.BoG</h1>
      <NavLink className='nav' exact to='/'>Home</NavLink>
      <NavLink className='nav' to='/search'>Search</NavLink>
      <NavLink className='nav' to='/map'>Map</NavLink>
    </div>
    )
  }
}

export const mapStateToProps = (store) => {
  return {
  dogs: store.dogs,
  location: store.location
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    getAllDogs: (newDogs) => {
      dispatch(getDogs(newDogs))
    },
    getCurrentLocation: (currLocation) => {
      dispatch(postLocation(currLocation))
    },
    getSearchDogs: (newDogs) => {
      dispatch(searchForDogs(newDogs))
    }
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
