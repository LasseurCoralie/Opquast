// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import HeaderStyled from './HeaderStyled';

// == Composant
const Header = ({ categories }) => (
    <HeaderStyled>
      <nav>
        {categories.map((categorie) => (
          <NavLink key={categorie.title} className="nav-links" exact to={categorie.route}>{categorie.title}</NavLink>
        ))}
      </nav>
    </HeaderStyled>
);

Header.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      route: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Header;
