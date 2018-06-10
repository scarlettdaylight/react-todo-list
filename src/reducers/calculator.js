const calculator = (state = [], action) => {
  switch (action.type) {
    case 'SAVE_NUMBER':
      return [
        ...state,
        {
          number: action.number,
        },
      ];
    default:
      return state;
  }
};

export default calculator;