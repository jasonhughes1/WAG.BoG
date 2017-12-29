
import css from './Map.css';
import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import { connect } from 'react-redux';


class Map extends Component {

  render() {
    console.log(this.props)
    if(!this.props.location.length) {
      return(
        <div>wait</div>
      )
    } else {
      console.log(this.props.location[0].lng);
    return (
      <div className='google-map'>
        <GoogleMapReact
          defaultCenter={ {lat: this.props.location[0].lat, lng: this.props.location[0].lng} }
          defaultZoom={ 10 }>
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
