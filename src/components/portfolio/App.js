import React, { Component } from 'react';

import { Col, Row } from 'reactstrap';

import SideBar from './SideBar';
import Main from './Main';

export default class App extends Component {
  render() {
    return (
      <Row className="no-gutters">
        <Col xs="3">
          <SideBar />
        </Col>
        <Col xs="9">
          <Main />
        </Col>
      </Row>
    )
  }
}