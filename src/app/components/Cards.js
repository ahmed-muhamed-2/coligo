/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Announcements from './Announcements';
import Quizes from './Quizes';
import './Cards.scss';



function Cards() {
  return (
    <div className="cards">
        <Announcements />
        <Quizes/>
    </div>
  );
}

export default Cards;