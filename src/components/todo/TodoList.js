import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TodoTile from './TodoTile';
import * as actions from '../../actions';

class TodoList extends Component {
  getFilterTodos() {
    let todos = this.props.todos;
    if (this.props.visibilityFilter != actions.SHOW_ALL) {
      let completed = this.props.visibilityFilter == actions.SHOW_ACTIVE ? false : true;
      todos = todos.filter(todo => todo.completed == completed);
    }
    return todos;
  }

  render() {
    return (
      <ul style={styles.todoList}>
        {this.getFilterTodos().map((todo) => (
          <li style={{ listStyleType: "none" }}>
            <TodoTile key={todo.id} toggleTodo={this.props.actions.toggleTodo} todo={todo} />
          </li>
          )
        )}
      </ul>
    );
  }
}

const styles = {
  todoList: {
    padding: "0px",
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

function mapStateToProps(state) {
  return state.todos;
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);