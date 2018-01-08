import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import RootReducers from '../../Reducers/RootReducers';
import { connect } from 'react-redux';
import { fetchDogSuccess, fetchDogs, searchCurrentDogs} from '../../Actions/Actions';
import Card from '../../Components/Card/Card';
import css from './Search.css';
import PropTypes from 'prop-types';

export class Search extends Component {
  constructor() {
    super()
      this.state = {
        searchValue: '',
        location: '12563'
      }
    }

    handleChange(event) {
      this.setState({
        location: event.target.value
      })
    }


  render() {
    const dogCards = this.props.searchForDogs.map((dog, index) => {
      return <Card
        key={index}
        name={dog.name}
        breed={dog.breed}
        sex={dog.sex}
        picture={dog.photo}
        street={dog.street}
        city={dog.city}
        state={dog.state}
      />
    })

    const { searchValue, location } = this.state;
      return(
        <div>
          <div className='header-container'>
          <h1 className='whos'>Who's a good boy, or girl?</h1>
          <h2 className='search-for'>Search for your dog here</h2>
        <input className='search' placeholder='Please search by zip code' onChange={(event) => this.handleChange(event)} />
        <button className='button' onClick={ () =>  this.props.searchCurrentDogs(location) }>Search!</button>
      </div>
        <div className='card-container'>
          <div className='dog-cards'>{dogCards}</div>
        </div>
      </div>
          )
        }
      }



export const mapStateToProps = (store) => {
  return {
    dogs: store.dogs,
    searchForDogs: store.searchForDogs
  }
}

export const mapDispatchToProps = (dispatch) => ({
  searchCurrentDogs: (location) => {
    dispatch(searchCurrentDogs(location))
  }
});



export default connect(mapStateToProps, mapDispatchToProps)(Search);
