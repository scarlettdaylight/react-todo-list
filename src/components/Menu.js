import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MenuWrapper = styled.div`
    width: 100%;
    height: 56px;
    background: white;
    border-bottom: 1px solid rgba(0,0,0,0.14);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const MenuItem = styled.button`
    display: inline-block;
    width: 200px;
    height: 100%;
    margin: 0 16px;
    text-align: center;
    font-size: 14px;
    a {
      &:hover {
        text-decoration: none;
      }
    }
`;

const Menu = () => (
  <MenuWrapper>
    <MenuItem>
      <Link to={`/todo`}>Todo List</Link>
    </MenuItem>
    <MenuItem>
      <Link to={`/calculate`}>Calculate!</Link>
    </MenuItem>
  </MenuWrapper>
);

export default Menu;