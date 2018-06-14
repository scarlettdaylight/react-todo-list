import { guid } from '../utils/uuid';

const initialState = {
  items: [],
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
            order: state.items.length + 1,
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
    case 'REMOVE_MASS_TODO':
      return {
        ...state,
        items: state.items.filter((candidate) => (candidate.selected !== true)),
      };
    case 'TOGGLE_SELECTED':
      return {
        ...state,
        items: state.items.map(
          (candidate) => (
            candidate !== action.item
              ? candidate
              : {...action.item, selected: !action.item.selected})),
      };
    default:
      return state;
  }
};

export default todos;