import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';

import { homePath, aboutMePath, appsPath, todosPath } from '../../routes';
import Apps from './Apps';
import AboutMe from './AboutMe';
import LandingPage from './LandingPage';
import TodoApp from '../todo/App';

export default class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path={todosPath} component={TodoApp} />

          <Route exact path={aboutMePath} component={AboutMe} />
          <Route exact path={appsPath} component={Apps} />

          <Route path={homePath} component={LandingPage} />
        </Switch>
      </div>
    );
  }
}