// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import HeaderStyled from './HeaderStyled';

// == Composant
const Header = ({ categories }) => (
  <HeaderStyled>
    <nav>
      {categories.map((category) => (
        <a href="#" key={category}>{category}</a>
      ))}
    </nav>
  </HeaderStyled>
);

Header.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};

export default Header;
