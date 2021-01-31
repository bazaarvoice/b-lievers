import React from 'react';
import BusinessSummary from './components/BusinessSummary/BusinessSummary';

class BusinessDisplayPageContent extends React.Component {
  render() {
    return (
      <div className="scrollable">
        <div className="content_container">
          <section className="business_summary_section">
            <BusinessSummary name={this.props.name} id={this.props.id} url={this.props.url} description={this.props.description} recomender={this.props.recomender} image={this.props.image} />
          </section>
          <section className="business_reviews_section">
            <div data-bv-show="reviews" data-bv-product-id={this.props.id}></div>
            <div data-bv-show="questions" data-bv-product-id={this.props.id}></div>
            </section>
        </div>
      </div>
    );
  }
}

export default BusinessDisplayPageContent