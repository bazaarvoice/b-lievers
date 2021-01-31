import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header/Header';
import Content from './Content';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

if (process.env.NODE_ENV !== 'production') {
  const axe = require('react-axe');
  axe(React, ReactDOM, 1000);
}

const App = () => (
  <main>
    <header>
      <Header/>
    </header>
      <Content/>
    <footer>
    </footer>
  </main>
);

// const BusinessDisplayPage = () => (
//   <main>
//     <header>
//       <Header/>
//     </header>
//       <div className="scrollable">
//         <div className="content_container">
//           <section>
//             <BusinessSummary name={"Refill Quarter"} id={"refill-quarter"} url={"https://www.refillquarter.com/"} description={"Zero Waste Shop"} recomender="Laura McCormick" image={RefillQuarterImage}/>
//             <div data-bv-show="reviews" data-bv-product-id="refill-quarter"></div>
//           </section>
//         </div>
//       </div>
//     <footer>
//     </footer>
//   </main>
// );

const root = document.getElementById('root');

ReactDOM.render(<App/>, root);
