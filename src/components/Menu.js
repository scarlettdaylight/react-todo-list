import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => (
  <div>
    <ul>
      <li>
        <Link to={`/home`}>Home</Link>
      </li>
      <li>
        <Link to={`/todo`}>Todo List</Link>
      </li>
      <li>
        <Link to={`/calculate`}>Calculate!</Link>
      </li>
    </ul>
  </div>
);

export default Menu;