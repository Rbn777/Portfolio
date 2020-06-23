import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';
import './containers.css';
import './texts.css';

function Navbar() {
  return (
    <header className="NavbarDiv">
      <p className="Logo">r<span className="OFromLogo">o</span>bindorion</p>
      <nav>
        <ul>
          <li>
            <Link to="/">About me</Link>
          </li>
          <li>
            <Link to="/projects">Portfolio</Link>
          </li>
          <li className="LastLi">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;