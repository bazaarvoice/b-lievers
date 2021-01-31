import React from 'react';
import './BusinessSummary.css';

class BusinessSummary extends React.Component {
  render(){
    return (
      <article>
        <div className="entry_container">
        <h1 className="business_name"><a href={this.props.url}>{this.props.name}</a> ({this.props.description})</h1>
        <h2 className="recommender">Recomended by <a className="name">{this.props.recomender}</a></h2>
        <div id={this.props.id} className="reviews" data-bv-show="rating_summary" data-bv-product-id={this.props.id}></div>
        <img src={this.props.image} className="business_image" alt={this.props.name}/>
        </div>
      </article>
    );
  }
}

export default BusinessSummary