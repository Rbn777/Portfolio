import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

import './navbar.css';
 
class BurgerMenu extends React.Component {
  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu right width={ "80%"} className={ "BurgerMenu"}>
        <Link to="/">About me</Link>
        <Link to="/projects">Portfolio</Link>
        <Link to="/contact">Contact</Link>
      </Menu>
    );
  }
}

export default BurgerMenu;