/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React , { Component } from 'react';
import AnnouncementCell from './AnnouncementCell';
import './Announcements.scss';

import { fakeAnnouncements } from '../../services/fakeAnnouncmentService'

import realAnnouncment from '../../services/announcmentService';
import Loader from '../Shared/Loader';


class Announcements extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      data: []
    };
  }

  componentDidMount() {
    this.setState({...this.state, isFetching: true});
    fakeAnnouncements().then(res => {
      this.setState({data: res , isFetching: false});
    });
  }

  renderAnnouncements() {
    return this.state.data.map( (r, i) => <AnnouncementCell key={i} name={r.name} message={r.message} class={r.class} avtar={r.avtar} />);
  }

  render  = () => (
    <div className="Announcements-card">
      <div className="Announcements-card-title">
        <div className="Announcements-card-title-left">
            <h2>Announcements</h2>
            <p>We educate keep update</p>
        </div>
        <a href="#">All</a>
      </div>
      { 
        this.state.isFetching ? <Loader /> : this.renderAnnouncements()
      }
    </div>
  );
}

export default Announcements;