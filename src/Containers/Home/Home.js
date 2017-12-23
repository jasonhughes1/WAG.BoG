import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import RootReducers from '../../Reducers/RootReducers';
import { connect } from 'react-redux';
import { fetchDogSuccess, fetchDogs} from '../../Actions/Actions';
import Card from '../../Components/Card/Card';
import helpers from '../../Helpers/helpers';
import css from './Home.css';


class Home extends Component {
  render() {
    if(!this.props.dogs.length) {
      return(
        <div>wait</div>
        )
    } else {
      console.log(this.props.dogs[0]);
      const dogCards = this.props.dogs[0].map((dog, index) => {
        console.log(dog.photo);
        return <Card
           name={dog.name}
          breed={dog.breed}
            sex={dog.sex}
        picture={dog.photo}


        />
      })
      return(
        <div className='card-container'>
          <div>{dogCards}</div>
        </div>
        )

      }
    }
  }

const mapStateToProps = (store) => {
  return {
    dogs: store.dogs
  }
}

export default connect(mapStateToProps, null)(Home);
