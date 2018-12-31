export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_COMPLETED = 'SHOW_COMPLETED';
export const SHOW_ACTIVE = 'SHOW_ACTIVE';
export const FILTER_TODOS = 'FILTER_TODOS';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const addTodo = (title, description = "") => ({
  type: ADD_TODO,
  title,
  description,
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id,
});

export const updateTodo = (id, title, description) => ({
  type: UPDATE_TODO,
  id,
  title,
  description,
});

export const filterTodos = filter => ({
  type: FILTER_TODOS,
  filter,
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  id
});