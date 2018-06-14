import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  IoIosCloseEmpty,
  IoIosCircleOutline,
  IoIosCircleFilled,
} from 'react-icons/lib/io';
import { toggleSelected } from '../actions/todos';

const StyledItem = styled.div`
    padding: 16px;
    border: 1px solid rgba(0,0,0,0.14);
    background: white;
    border-top: 0;
    box-shadow: 0 2px 4px rgba(0,0,0,.1);
    svg {
      width: 18px;
      height: 18px;
    }
`;

class TodoItem extends React.PureComponent {
  render() {
    const {item} = this.props;
    return (
      <StyledItem className="d-flex align-items-center justify-content-start"
                  data-id={item.id}>
        <div onClick={this.props.onClickCheck}>
          <IoIosCircleOutline/>
        </div>
        <div className="px-2">{item.content}</div>
        <div className="ml-auto" onClick={this.props.onClickDelete}>
          <IoIosCloseEmpty/></div>
      </StyledItem>
    );
  }
}

TodoItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    content: PropTypes.string.isRequired,
    dueDate: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
  }).isRequired,
  onClickCheck: PropTypes.func,
  onClickDelete: PropTypes.func,
};

export default TodoItem;