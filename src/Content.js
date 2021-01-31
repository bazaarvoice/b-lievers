import React from 'react';
import CountriesDropdown from './components/CountriesDropdown/CountriesDropdown';
import CountryMap from './components/CountryMap/CountryMap';
import BusinessCardGallery from './components/BusinessCardGallery/BusinessCardGallery';

import './Content.css';

class Content extends React.Component {
  render() {
    return (
      <div className="scrollable">
        <div className="content_container">
          <section className="countries_dropdown_section">
            <CountriesDropdown />
          </section>
          <section className="country_map_section">
            <CountryMap />
          </section>
          <section className="business_cards_section">
            <BusinessCardGallery />
          </section>
          <section className="business_summary_section"></section>
          <section className="business_reviews_section"></section>
        </div>
      </div>
    );
  }
}

export default Content