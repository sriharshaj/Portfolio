import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../actions';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.todoText = '';
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.todoText = event.target.value;
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.actions.addTodo(this.todoText);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" style={styles.inputStyle} maxLength="40" onChange={this.handleChange} />
      </form>
    );
  }
}

const styles ={
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

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(TodoForm);