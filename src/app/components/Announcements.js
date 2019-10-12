/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import AnnouncementBody from './AnnouncementBody';
import './Announcements.scss';

import { AnnouncementsData } from '../services/fakeAnnouncmentService'



function Announcements() {
  const announcementsList = AnnouncementsData.map( (r, i) => <AnnouncementBody key={i} name={r.name} message={r.message} class={r.class} avtar={r.avtar} />);

  return (
    <div className="card-Announcements">
        <div className="card-title">
            <div className="card-title-left">
                <h2>Announcements</h2>
                <p>We educate keep update</p>
            </div>
            <a href="#">All</a>
        </div>

        { announcementsList }
    </div>
  );
}

export default Announcements;