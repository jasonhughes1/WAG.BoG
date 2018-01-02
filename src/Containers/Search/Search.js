import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import RootReducers from '../../Reducers/RootReducers';
import { connect } from 'react-redux';
import { fetchDogSuccess, fetchDogs, searchCurrentDogs} from '../../Actions/Actions';
import Card from '../../Components/Card/Card';
import css from './Search.css';
// import searchDogs from '../../Helpers/fetchHelper';



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
        searchValue: event.target.value
      })
    }

  render() {
    const { searchValue, location } = this.state;
    console.log(this.props.searchForDogs.length[0]);
    if(!this.props.searchForDogs.length[0]) {
      return(
        <div>Search for your dog here!!
        <input className='search' placeholder='Please search by zip code or city and state' onChange={(event) => this.handleChange(event)} />
        <button className='button' onClick={ () => this.props.searchCurrentDogs(searchValue, location) }>Search!</button>
      </div>
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

export const mapDispatchToProps = (dispatch) => {
  searchCurrentDogs: (searchValue, location) => {
    dispatch(searchCurrentDogs(searchValue, location))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
