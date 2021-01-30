import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import BusinessEntry from './BusinessEntry';
import CountriesDropdown from './CountriesDropdown';

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
      <CountriesDropdown/>
    </section>
    <section className="section2">
      <BusinessEntry name={"Refill Quarter"} id={"refill-quarter"} url={"https://www.refillquarter.com/"}/>
      <BusinessEntry name={"387 Ormeau Road"} id={"387-ormeau-road"} url={"https://www.facebook.com/387ormeauroad/"}/>
      <BusinessEntry name={"5a Café"} id={"5a-cafe"} url={"http://www.generalmerchants.co.uk/stranmillis/"}/>
      <BusinessEntry name={"Maggie Mays"} id={"maggie-mays"} url={"https://maggiemaysbelfastcafe.co.uk/city-centre-cafe/"}/>
      <BusinessEntry name={"Sloans Gym"} id={"sloans-gym"} url={"https://www.sloansgymbelfast.com/"}/>
      <BusinessEntry name={"Ward & Co Fine Foods"} id={"ward-and-co-fine-foods"} url={"https://wardand.co/"}/>
    </section>
    <footer>
    </footer>
  </main>
);

const root = document.getElementById('root');

ReactDOM.render(<Home />, root);
