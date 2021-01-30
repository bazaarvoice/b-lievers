import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import BusinessSummary from './BusinessSummary';
import CountryDropDown from './CountryDropDown';

if (process.env.NODE_ENV !== 'production') {
  const axe = require('react-axe');
  axe(React, ReactDOM, 1000);
}

const Home = () => (
  <main>
    <header>
      <Header/>
    </header>
    <section className="section1">
      <CountryDropDown/>
    </section>
    <section className="section2">
      <article>
        <BusinessSummary/>
      </article>
    </section>
    <footer>
    </footer>
  </main>
);

const BusinessDisplayPage  = () => (
  <main>
    <header>
      <Header/>
    </header>
    <section >
    </section>
    <footer>
    </footer>
  </main>
);

const root = document.getElementById('root');

ReactDOM.render(<Home />, root);
