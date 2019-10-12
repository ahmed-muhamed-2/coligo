/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import './QuizesCell.scss';

function QuizesCell(props) {
  return (
    <div className="quizes-cell">
        <i className="fas fa-hourglass-half"></i> <sapn>{props.name}</sapn>
        <p>Course: {props.class}</p>
        <p>Topic: {props.topic}</p>
        <p>Due to: {props.date}</p>
        <button className="btn-quize">Start Quiz</button>
    </div>
  );
}

export default QuizesCell;