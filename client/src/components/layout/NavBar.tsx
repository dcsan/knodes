import React from 'react';
import {
  // BrowserRouter as Router,
  // Switch,
  // Route,
  Link
} from "react-router-dom";

import './NavBar.css'

const NavBar: React.FC<{}> = (props: {}) => {

  return (
    <div className='nav-bar'>
        <Link className='nav-item' to="/">Home</Link>
        <Link className='nav-item' to="/swipeychat">Swipey</Link>
        <Link className='nav-item' to="/ChunkyChat">Chunky</Link>
        <Link className='nav-item' to="/Gex">Gex</Link>
        <Link className='nav-item' to="/smooth">smooth</Link>
        <Link className='nav-item' to="/settings">Settings</Link>
    </div>
  )
};

export default NavBar
