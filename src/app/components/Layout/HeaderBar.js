/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './HeaderBar.scss';



function HeaderBar() {
  return (
    <div className="header">
      <div className="header-body">
        <h1 className="name">Welcome Ahmed</h1>
        <div className="search">
          <div className="input-search">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Search" />
          </div>
          <div className="icon">
            <i className="fa fa-bell"></i>
            <i className="fa fa-envelope"></i>
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderBar;