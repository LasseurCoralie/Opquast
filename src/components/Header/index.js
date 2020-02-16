// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import HeaderStyled from './HeaderStyled';

// == Composant
const Header = (categoriesData) => {
  console.log(categoriesData);

  return (
    <HeaderStyled>
      <nav>
        {categoriesData.map((categorie) => (
          <NavLink className="nav-links" exact to={categorie}>{categorie}</NavLink>
        ))}

        {/* <NavLink className="nav-links" exact to="/">home</NavLink>
        <NavLink className="nav-links" exact to="/no-limit">no-limit</NavLink>
        <NavLink className="nav-links" exact to="/test">test</NavLink> */}
      </nav>
    </HeaderStyled>
  );
};

Header.propTypes = {
  categoriesData: PropTypes.array.isRequired,
};

export default Header;
