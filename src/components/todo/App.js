import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { todosPath } from '../../routes';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter';
import Todo from "./Todo";

export default class App extends Component {
  renderMain() {
    return (
      <div>
        <TodoForm />
        <TodoFilter />
        <TodoList />
      </div>
    );
  }

  renderTodo() {
    return (
      <div>
        <Route exact path={`${todosPath}/:todoId`} component={Todo} />
      </div>
    );
  }

  renderApp() {
    if (this.props.match.isExact){
      return this.renderMain();
    }
    else{
      return this.renderTodo();
    }
  }

  render() {
    return (
      <div style={styles.appContainer}>
        <div style={styles.app}>
          {this.renderApp()}
        </div>
      </div>
    )
  }
}

const styles = {
  appContainer: {
    padding: "20px 25%",
    backgroundColor: "#FDD286",
    height: "-webkit-fill-available",
  },
  app: {
    width: "-webkit-fill-available",
  }
}