import React from 'react';
import css from './Card.css'


const Card = (props) => {
  return (
    <div className='card'>
      <h2 className='name'> {props.name}</h2>
      <h3 className='breed'>Breed:  {props.breed}</h3>
      <h4 className='sex'>Sex: {props.sex}</h4>
      <img className = 'picture' src={props.picture} />
    </div>
  )
}


export default Card;
