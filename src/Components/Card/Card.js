import React from 'react';
import css from './Card.css';
import { connect } from 'react-redux';
import { addFavorites, removeFavorites } from '../../Actions/Actions'


export const Card = (props) => {

const filterFavs = (i) => {
  let results = props.favorites.filter(fav => fav.name === i)
  return results
}

const toggleFavorites = (dogCard) => {
  if(!filterFavs(dogCard.name).length) {
 return props.addFavorites(dogCard)
 } else {
 return props.clearFavorites(dogCard)
  }
}

  return (
    <div className='card'>
      <button className='active inactive' onClick={() => toggleFavorites(props)}>Favorite</button>
      <h2 className='name'> {props.name}</h2>
      <img className ='picture' src={props.picture} />
      <h3 className='breed'>Breed:  {props.breed}</h3>
      <h4 className='sex'>Sex: {props.sex}</h4>
       <p className='street'>{props.street}</p>
       <p className='city'>{props.city}</p>
       <p className='state'>{props.state}</p>
       <p className='zip'>{props.zip}</p>
  </div>
  )
}

export const mapStateToProps = (store) => {
  return {
    favorites: store.favorites
  }
};

export const mapDispatchToProps = dispatch => ({
  addFavorites: (favorites) => {
    dispatch(addFavorites(favorites));
  },
  clearFavorites: (favorites) => {
    dispatch(removeFavorites(favorites));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
