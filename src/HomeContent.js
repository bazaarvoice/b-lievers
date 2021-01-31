import React from 'react';
import CountriesDropdown from './components/CountriesDropdown/CountriesDropdown';
import BusinessCardGallery from './components/BusinessCardGallery/BusinessCardGallery';
import './HomeContent.css';

class HomeContent extends React.Component {
  render() {
    return (
      <div className="scrollable">
        <div className="content_container">
          <section className="countries_dropdown_section">
            <CountriesDropdown />
          </section>
          <section className="business_cards_section">
            <BusinessCardGallery />
          </section>
        </div>
      </div>
    );
  }
}

export default HomeContent