import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import BusinessEntry from './BusinessEntry';
import CountriesDropdown from './CountriesDropdown';
import MapContainer from './MapContainer';

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
      <BusinessEntry name={"Refill Quarter"} id={"refill-quarter"} url={"https://www.refillquarter.com/"} description={"Zero Waste Shop"} lat={54.6005073} lng={-5.8763364} recomender="Laura McCormick"/>
      <BusinessEntry name={"387 Ormeau Road"} id={"387-ormeau-road"} url={"https://www.facebook.com/387ormeauroad/"} description={"Café"} lat={54.5775032} lng={-5.9187322} recomender="Laura McCormick"/>
      <BusinessEntry name={"5a Café"} id={"5a-cafe"} url={"http://www.generalmerchants.co.uk/stranmillis/"} description={"Café"} lat={54.5732863} lng={-5.9321933} recomender="Dawn Bell"/>
      <BusinessEntry name={"Maggie Mays"} id={"maggie-mays"} url={"https://maggiemaysbelfastcafe.co.uk/city-centre-cafe/"} description={"Café"} lat={54.5878742} lng={-5.932703} recomender="Iona McAtackney"/>
      <BusinessEntry name={"Sloans Gym"} id={"sloans-gym"} url={"https://www.sloansgymbelfast.com/"} description={"Gym"} lat={54.5993876} lng={-5.9330676} recomender="Jack O'Hara"/>
      <BusinessEntry name={"Ward & Co Fine Foods"} id={"ward-and-co-fine-foods"} url={"https://wardand.co/"} description={"Artisan Deli"} lat={54.5732804} lng={-5.9320405} recomender="Dawn Bell"/>
    </section>
    <footer>
      <MapContainer id="footer_map" className="bv_map" name="refill-quarter" lat={54.6005073} lng={-5.8763364} width={"30%"}/>
    </footer>
  </main>
);

const BusinessDisplayPage = () => (
  <main>
    <header>
      <Header/>
    </header>
    <section>
    </section>
    <footer>
    </footer>
  </main>
);

const root = document.getElementById('root');

ReactDOM.render(<Home />, root);
