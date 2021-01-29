import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MenuDropdown from '@bv/aperture-components-react-menu-dropdown';
import image from './logo.png';


if (process.env.NODE_ENV !== 'production') {
  const axe = require('react-axe');
  axe(React, ReactDOM, 1000);
}

const App = () => (
  <main>
    <header>
      <div className="title_container"><img src={image} className="logo"/><h1 className="title">BV Support Local</h1></div>
    </header>
    <section className="section1">
        <MenuDropdown
          onChange={(updatedOption, updatedOptions) => {
            /* ... */
          }}
          options={[
            { value: 'us-texas', label: 'Texas', selected: false },
            { value: 'india-karnataka', label: 'Karnataka', selected: false },
            { value: 'northern-ireland', label: 'Northern Ireland', selected: true }
          ]}
          searchAriaLabel="search"
        />
    </section>
    <section className="section2">
      <article>
        <div className="review_container">Refill Quarter &nbsp;<div data-bv-show="rating_summary" data-bv-product-id="refill-quarter"></div></div>
      </article>
    </section>
    <footer>
    </footer>
  </main>
);

const root = document.getElementById('root');

ReactDOM.render(<App />, root);
