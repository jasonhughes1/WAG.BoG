import React from 'react';


const Card = (props) => {
  return (
    <div>
      <h2 className='name'>{props.name}</h2>
      <h3 className='breed'>{props.breed}</h3>
    </div>
  )
}


export default Card;
