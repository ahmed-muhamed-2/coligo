import React, { Component } from 'react';

import QuizeCell from './QuizeCell';
import Loader from '../Shared/Loader';

import { fakeQuizes } from '../../services/fakeQuizesService';
import realQuizes from '../../services/quizesService';

import './Quizes.scss';

class Quizes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      data: []
    };
  }

  componentDidMount() {
    this.setState({...this.state, isFetching: true});
    fakeQuizes().then(res => {
      this.setState({data: res , isFetching: false});
    });
  }

  renderQuizes() {
    return this.state.data.map((r, i) => <QuizeCell key={i} name={r.name} class={r.class} topic={r.topic} date={r.deu_date} url={r.url}/>);
  }

  render  = () => ( 
    <div className="quizes">
      <div className="quizes-title">
        <h2>What's due</h2>
        <a href="#">All</a>
      </div>
      <p>Sometimes LATER" becomes NEVER Go Now</p>
      { 
        this.state.isFetching ? <Loader /> : this.renderQuizes()
      }
    </div>
  );
}

export default Quizes;
