
import css from './Map.css';
import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import { connect } from 'react-redux';


const showMap = ({ text }) => <div>{ text }</div>;


class Map extends Component {
  static defaultProps = {
    center: { lat: 40.7446790, lng: -73.9485420 },
    zoom: 10
  }


  render() {
    if(!this.props.location.length) {
      return(
        <div>wait</div>
      )
    } else {
      console.log(this.props.location[0].lng);
    return (
      <div className='google-map'>
        <GoogleMapReact
          defaultCenter={ this.props.center }
          defaultZoom={ this.props.zoom }>
          <showMap
            lat={ this.props.location[0].lat }
            lng={ this.props.location[0].lng }
            text={ 'Where Waldo?' }
          />
        </GoogleMapReact>
      </div>
      )
    }
  }
}

const mapStateToProps = (store) => {
  return {
    location: store.location
  }
}

export default connect(mapStateToProps, null)(Map);
