// == Import npm
import React from 'react';

// == Import
import MainContentStyled from './MainContentStyled';
import HomePage from '../HomePage';
import Quiz from '../Quiz';


const MainContent = () => (
  <MainContentStyled>
    <HomePage />
    <Quiz />
  </MainContentStyled>
);

export default MainContent;
