// == Import npm
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';


// == Import
import Quiz from 'src/containers/Quiz';
import HomePage from '../HomePage';

// == Import Styled
import MainContentStyled from './MainContentStyled';


const MainContent = () => (
  <MainContentStyled>
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/no-limit">
        <Quiz />
      </Route>
      <Redirect to="/" />
    </Switch>
  </MainContentStyled>
);

export default MainContent;
