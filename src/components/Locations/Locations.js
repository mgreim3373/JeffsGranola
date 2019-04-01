import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Locations extends Component {
  static defaultProps = {
    center: {
      lat: 42.0499998,
      lng: -72.583331
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={42.07}
            lng={-72.583331}
            className='mapText' text={'Global Headquarters'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Locations;
