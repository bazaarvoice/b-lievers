import React from 'react';
import MapContainer from './MapContainer'
import './BusinessDisplay.css';

class BusinessDisplay extends React.Component {
  render(){
    return (
      <article className="business_display_article">
        <div className="entry_container">
            <h1 className="business_name"><a href={this.props.url}>{this.props.name}</a> ({this.props.description})</h1>
            <h2 className="recommender">Recomended by <a className="name">{this.props.recomender}</a></h2>
            <img src={this.props.image} className="business_image" alt={this.props.name}/>
        </div>
        <div className="display_map_container">
            <MapContainer name={"refill-quarter"} lat={54.6005073} lng={-5.8763364} zoom={14} containerWidth={"54%"}/>
        </div>
      </article>
    );
  }
}

export default BusinessDisplay