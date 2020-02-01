// == Import npm
import React from 'react';

// == Import
import './styles.css';
import Header from '../Header';
import HomePage from '../HomePage';
import Footer from '../Footer';

import BodyStyled from './BodyStyled';

// == Composant
const App = () => (
  <BodyStyled>
    <Header />
    <HomePage />
    <Footer />
  </BodyStyled>
);

// == Export
export default App;
