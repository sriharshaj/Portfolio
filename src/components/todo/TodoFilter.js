import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as actions from '../../actions';

class TodoFilter extends Component {
  render() {
    return (
      <div style={styles.todoFilter}>
        <div style={{display: "inline-block", cursor: "pointer"}}
          title="SHOW ALL" onClick={() => this.props.actions.filterTodos(actions.SHOW_ALL)}> 
          <FontAwesomeIcon icon="check-circle" color="gray"/>
        </div>
        <div style={{display: "inline-block", float: "right", cursor: "pointer"}}
          title="SHOW ACTIVE" onClick={() => this.props.actions.filterTodos(actions.SHOW_ACTIVE)}> 
          <FontAwesomeIcon icon="check-circle" color="#fff" />
        </div>
        <div style={{display: "inline-block", float: "right", marginRight: "25px", cursor: "pointer"}}
          title="SHOW COMPLETED" onClick={() => this.props.actions.filterTodos(actions.SHOW_COMPLETED)}> 
          <FontAwesomeIcon icon="check-circle" color="green" />
        </div>
      </div>
    );
  }
}

const styles = {
  todoFilter: {
    fontSize: "20px",
    height: "30px",
    lineHeight: "30px",
    fontFamily: "sans-serif",
    fontWeight: 300,
    marginTop: "10px",
  },
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(TodoFilter);