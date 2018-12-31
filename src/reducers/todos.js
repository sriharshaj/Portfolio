import { ADD_TODO, TOGGLE_TODO, SHOW_ALL, FILTER_TODOS, UPDATE_TODO, DELETE_TODO } from '../actions/index';

export const initialState = {
  visibilityFilter: SHOW_ALL,
  todos: [{
    id: new Date().valueOf(),
    title: "Grocery shopping",
    description: "",
    completed: false,
  }, {
    id: (new Date().valueOf()) + 1,
    title: "Book movie tickets",
    description: "",
    completed: true,
  }],
}

const todos = (state = initialState, action) => {
  let todos = state.todos;
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          ...todos,
          {
            id: new Date().valueOf(),
            title: action.title,
            description: action.description,
            completed: false,
          }
        ]
      });
    case TOGGLE_TODO:
      return Object.assign({}, state, {
        todos: todos.map(todo =>
          (todo.id === action.id) ? Object.assign({}, todo, { completed: !todo.completed }) : todo)
      });
    case FILTER_TODOS:
      return Object.assign({}, state, { visibilityFilter: action.filter });
    case UPDATE_TODO:
      return updateTodo(state, action.id, action.title, action.description);
    case DELETE_TODO:
      return deleteTodo(state, action.id);
    default:
      return state;
  }
}

const updateTodo = (state, id, title, description) => {
  let todos = state.todos;
  let index = getTodoIndex(todos, id);
  if (index !== -1) {
    state = Object.assign(
      {}, state, {
        todos: [
          ...todos.slice(0, index),
          Object.assign({}, todos[index], { title: title, description: description }),
          ...todos.slice(index + 1)
        ]
      });
  }
  return state;
}

const getTodoIndex = (todos, id) => {
  let index = -1;
  for (let i in todos) {
    if (id == todos[i].id) {
      index = i;
    }
  }
  return index;
}

const deleteTodo = (state, id) => {
  let todos = state.todos;
  let index = getTodoIndex(todos, id);
  if (index !== -1) {
    state = Object.assign(
      {}, state, {
        todos: [
          ...todos.slice(0, index),
          ...todos.slice(index + 1)
        ]
      });
  }
  return state;
}

export default todos;