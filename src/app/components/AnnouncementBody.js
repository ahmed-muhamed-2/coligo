/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './AnnouncementBody.scss';



function AnnouncementBody(props) {
  return (
    <div className="Announcements">
      <div className="Announcements-user">
        <img className="Announcements-avtar" src={props.avtar} alt="Person" width="96" height="96" />
        <div className="Announcements-class">
          <span>{ props.name }</span>
          <p>{ props.class }</p>
        </div>
      </div>
      <p className="Announcements-message">{props.message}</p>
    </div>
  );
}

export default AnnouncementBody;