import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../Components/Card/Card';

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
        <h1>Favorites</h1>
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

export default connect(mapStateToProps, null)(Favorites);
