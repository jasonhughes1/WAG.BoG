
import css from './Map.css';
import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'


const showMap = ({ text }) => <div>{ text }</div>;


export default class Map extends Component {
  static defaultProps = {
    center: { lat: 40.7446790, lng: -73.9485420 },
    zoom: 10
  }
render() {
    return (
      <div className='google-map'>
        <GoogleMapReact
          defaultCenter={ this.props.center }
          defaultZoom={ this.props.zoom }>
          <showMap
            lat={ 40.7473310 }
            lng={ -73.8517440 }
            text={ 'Where Waldo?' }
          />
        </GoogleMapReact>
      </div>
    )
  }
}
