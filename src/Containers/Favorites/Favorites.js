import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../Components/Card/Card';
import './Favorites.css';

export class Favorites extends Component {
  constructor() {
    super();
  }

  render() {
    console.log(this.props.favorites);
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

export default connect(mapStateToProps, null)(Favorites);