// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import HeaderStyled from './HeaderStyled';

// == Composant
const Header = ({ categories }) => {
  console.log(categories);

  return (
    <HeaderStyled>
      <nav>
        {categories.map((categorie) => (
          <NavLink className="nav-links" exact to={categorie.route}>{categorie.title}</NavLink>
        ))}

        {/* <NavLink className="nav-links" exact to="/">home</NavLink>
        <NavLink className="nav-links" exact to="/no-limit">no-limit</NavLink>
        <NavLink className="nav-links" exact to="/test">test</NavLink> */}
      </nav>
    </HeaderStyled>
  );
};


export default Header;
