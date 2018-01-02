import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import RootReducers from '../../Reducers/RootReducers';
import { connect } from 'react-redux';
import { fetchDogSuccess, fetchDogs} from '../../Actions/Actions';
import Card from '../../Components/Card/Card';
import css from './Search.css';


export class Search extends Component {
  render() {
    if(!this.props.dogs.length) {
      return(
        <div>wait</div>
        )
    } else {
      const dogCards = this.props.dogs[0].map((dog, index) => {
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
          <div className='dog-cards'>{dogCards}</div>
        </div>
        )

      }
    }
  }

export const mapStateToProps = (store) => {
  return {
    dogs: store.dogs
  }
}

export default connect(mapStateToProps, null)(Search);
