import React, { Component } from 'react';
import { Container, Row, Col, Input } from 'reactstrap';
import styled from 'styled-components';
import { FaBeer } from 'react-icons/lib/fa';

const PageTitle = styled.h3`
  font-weight: 100;
  font-size: 5rem;
`;

const CaulatePageContainer = styled(Container)`
  text-align: center;
`;

const NumberInput = styled(Input)`
  && {
    padding: 16px;
    border-radius: 0;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
    outline: none;
    &:focus {
      box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
    }
  }
`;

const PaperBackground = styled.div`
  background: #ebb471;
`;

class CalculatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      steps: [],
      result: '',
    };
  }

  sumDigit = (number, steps) => {
    const num = number.toString();
    if (/^[0-9]*$/g.test(num) !== true) {
      console.log('incorrect string given');
      return false;
    }
    if (num.length > 1) {
      let c = num[0];
      for (var i = 1; i < num.length; i++) {
        c += `+${num[i]}`;
      }
      steps.push(c);
      return this.sumDigit(eval(c), steps);
    } else {
      return number;
    }
  };

  handleInputKeyPress = e => {
    let steps = [];
    const result = this.sumDigit(e.target.value, steps);
    this.setState({
      steps: steps,
      result: result,
    });
  };

  render() {
    const {steps} = this.state;
    return (
      <CaulatePageContainer>
        <Row>
          <Col>
            <PageTitle className="my-4 text-left">
              Recursive Digits Sum <FaBeer/>
            </PageTitle>
          </Col>
        </Row>
        <Row className="align-items-center justify-content-center">
          <Col xs={12}>
            <NumberInput
              type="text"
              name="number"
              id="recursive-number"
              placeholder="Enter the number"
              onChange={this.handleInputKeyPress}
              value={this.state.value}
            />
          </Col>
        </Row>
        <Row className="align-items-center justify-content-center">
          <Col xs={12}>
            <PaperBackground>
              {steps.map(function (val, index) {
                return (
                  <div key={index}>
                    <div>{val.replace(/\+/g, '')}</div>
                    <div>{val}</div>
                  </div>
                );
              })}
            </PaperBackground>
          </Col>
          <Col xs={8}>{this.state.result}</Col>
        </Row>
      </CaulatePageContainer>
    );
  }
}

export default CalculatePage;
