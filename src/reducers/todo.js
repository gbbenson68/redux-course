import { getTodos, createTodo } from '../lib/todoServices.js'
import { showMessage } from './messages.js'

const initState = {
  todos: [],
  // Specify a dummy current value for the form field
  currentTodo: ''
}

// Create constants for actions, to make code less error-prone
export const TODO_ADD = 'TODO_ADD'
export const TODOS_LOAD = 'TODOS_LOAD'
const CURRENT_UPDATE = 'CURRENT_UPDATE'

// Action creators
export const updateCurrent = (value) => ({type: CURRENT_UPDATE, payload: value})
export const loadTodos = (todos) => ({type: TODOS_LOAD, payload: todos})
export const addTodo = (todo) => ({type: TODO_ADD, payload: todo})

// Dispatching functions
export const fetchTodos = () => {
  return (dispatch) => {
    dispatch(showMessage('Loading Todos...'))
    getTodos()
      .then(todos => dispatch(loadTodos(todos)))
  }
}

export const saveTodo = (name) => {
  return (dispatch) => {
    dispatch(showMessage('Saving Todo'))
    createTodo(name)
      .then(res => dispatch(addTodo(res)))
  }
}

// The actual reducer:
//    - TODO_ADD - the action for adding a neew todo item to the List
//    - CURRENT_UPDATE - the action used to re-render the dummy todo field in the form
export default (state = initState, action) => {
  switch (action.type) {
    case TODO_ADD:
      // NOTE: Setting currentTodo to an empty string clears the form!!
      return {...state, currentTodo: '', todos: state.todos.concat(action.payload)}
    case TODOS_LOAD:
      return {...state, todos: action.payload}
    case CURRENT_UPDATE:
      return {...state, currentTodo: action.payload}
    default:
      return state
  }
}
