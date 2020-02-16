// == Import npm
import React from 'react';

// == Import
import './styles.css';
import Header from 'src/containers/Header';
import Footer from '../Footer';
import MainContent from '../MainContent';

// == Import Style SCSS
import BodyStyled from './BodyStyled';

// Création d'un state pour les categories
// const [selectedCategory, setSelectedCategory] = useState('home');

// == Composant
const App = () => (
  <BodyStyled>
    <Header />
    <MainContent />
    <Footer />
  </BodyStyled>
);

// == Export
export default App;
