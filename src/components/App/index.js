// == Import npm
import React from 'react';

// == Import data
import categoriesData from 'src/data/categories';

// == Import
import './styles.css';
import Header from '../Header';
import Footer from '../Footer';
import MainContent from '../MainContent';



import BodyStyled from './BodyStyled';

// == Composant
const App = () => (
  <BodyStyled>
    <Header categories={categoriesData} />
    <MainContent />
    <Footer />
  </BodyStyled>
);

// == Export
export default App;
