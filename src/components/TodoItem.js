import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  IoIosCloseEmpty,
  IoIosCircleOutline,
  IoIosCircleFilled,
} from 'react-icons/lib/io';

const StyledItem = styled.div`
    padding: 16px;
    border: 1px solid rgba(0,0,0,0.14);
    background: white;
    border-top: 0;
    box-shadow: 0 2px 4px rgba(0,0,0,.1);
    svg {
      width: 24px;
      height: 24px;
    }
`;

const Checkbox = styled.div`
    cursor: pointer;
`;

const DeleteButton = styled.div`
    cursor: pointer;
`;

class TodoItem extends React.PureComponent {
  render() {
    const {item} = this.props;
    return (
      <StyledItem className="d-flex align-items-center justify-content-start"
                  data-id={item.id}>
        <Checkbox onClick={this.props.onClickCheck}>
          {item.selected && <IoIosCircleFilled/>}
          {!item.selected && <IoIosCircleOutline/>}
        </Checkbox>
        <div className="px-2">{item.content}</div>
        <DeleteButton className="ml-auto" onClick={this.props.onClickDelete}>
          <IoIosCloseEmpty/>
        </DeleteButton>
      </StyledItem>
    );
  }
}

TodoItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    content: PropTypes.string.isRequired,
    dueDate: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
  }).isRequired,
  onClickCheck: PropTypes.func,
  onClickDelete: PropTypes.func,
};

export default TodoItem;