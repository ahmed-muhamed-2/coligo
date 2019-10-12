/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Sidenav.scss';


function Sidenav() {
  return (
      <div className="sidenav-container">

    <nav className="sidenav">
        <div className="main">
            <h1>Coligo</h1>
            <div className="nav-lnks">
            <a href=""><i className="fa fa-home"></i> Dashboard</a>
            <a href=""><i className="fas fa-calendar-alt"></i> Schedule</a>
            <a href=""><i className="fa fa-book"></i> Courses</a>
            <a href=""><i className="fa fa-graduation-cap"></i> Gradebook</a>
            <a href=""><i className="fa fa-chart-line"></i> Performance</a>
            <a href=""><i className="fa fa-bullhorn"></i> Announcement</a>
            </div>
        </div>
    </nav>
      </div>
  );
}

export default Sidenav;