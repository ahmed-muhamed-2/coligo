/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import './QuizeCell.scss';

function QuizeCell(props) {
  return (
    <div className="quize-cell">
        <i className="fas fa-hourglass-half"></i> <span>{props.name}</span>
        <p>Course: {props.class}</p>
        <p>Topic: {props.topic}</p>
        <p>Due to: {props.date}</p>
        <button className="quize-cell-btn">Start Quiz</button>
    </div>
  );
}

export default QuizeCell;