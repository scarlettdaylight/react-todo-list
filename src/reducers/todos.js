import { guid } from '../utils/uuid';

//TODO: set initialState from localStorage
const initialState = {
  items: [
    {
      id: guid(),
      content: 'hey!',
      dueDate: '',
      completed: true,
      selected: true,
    },
  ],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const nextId = guid();
      return {
        lastId: nextId,
        items: [
          ...state.items,
          {
            id: nextId,
            content: action.content,
            dueDate: action.dueDate,
            completed: false,
            selected: false,
          },
        ],
      };
    case 'REMOVE_TODO':
      return {
        ...state,
        items: state.items.filter((candidate) => (candidate !== action.item)),
      };
    case 'TOGGLE_SELECTED':
      return {
        ...state,
        selected: [
          ...state.selected,
          action.id,
        ],
      };
    default:
      return state;
  }
};

export default todos;