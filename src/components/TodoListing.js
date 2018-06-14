import React from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import { connect } from 'react-redux';
import { removeTodo, toggleSelect } from '../actions/todos';

class TodoListing extends React.PureComponent {

  handleSelect = (item) => () => {
    this.props.dispatch(toggleSelect(item));
  };

  handleDelete = (item) => () => {
    this.props.dispatch(removeTodo(item));
  };

  render() {
    const {todos} = this.props;
    return (
      <Row>
        {todos.length > 0 && todos.map(item =>
          <Col xs={12} key={item.id}>
            <TodoItem
              item={item}
              onClickCheck={this.handleSelect(item)}
              onClickDelete={this.handleDelete(item)}
            />
          </Col>,
        )}
      </Row>
    );
  }
}

TodoListing.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    content: PropTypes.string.isRequired,
    dueDate: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
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