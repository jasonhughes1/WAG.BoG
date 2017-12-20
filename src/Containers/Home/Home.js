import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import RootReducers from '../../Reducers/RootReducers';
import { connect } from 'react-redux';
import { fetchDogSuccess, fetchDogs} from '../../Actions/Actions'


class Home extends Component {

componentDidMount() {
  this.props.getAllDogs()
}

  render() {
  return(
    <div>
      <h1>Home</h1>
    </div>
    )
  }
}


const mapStateToProps = (store) => {
  return {
  dogs: store.dogs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllDogs: (newDogs) => {
      dispatch(fetchDogs(newDogs));
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
