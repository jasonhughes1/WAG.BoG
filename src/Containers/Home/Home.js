import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../Components/Card/Card';
import './Home.css';
import PropTypes from 'prop-types';

export class Home extends Component {
  render() {
    if (!this.props.dogs.length) {
      return (
        <div>
          <img alt='golden retreiver gif' className='golden-gif' src={ require('../../Images/7LKQLPM.gif')}/>
        </div>
      );
    } else {
      const dogCards = this.props.dogs[0].map((dog, index) => {
        return <Card
          key={index}
          name={dog.name}
          breed={dog.breed}
          sex={dog.sex}
          picture={dog.photo}
          street={dog.street}
          city={dog.city}
          state={dog.state}
          zip={dog.zip}
        />;
      });
      return (
        <div className='card-container'>
          <div className='image'></div>
          <div className='dog-cards'>{dogCards}</div>
        </div>
      );

    }
  }
}

export const mapStateToProps = (store) => {
  return {
    dogs: store.dogs
  };
};

Home.propTypes = {
  dispatch: PropTypes.func,
  dogs: PropTypes.array,
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object
};

export default connect(mapStateToProps, null)(Home);
