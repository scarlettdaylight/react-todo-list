//TODO: set initialState from localStorage
const initialState = {
  lastId: 1,
  items: [
    {
      id: 1,
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
      const nextId = state.lastId + 1;
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