import React from 'react';
import './App.scss';
import Sidenav from './components/Layout/Sidenav';
import HeaderBar from './components/Layout/HeaderBar';
import Cards from './components/Layout/Cards';
import Hero from './components/Layout/Hero';

function App() {
  return (
    <div className="Dashboard">

      <Sidenav />
      <div className="Dashboard-main">
          <HeaderBar />
          <div className="Dashboard-sections">
            <Hero />
            <Cards />
          </div>
      </div>
    </div>
  );
}

export default App;
