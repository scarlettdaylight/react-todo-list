import React, { Component } from 'react';
import { Container, Row, Col, Input } from 'reactstrap';
import styled from 'styled-components';

class TodoAdd extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Input className="my-2" type="text" placeholder="Enter new todo"/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default TodoAdd;