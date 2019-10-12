/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import QuizesCell from './QuizesCell';
import { QuizesData } from '../services/fakeQuizesService';
import './Quizes.scss';

function Quizes() {
  const quizesList = QuizesData.map((r, i) => <QuizesCell key={i} name={r.name} class={r.class} topic={r.topic} date={r.deu_date} url={r.url}/>);
  return (
    <div className="quizes-card">
      <div className="quizes-title">
        <h2>What's due</h2>
        <a href="#">All</a>
      </div>
      <p>Sometimes LATER" becomes NEVER Go Now</p>
      {quizesList}
    </div>
  );
}

export default Quizes;
