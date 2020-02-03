// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';

// == Import
import HeaderStyled from './HeaderStyled';

// == Composant
const Header = () => (
  <HeaderStyled>
    <nav>
      <NavLink className="nav-links" exact to="/">home</NavLink>
      <NavLink className="nav-links" exact to="/no-limit">no-limit</NavLink>
      <NavLink className="nav-links" exact to="/truc">truc</NavLink>
    </nav>
  </HeaderStyled>
);

export default Header;
