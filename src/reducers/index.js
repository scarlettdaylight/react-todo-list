import { combineReducers } from 'redux';
import todos from './todos';
import calculator from './calculator';

/* eslint-disable no-underscore-dangle */
export default combineReducers({
  todos,
  calculator,
});
/* eslint-enable */