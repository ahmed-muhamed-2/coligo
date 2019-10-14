/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './AnnouncementCell.scss';


function AnnouncementCell(props) {
  return (
    <div className="Announcement">
      <div className="Announcement-user">
        <img className="Announcement-avtar" src={props.avtar} alt="Person" width="96" height="96" />
        <div className="Announcement-class">
          <span>{ props.name }</span>
          <p>{ props.class }</p>
        </div>
      </div>
      <p className="Announcement-message">{props.message}</p>
    </div>
  );
}

export default AnnouncementCell;