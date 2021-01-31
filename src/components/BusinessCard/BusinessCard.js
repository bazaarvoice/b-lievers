import React from 'react';
import './BusinessCard.css';

class BusinessCard extends React.Component {
  render() {
    return (
      <article className="business_card_article">
        <div className="card_container">
          <h1 className="card_business_name"><a href={this.props.url}>{this.props.name}</a> ({this.props.description})</h1>
          <h2 className="card_recommender">Recomended by <a className="card_name">{this.props.recomender}</a></h2>
          <div id={this.props.id} className="card_reviews" data-bv-show="inline_rating" data-bv-product-id={this.props.id} data-bv-redirect-url={window.location.href + this.props.id}></div>
          <img src={this.props.image} className="card_business_image" alt={this.props.name} />
        </div>
      </article>
    ); s
  }
}

export default BusinessCard