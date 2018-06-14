import React from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import { connect } from 'react-redux';

const TodoListing = ({todos}) => (
  <Row>
    {todos.length > 0 && todos.map(item =>
      <Col xs={12} key={item.id}>
        <TodoItem
          item={item}
          onClickCheck={() => {console.log('heyyo!');}}
          onClickDelete={() => {console.log('hey!');}}
        />
      </Col>,
    )}
  </Row>
);

TodoListing.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    content: PropTypes.string.isRequired,
    dueDate: PropTypes.string.isRequired,
  }).isRequired),
};

const mapStateToProps = (state) => {
  console.log(state.todos);
  console.log(state.todos.items.length);
  return {
    todos: state.todos.items,
  };
};

export default connect(mapStateToProps)(TodoListing);