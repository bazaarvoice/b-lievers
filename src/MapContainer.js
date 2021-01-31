import React from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import { relative } from 'path';

export class MapContainer extends React.Component {
  state = {
    showingInfoWindow: false,  // Hides or shows the InfoWindow
    activeMarker: {},          // Shows the active marker upon click
    selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
  };
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={this.props.zoom}
        gestureHandling='none'
        style={{ width: '100%', height: '100%', position: relative }}
        initialCenter={
          {
            lat: this.props.lat,
            lng: this.props.lng
          }
        }
        containerStyle={{width: this.props.containerWidth, height: '400px'}}
        >
        <Marker
          onClick={this.onMarkerClick}
          position={{ lat: 54.6005073, lng: -5.8763364 }}
          name="Refill Quarter"
        />
        <Marker
          onClick={this.onMarkerClick}
          position={{ lat: 54.5775032, lng: -5.9187322 }}
          name="387 Ormeau Road"
        />
        <Marker
          onClick={this.onMarkerClick}
          position={{ lat: 54.5732863, lng: -5.9321933 }}
          name="5A Cafe"
        />
        <Marker
          onClick={this.onMarkerClick}
          position={{ lat: 54.5878742, lng: -5.932703 }}
          name="Maggie Mays"
        />
        <Marker
          onClick={this.onMarkerClick}
          position={{ lat: 54.5993876, lng: -5.9330676 }}
          name="Sloans Gym"
        />
        <Marker
          onClick={this.onMarkerClick}
          position={{ lat: 54.5732804, lng: -5.9320405 }}
          name="Ward & Co Fine Foods"
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyC-xvwhyzFDTlbVx_HiLy82ROA3njkO1Dc'
})(MapContainer);