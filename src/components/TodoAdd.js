import React, { Component } from 'react';
import { Container, Row, Col, Input } from 'reactstrap';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addTodo} from '../actions/todos';

const InputField = styled.input`
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
`;

class TodoAdd extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleKeyPress = (e) => {
    console.log('preesss');
    if (e.key === 'Enter') {
      this.props.dispatch(addTodo(this.state.value));
    }
  };

  render() {
    console.log(this.props);
    return (
      <Row>
        <Col>
          <InputField type="text" placeholder="What needs to be done?"
                      onKeyPress={this.handleKeyPress}
                      onChange={this.handleChange}/>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => (
  {
    todos: state.todos,
  }
);

export default connect(mapStateToProps)(TodoAdd);