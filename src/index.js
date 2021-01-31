import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import BusinessEntry from './BusinessEntry';
import CountriesDropdown from './CountriesDropdown';
import MapContainer from './MapContainer';
import RefillQuarterImage from '/refill-quarter.jpg'
import ThreeEightSevenOrmeauRoadImage from '/387-ormeau-road.jpeg'
import FiveACafeImage from '/5a-cafe.jpg'
import MaggieMaysImage from './maggie-mays.jpg'
import SloansGymImage from './sloans-gym.jpg'
import WardAndCoFineFoods from './ward-and-co.png'

if (process.env.NODE_ENV !== 'production') {
  const axe = require('react-axe');
  axe(React, ReactDOM, 1000);
}

const Home = () => (
  <main>
    <header>
      <Header/>
    </header>
    <div className="scrollable">
    <div className="content">
    <section className="section1">
      <CountriesDropdown/>
    </section>
    <section className="section2">
      <MapContainer id="footer_map" className="bv_map" name="refill-quarter" lat={54.597285} lng={-5.93012} containerWidth={"90%"}/>
    </section>
    <section className="section3">
      <div className="gallery">
      <BusinessEntry name={"Refill Quarter"} id={"refill-quarter"} url={"https://www.refillquarter.com/"} description={"Zero Waste Shop"} recomender="Laura McCormick" image={RefillQuarterImage}/>
      <BusinessEntry name={"387 Ormeau Road"} id={"387-ormeau-road"} url={"https://www.facebook.com/387ormeauroad/"} description={"Café"} recomender="Laura McCormick" image={ThreeEightSevenOrmeauRoadImage}/>
      <BusinessEntry name={"5a Café"} id={"5a-cafe"} url={"http://www.generalmerchants.co.uk/stranmillis/"} description={"Café"}  recomender="Dawn Bell" image={FiveACafeImage}/>
      <BusinessEntry name={"Maggie Mays"} id={"maggie-mays"} url={"https://maggiemaysbelfastcafe.co.uk/city-centre-cafe/"} description={"Café"}  recomender="Iona McAtackney" image={MaggieMaysImage}/>
      <BusinessEntry name={"Sloans Gym"} id={"sloans-gym"} url={"https://www.sloansgymbelfast.com/"} description={"Gym"} recomender="Jack O'Hara" image={SloansGymImage}/>
      <BusinessEntry name={"Ward & Co Fine Foods"} id={"ward-and-co-fine-foods"} url={"https://wardand.co/"} description={"Artisan Deli"} recomender="Dawn Bell" image={WardAndCoFineFoods}/>
      </div>
    </section>
    </div>
    </div>
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
