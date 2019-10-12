/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './AnnouncementBody.scss';



function AnnouncementBody(props) {
  return (
    <div className="card-Announcements-body">
      <div className="chips">
        <div className="chip-user">
          <div className="chip">
            <img src={props.avtar} alt="Person" width="96" height="96" />
            <div className="user-name">
              <span>{ props.name }</span>
              <p>{ props.class }</p>
            </div>
          </div>
        </div>
          <p className="Announcement-description">{props.message}</p>
      </div>
    </div>
  );
}

export default AnnouncementBody;