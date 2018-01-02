import React from 'react';
import css from './Card.css'


const Card = (props) => {
  return (
    <div className='card'>
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


export default Card;
