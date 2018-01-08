import React from 'react';
import './Card.css';
import { connect } from 'react-redux';
import { addFavorites, removeFavorites } from '../../Actions/Actions';
import PropTypes from 'prop-types';


export class Card extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {active: false};
  }

  filterFavs = (favIndex) => {
    let results = this.props.favorites.filter(fav => fav.name === favIndex);
    return results;
  };

  toggleFavorites = (dogCard) => {
    this.setState({active: true});
    if (!this.filterFavs(dogCard.name).length) {
      return this.props.addFavorites(dogCard);
    } else {
      this.setState({active: false});
      return this.props.clearFavorites(dogCard);
    }
  };
  render() {
    return (
      <div className='card'>
        <span className={this.state.active === false ? 'favorite-button' : 'favorite-button active'} onClick={() => this.toggleFavorites(this.props)}>Favorite</span>
        <h2 className='name'> {this.props.name}</h2>
        <img className ='picture' src={this.props.picture} />
        <h3 className='breed'>Breed:  {this.props.breed}</h3>
        <h4 className='sex'>Sex: {this.props.sex}</h4>
        <p className='street'>{this.props.street}</p>
        <p className='city'>{this.props.city}</p>
        <p className='state'>{this.props.state}</p>
        <p className='zip'>{this.props.zip}</p>
      </div>
    );
  }
}
export const mapStateToProps = (store) => {
  return {
    favorites: store.favorites
  };
};

export const mapDispatchToProps = dispatch => ({
  addFavorites: (favorites) => {
    dispatch(addFavorites(favorites));
  },
  clearFavorites: (favorites) => {
    dispatch(removeFavorites(favorites));
  }
});

Card.propTypes = {
  addFavorites: PropTypes.func,
  breed: PropTypes.string,
  city: PropTypes.string,
  clearFavorites: PropTypes.func,
  favorites: PropTypes.array,
  name: PropTypes.string,
  picture: PropTypes.string,
  sex: PropTypes.string,
  state: PropTypes.string,
  zip: PropTypes.string,
  street: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
