import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import BusinessDisplay from './BusinessDisplay';
import RefillQuarterImage from '/refill-quarter.jpg';
import Home from './Home';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



if (process.env.NODE_ENV !== 'production') {
  const axe = require('react-axe');
  axe(React, ReactDOM, 1000);
}

const Test = () => (
  <Router>
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/BusinessDisplayPage" component={BusinessDisplayPage} />
    </div>
  </Router>
);

const HomePage = () => (
  <main>
    <header>
      <Header/>
    </header>
      <div className="scrollable">
        <div className="content_container">
          <Home/>
        </div>
      </div>
    <footer>
    </footer>
  </main>
);

const BusinessDisplayPage = () => (
  <main>
    <header>
      <Header/>
    </header>
      <div className="scrollable">
        <div className="content_container">
          <section>
            <BusinessDisplay name={"Refill Quarter"} id={"refill-quarter"} url={"https://www.refillquarter.com/"} description={"Zero Waste Shop"} recomender="Laura McCormick" image={RefillQuarterImage}/>
            <div data-bv-show="reviews" data-bv-product-id="refill-quarter"></div>
          </section>
        </div>
      </div>
    <footer>
    </footer>
  </main>
);

const BusinessDisplayPage1 = () => (
  <main>
    <header>
      <Header/>
    </header>
    <section>
      <BusinessDisplay name={"Refill Quarter"} id={"refill-quarter"} url={"https://www.refillquarter.com/"} description={"Zero Waste Shop"} recomender="Laura McCormick" image={RefillQuarterImage}/>
      <div data-bv-show="reviews" data-bv-product-id="refill-quarter"></div>
    </section>
    <footer>
    </footer>
  </main>
);

const root = document.getElementById('root');

ReactDOM.render(<Test/>, root);
