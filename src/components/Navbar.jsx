import React from 'react';
import { Link } from 'react-router-dom';
import BurgerMenu from './BugerMenu';

import './navbar.css';
import './containers.css';
import './texts.css';

function Navbar() {
  return (
    <header className="NavbarDiv">
      <p className="Logo">r<span className="OFromLogo">o</span>bindorion</p>
      <nav>
        <div className="LargeSizeMenu">
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
        </div>
        <BurgerMenu className={ "BurgerMenu" }/>
      </nav>
    </header>
  );
}

export default Navbar;