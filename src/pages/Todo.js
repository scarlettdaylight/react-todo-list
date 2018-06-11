import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import TodoList from '../containers/TodoList';
import 'animate.css';

const PageTitle = styled.h3`
    font-weight: 100;
    font-size: 5rem;
    color: #E98B2A;
`;

class TodoPage extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs={12}>
            <PageTitle className="my-4">TODO LIST</PageTitle>
          </Col>
          <Col xs={12}>
            <TodoList/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default TodoPage;