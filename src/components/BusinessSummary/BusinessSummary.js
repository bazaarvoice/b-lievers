import React from 'react';
import MapContainer from '../MapContainer/MapContainer'
import './BusinessSummary.css';

class BusinessSummary extends React.Component {
  render(){
    return (
      <article className="business_summary_article">
        <div className="summary_container">
            <h1 className="summary_business_name"><a href={this.props.url}>{this.props.name}</a> ({this.props.description})</h1>
            <h2 className="summary_recommender">Recomended by <a className="summary_name">{this.props.recomender}</a></h2>
            <img src={this.props.image} className="summary_business_image" alt={this.props.name}/>
        </div>
        <div className="display_map_container">
            <MapContainer name={"refill-quarter"} lat={54.6005073} lng={-5.8763364} zoom={14} containerWidth={"60%"}/>
        </div>
      </article>
    );
  }
}

export default BusinessSummary