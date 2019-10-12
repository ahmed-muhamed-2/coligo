import React from 'react';
import './App.scss';
import Sidenav from './components/Sidenav';
import HeaderBar from './components/HeaderBar';
import Cards from './components/Cards';
import Body from './components/Body';

function App() {
  return (
    <div className="Dashboard">

      <Sidenav />
      <div className="Dashboard-main">
          <HeaderBar />
          <div className="Dashboard-sections">
            <Body />
            <Cards />
          </div>
      </div>
    </div>
  );
}

export default App;
