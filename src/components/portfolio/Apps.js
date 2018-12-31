import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { todosPath } from '../../routes';

export default class Apps extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Link to={todosPath}>
          Todo
        </Link>
      </div>
    );
  }
}

const styles = {
  container: {
    padding: "50px",
    height: "-webkit-fill-available",
    fontWidth: "400",
  },
}