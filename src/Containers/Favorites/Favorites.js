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
    const favCards = this.props.favorites.map((dog, index) => {
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
    return (
      <div>
        <div className='fav-cards'>{favCards}</div>
      </div>
    );
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
