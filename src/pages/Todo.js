import React, { Component } from 'react';
import { connect } from 'react-redux';

class TodoPage extends Component {
  render() {
    return (
      <h3>Hey todo page</h3>
    );
  }
}

export default connect()(TodoPage);