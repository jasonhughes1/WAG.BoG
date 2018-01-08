import React,  { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'
import { connect } from 'react-redux';
import { postLocation } from '../../Helpers/fetchHelper'
import fetchDogs from '../../Helpers/fetchHelper'
import { getDogs } from '../../Actions/Actions'
import PropTypes from 'prop-types';


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
      dispatch(getDogs(newDogs))
    },
    getCurrentLocation: (currLocation) => {
      dispatch(postLocation(currLocation))
      }
    }
  }

  NavBar.propTypes = {
    dogs: PropTypes.array,
    getAllDogs: PropTypes.func,
    getCurrentLocation: PropTypes.func,
    getSearchDogs: PropTypes.func,
    history: PropTypes.object,
    location: PropTypes.array,
    match: PropTypes.object
  }


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
