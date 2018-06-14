import React from 'react';
import styled from 'styled-components';

const FooterBackground = styled.div`
    padding: 8px 16px;
    border: 1px solid rgba(0,0,0,0.14);
    background: rgba(255,255,255,0.8);
    border-top: 0;
    box-shadow: 0 2px 4px rgba(0,0,0,.1);
    font-size: 14px;
    font-weight: light;
`;

class TodoFooter extends React.PureComponent {
  render() {
    return (
      <FooterBackground>{this.props.items.length} items left.</FooterBackground>
    );
  }
}

export default TodoFooter;