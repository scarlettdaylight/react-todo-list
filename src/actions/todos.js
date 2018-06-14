export const addTodo = (content, dueDate) => ({
  type: 'ADD_TODO',
  content,
  dueDate: '',
});

export const removeTodo = item => ({
  type: 'REMOVE_TODO',
  item,
});

export const removeMassTodo = () => ({
  type: 'REMOVE_MASS_TODO',
});

export const toggleSelect = item => ({
  type: 'TOGGLE_SELECTED',
  item,
});