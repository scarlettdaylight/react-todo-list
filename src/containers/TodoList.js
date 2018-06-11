import React, { Component, Fragment } from 'react';
import TodoAdd from '../components/TodoAdd';
import TodoListing from '../components/TodoListing';
import { connect } from 'react-redux';

class TodoPage extends Component {
  render() {
    console.log(this.props);
    return (
      <Fragment>
        <TodoAdd/>
        <TodoListing todos={this.props.todos}/>
      </Fragment>
    );
  }
}

const mapStateToProps = state => (
  {
    todos: state.todos,
  }
);
export default connect(mapStateToProps)(TodoPage);