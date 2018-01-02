import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import RootReducers from '../../Reducers/RootReducers';
import { connect } from 'react-redux';
import { fetchDogSuccess, fetchDogs} from '../../Actions/Actions';
import Card from '../../Components/Card/Card';
import css from './Search.css';


export class Search extends Component {
  constructor() {
    super()
      this.state = {
        location: ''
      }
    }

  render() {
    if(!this.props.searchForDogs.length) {
      return(
        <div>Search for your dog here!!</div>
        )
    } else {
      const dogCards = this.props.searchForDogs.map((dog, index) => {
        return <Card
           name={dog.name}
          breed={dog.breed}
            sex={dog.sex}
        picture={dog.photo}
         street={dog.street}
           city={dog.city}
          state={dog.state}
        />
      })
      return(
        <div className='card-container'>
          <h1>Search</h1>
          <input className='search' placeholder='Please search by zip code or city and state' />
          <button className='button'>Search!</button>
          <div className='dog-cards'>{dogCards}</div>
        </div>
        )
      }
    }
  }


export const mapStateToProps = (store) => {
  return {
    dogs: store.dogs,
    searchForDogs: store.searchForDogs
  }
}

export default connect(mapStateToProps, null)(Search);
