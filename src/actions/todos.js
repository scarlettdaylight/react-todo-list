export const addTodo = (content, dueDate) => ({
  type: 'ADD_TODO',
  content,
  dueDate: '',
});

export const toggleSelected = id => ({
  type: 'TOGGLE_SELECTED',
  id,
});