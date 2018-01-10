import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchCurrentDogs} from '../../Actions/Actions';
import Card from '../../Components/Card/Card';
import './Search.css';
import PropTypes from 'prop-types';

export class Search extends Component {
  constructor() {
    super();
    this.state = {
      location: '12563'
    };
  }

  handleChange(event) {
    this.setState({
      location: event.target.value
    });
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
      />;
    });

    const { location } = this.state;
    if (!this.props.searchForDogs.length) {

      return (
        <div>
          <div className='header-container'>
            <h1 className='whos'>Whos a good boy, or girl?</h1>
            <h2 className='search-for'>Search for your dog here</h2>
            <input className='search' placeholder='Please search by zip code or city and state' onChange={(event) => this.handleChange(event)} />
            <button className='button' onClick={ () =>  this.props.searchCurrentDogs(location) }>Search!</button>
            <h3 className='no-dogs'>No dogs at this location, please try again!</h3>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className='header-container'>
            <h1 className='whos'>Whos a good boy, or girl?</h1>
            <h2 className='search-for'>Search for your dog here</h2>
            <input className='search' placeholder='Please search by zip code' onChange={(event) => this.handleChange(event)} />
            <button className='button' onClick={ () =>  this.props.searchCurrentDogs(location) }>Search!</button>
          </div>
          <div className='card-container'>
            <div className='dog-cards'>{dogCards}</div>
          </div>
        </div>
      );
    }
  }
}


export const mapStateToProps = (store) => {
  return {
    dogs: store.dogs,
    searchForDogs: store.searchForDogs
  };
};

export const mapDispatchToProps = (dispatch) => ({
  searchCurrentDogs: (location) => {
    dispatch(searchCurrentDogs(location));
  }
});


Search.propTypes = {
  searchCurrentDogs: PropTypes.func,
  searchForDogs: PropTypes.array
};


export default connect(mapStateToProps, mapDispatchToProps)(Search);
