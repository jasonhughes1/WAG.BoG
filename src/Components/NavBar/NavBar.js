import React,  { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'
import { connect } from 'react-redux';
import { fetchDogs, postLocation } from '../../Actions/Actions'


class NavBar extends Component {


  componentDidMount() {
    this.props.getAllDogs();
    this.props.getCurrentLocation();
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

const mapStateToProps = (store) => {
  return {
  dogs: store.dogs,
  location: store.location
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllDogs: (newDogs) => {
      dispatch(fetchDogs(newDogs))
    },
    getCurrentLocation: (currLocation) => {
      dispatch(postLocation(currLocation))
      }
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
