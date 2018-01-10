import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../Components/Card/Card';
import './Favorites.css';
import PropTypes from 'prop-types';

export class Favorites extends Component {
  constructor() {
    super();
  }

  render() {
    if (!this.props.favorites.length) {
      return (
        <div>
          <img alt='gif showing that there are no favorites' className='fav-gif' src={require('../../Images/fav.gif')}/>
        </div>
      );
    } else {

      const favCards = this.props.favorites.map((dog, index) => {
        return <Card
          key={index}
          name={dog.name}
          breed={dog.breed}
          sex={dog.sex}
          picture={dog.picture}
          street={dog.street}
          city={dog.city}
          state={dog.state}
        />;
      });
      return (
        <div className='fav-container'>
          <div className='fav-cards'>{favCards}</div>
        </div>
      );
    }
  }
}

export const mapStateToProps = (store) => {
  return {
    favorites: store.favorites
  };
};

Favorites.propTypes = {
  dispatch: PropTypes.func,
  favorites: PropTypes.array,
  history: PropTypes.object,
  location: PropTypes.array,
  match: PropTypes.object
};

export default connect(mapStateToProps, null)(Favorites);
