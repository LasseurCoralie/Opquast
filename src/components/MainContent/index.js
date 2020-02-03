// == Import npm
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// == Import
import MainContentStyled from './MainContentStyled';
import HomePage from '../HomePage';
import Quiz from '../Quiz';


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
