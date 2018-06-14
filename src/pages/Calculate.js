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

const NumberInput = styled.input`
  && {
    border: 1px solid rgba(0,0,0,0.14);
    background: rgba(255,255,255,0.8);
    border-radius: 0;
    padding: 16px;
    width: 100%;
    user-select: none;
    transition: box-shadow 200ms ease-in;
    outline: none;
    font-weight: 100;
    font-size: 22px;
    box-shadow: 0px 2px 4px rgba(0,0,0,.1);
    &:focus {
      user-select: none;
      transition: box-shadow 200ms ease-in;
      box-shadow: 2px 4px 10px rgba(0,0,0,.2);
      background: white;
    }
    &::placeholder {
      font-style: italic;
    }
  }
`;

const PaperBackground = styled.div`
    padding: 16px;
    margin-top: 16px;
    background: white;
    border: 1px solid rgba(0,0,0,0.14);
    font-weight: 100;
`;

const IntermediateRow = styled.div`
  border-bottom: 1px solid rgba(0,0,0,0.14);
  padding: 4px;
`;

const FormulaRow = styled.div`
    width: 80%;
    word-wrap: break-word;
`;

const ResultRow = styled.div`
    width: 20%;
`;

const FinalResultRow = styled.div`
  font-size: 20px;
  font-weight: 500;
  padding: 4px;
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
      for (let i = 1; i < num.length; i++) {
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
              placeholder="Enter the magic number"
              onChange={this.handleInputKeyPress}
              value={this.state.value}
            />
          </Col>
        </Row>
        <Row className="align-items-center justify-content-center">
          <Col xs={12}>
            {steps.length > 0 &&
            <PaperBackground>
              {steps.map(function (val, index) {
                return (
                  <IntermediateRow key={index}
                                   className="d-flex align-content-center justify-content-between">
                    <FormulaRow>{val}</FormulaRow>
                    <ResultRow>= {eval(val)}</ResultRow>
                  </IntermediateRow>
                );
              })}
              <FinalResultRow>{this.state.result}</FinalResultRow>
            </PaperBackground>
            }
          </Col>
        </Row>
      </CaulatePageContainer>
    );
  }
}

export default CalculatePage;
