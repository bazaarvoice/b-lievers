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
      <BusinessEntry name={"Refill Quarter"} id={"refill-quarter"} url={"https://www.refillquarter.com/"} description={"Zero Waste Shop"} lat={54.6005073} lng={-5.8763364}/>
      <BusinessEntry name={"387 Ormeau Road"} id={"387-ormeau-road"} url={"https://www.facebook.com/387ormeauroad/"} description={"Café"} lat={54.5775032} lng={-5.9187322}/>
      <BusinessEntry name={"5a Café"} id={"5a-cafe"} url={"http://www.generalmerchants.co.uk/stranmillis/"} description={"Café"} lat={54.5732863} lng={-5.9321933}/>
      <BusinessEntry name={"Maggie Mays"} id={"maggie-mays"} url={"https://maggiemaysbelfastcafe.co.uk/city-centre-cafe/"} description={"Café"} lat={54.5878742} lng={-5.932703}/>
      <BusinessEntry name={"Sloans Gym"} id={"sloans-gym"} url={"https://www.sloansgymbelfast.com/"} description={"Gym"} lat={54.5993876} lng={-5.9330676}/>
      <BusinessEntry name={"Ward & Co Fine Foods"} id={"ward-and-co-fine-foods"} url={"https://wardand.co/"} description={"Artisan Deli"} lat={54.5732804} lng={-5.9320405}/>
    </section>
    <footer>
    </footer>
  </main>
);

const root = document.getElementById('root');

ReactDOM.render(<Home />, root);
