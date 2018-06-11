import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledItem = styled.div`
    padding: 16px;
    border: 1px solid rgba(0,0,0,0.14);
    background: white;
    padding-left: 48px;
    &:after {
      content: '';
      border: 1px solid #a4a4a4;
      width: 24px;
      height: 24px;
      position: absolute;
      left: 28px;
    }
`;

const ItemToggler = styled.span`
    height: 100%;
    width: 50px;
    position: absolute;
    display: inline-block;
    left: 15px;
    top: 0;
`;

const TodoItem = ({item, onClick}) => (
  <StyledItem className={item.id}>
    <ItemToggler onClick={onClick}/>
    <span>{item.text}</span>
  </StyledItem>
);

TodoItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func,
};

const TodoListing = ({todos}) => (
  <Row>
    {todos.length > 0 && todos.map(item =>
      <Col xs={12} key={item.id}>
        <TodoItem
          item={item}
          onClick={() => {console.log('hey!');}}
        />
      </Col>,
    )}
  </Row>
);

TodoListing.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export default TodoListing;