// == Import npm
import React, { useState } from 'react';

// == Import data
import categoriesData from 'src/data/categories';

// == Import
import './styles.css';
import Header from '../Header';
import Footer from '../Footer';
import MainContent from '../MainContent';

// == Import Style SCSS
import BodyStyled from './BodyStyled';

// Création d'un state pour les categories
// const [selectedCategory, setSelectedCategory] = useState('home');

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
