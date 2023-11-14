import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>App Name</h2>
      </div>
      <ul className="sidebar-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="sidebar-footer">
        <p>User Info</p>
      </div>
    </div>
  );
};

export default Sidebar;
