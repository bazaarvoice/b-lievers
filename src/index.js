import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header/Header';
import HomeContent from './HomeContent';
import BusinessDisplayPageContent from './BusinessDisplayPageContent';
import RefillQuarterImage from './assets/refill-quarter.jpg';
import ThreeEightSevenOrmeauRoadImage from './assets/387-ormeau-road.jpeg';
import FiveACafeImage from './assets/5a-cafe.jpg';
import MaggieMaysImage from './assets/maggie-mays.jpg';
import SloansGymImage from './assets/sloans-gym.jpg';
import WardAndCoFineFoodsImage from './assets/ward-and-co.png';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

if (process.env.NODE_ENV !== 'production') {
  const axe = require('react-axe');
  axe(React, ReactDOM, 1000);
}

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/refill-quarter" component={RefillQuarter}/>
      <Route path="/387-ormeau-road" component={ThreeEightSevenOrmeauRoad}/>
      <Route path="/5a-cafe" component={FiveACafe}/>
      <Route path="/maggie-mays" component={MaggieMays}/>
      <Route path="/sloans-gym" component={SloansGym}/>
      <Route path="/ward-and-co-fine-foods" component={WardAndCoFineFoods}/>
    </div>  
  </Router>
);

const Home = () => (
  <main>
    <header>
      <Header/>
    </header>
      <HomeContent/>
    <footer>
    </footer>
  </main>
);

const RefillQuarter = () => (
  <main>
    <header>
      <Header/>
    </header>
      <BusinessDisplayPageContent name={"Refill Quarter"} id={"refill-quarter"} url={"https://www.refillquarter.com/"} description={"Zero Waste Shop"} recomender="Laura McCormick" image={RefillQuarterImage}/>
    <footer>
    </footer>
  </main>
);

const ThreeEightSevenOrmeauRoad = () => (
  <main>
    <header>
      <Header/>
    </header>
      <BusinessDisplayPageContent name={"387 Ormeau Road"} id={"387-ormeau-road"} url={"https://www.facebook.com/387ormeauroad/"} description={"Café"} recomender="Laura McCormick" image={ThreeEightSevenOrmeauRoadImage}/>
    <footer>
    </footer>
  </main>
);

const FiveACafe = () => (
  <main>
    <header>
      <Header/>
    </header>
      <BusinessDisplayPageContent name={"5a Café"} id={"5a-cafe"} url={"http://www.generalmerchants.co.uk/stranmillis/"} description={"Café"} recomender="Dawn Bell" image={FiveACafeImage}/>
    <footer>
    </footer>
  </main>
);

const MaggieMays = () => (
  <main>
    <header>
      <Header/>
    </header>
      <BusinessDisplayPageContent name={"Maggie Mays"} id={"maggie-mays"} url={"https://maggiemaysbelfastcafe.co.uk/city-centre-cafe/"} description={"Café"} recomender="Iona McAtackney" image={MaggieMaysImage}/>
    <footer>
    </footer>
  </main>
);

const SloansGym = () => (
  <main>
    <header>
      <Header/>
    </header>
      <BusinessDisplayPageContent name={"Sloans Gym"} id={"sloans-gym"} url={"https://www.sloansgymbelfast.com/"} description={"Gym"} recomender="Jack O'Hara" image={SloansGymImage}/>
    <footer>
    </footer>
  </main>
);

const WardAndCoFineFoods = () => (
  <main>
    <header>
      <Header/>
    </header>
      <BusinessDisplayPageContent name={"Ward & Co Fine Foods"} id={"ward-and-co-fine-foods"} url={"https://wardand.co/"} description={"Artisan Deli"} recomender="Dawn Bell" image={WardAndCoFineFoodsImage}/>
    <footer>
    </footer>
  </main>
);

const root = document.getElementById('root');

ReactDOM.render(<App/>, root);
