/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Hero.scss';



function Hero() {
  return (
    <div className="hero">
      <div className="hero-body">
        <h1>EXAMS TIME</h1>
        <p>
          Here we are, Are you ready to fight? Don't worry, we prepared some tips to
          be ready for your exams.
        </p>
      </div>
      <p className="hero-p">"Nothing happens until something moves" - Albert Einstein</p>
      <button className="btn">View Exams Tips</button>
    </div>
  );
}

export default Hero;