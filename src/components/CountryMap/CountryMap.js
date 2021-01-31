import React from 'react';
import MapContainer from '../MapContainer/MapContainer'

class CountryMap extends React.Component {
  render(){
    return (
        <MapContainer id="country_map" className="bv_map" lat={54.597285} lng={-5.93012} containerWidth={"90%"} zoom={8} />
    );
  }
}

export default CountryMap 