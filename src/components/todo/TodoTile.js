import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import { todosPath } from '../../routes';

class TodoTile extends Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }
  handleOnClick() {
    this.props.toggleTodo(this.props.todo.id);
  }
  render() {
    let todo = this.props.todo;
    let statusColor = todo.completed ? "green" : "#fff";
    return (
      <div style={styles.todo}>
        <span onClick={this.handleOnClick} style={{ cursor: "pointer" }}>
          <FontAwesomeIcon icon="check-circle" color={statusColor} />
        </span>
        <Link to={`${todosPath}/${todo.id}`} style={styles.todoLink}>{todo.title}</Link>
      </div>
    );
  }
}

const styles = {
  todo: {
    fontSize: "20px",
    height: "30px",
    lineHeight: "30px",
    fontFamily: "sans-serif",
    fontWeight: 300,
  },
  todoLink: {
    marginLeft: "15px",
    textDecoration: "none",
    color: "#fff",
  }
}

export default TodoTile;