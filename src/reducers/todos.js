const initialState = [
  {
    id: 1,
    text: 'hey!',
    completed: true,
  },
];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: state.length + 1,
          text: action.text,
          completed: false,
        },
      ];
    default:
      return state;
  }
};

export default todos;