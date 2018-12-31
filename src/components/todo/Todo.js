import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as actions from '../../actions';
import { todosPath } from '../../routes';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.deleted = false;
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.delete = this.delete.bind(this);
  }
  getTodo() {
    let todoId = this.props.match.params.todoId;
    let todo = this.props.todos.find((todo) => todo.id == todoId) || {};
    this.todoId = todo.id;
    this.title = todo.title;
    this.description = todo.description;
  }

  componentWillMount() {
    this.getTodo();
  }

  delete() {
    this.props.actions.deleteTodo(this.todoId);
    this.deleted = true;
  }

  handleTitleChange(event) {
    this.title = event.target.value;
    this.props.actions.updateTodo(this.todoId, this.title, this.description);
  }
  handleDescriptionChange(event) {
    this.description = event.target.value;
    this.props.actions.updateTodo(this.todoId, this.title, this.description);
  }

  redirect() {
    return (
      <Redirect
        to={{
          pathname: todosPath,
          state: { from: this.props.location }
        }}
      />
    );
  }

  render() {
    if (this.deleted || !this.todoId) {
      return this.redirect();
    }

    return (
      <div>
        <div style={{ marginBottom: "10px" }}>
          <Link to={todosPath} >
            <FontAwesomeIcon icon="arrow-left" color="#fff" size="2x" />
          </Link>
          <span style={{ float: "right", cursor: "pointer" }}
            onClick={this.delete}>
            <FontAwesomeIcon icon="trash-alt" color="#fff" size="2x" />
          </span>
        </div>
        <input type="text" value={this.title} style={styles.inputStyle}
          maxLength="40" placeholder="Title" onChange={this.handleTitleChange} />
        <textarea type="text" value={this.description} rows="10"
          style={Object.assign({}, styles.inputStyle, { marginTop: "20px", height: "auto" })}
          placeholder="Description" onChange={this.handleDescriptionChange} />
      </div>
    );
  }
}

const styles = {
  inputStyle: {
    width: '-webkit-fill-available',
    height: '30px',
    lineHeight: '30px',
    fontSize: '20px',
    fontWeight: '300',
    fontFamily: 'sans-serif',
    border: "0",
    borderRadius: "5px",
    padding: "3px 10px",
  }
}

function mapStateToProps(state) {
  return state.todos;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);