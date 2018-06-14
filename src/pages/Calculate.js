import React from 'react';
import { Container, Row, Col, Input } from 'reactstrap';
import { connect } from 'react-redux';
import styled from 'styled-components';

const PageTitle = styled.h3`
  font-weight: 100;
  font-size: 5rem;
`;

const CaulatePageContainer = styled(Container)`
    text-align: center;
`;

class CalculatePage extends React.PureComponent {
  render() {
    return (
      <CaulatePageContainer>
        <Row>
          <Col>
            <PageTitle className="my-4">Recursive digits sum</PageTitle>
          </Col>
        </Row>
        <Row className="align-items-center justify-content-center">
          <Col xs={8}>
            <Input type="number" name="number" id="recursive-number"
                   placeholder="Enter the number"/>
          </Col>
        </Row>
      </CaulatePageContainer>
    );
  }
}

export default CalculatePage;
