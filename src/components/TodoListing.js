import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

const TodoItem = ({item, onClick}) => (
  <div className={item.d} onClick={onClick}>{item.text}</div>
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
  <Container>
    <Row>
      <Col>
        {todos.length > 0 && todos.map(item =>
          <TodoItem
            key={item.id}
            item={item}
            onClick={() => {console.log('hey!');}}
          />,
        )}
      </Col>
    </Row>
  </Container>
);

TodoListing.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export default TodoListing;