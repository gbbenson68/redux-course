import { getTodos } from '../lib/todoServices.js'

const initState = {
  todos: [],
  // Specify a dummy current value for the form field
  currentTodo: ''
}

// Create constants for actions, to make code less error-prone
const TODO_ADD = 'TODO_ADD'
const CURRENT_UPDATE = 'CURRENT_UPDATE'

// Action creator for CURRENT_UPDATE.
export const updateCurrent = (value) => ({type:CURRENT_UPDATE, payload: value})
export const fetchTodos = () => {
  return () => {
    getTodos()
      .then(todos => console.log(todos))
  }
}

// The actual reducer:
//    - TODO_ADD - the action for adding a neew todo item to the List
//    - CURRENT_UPDATE - the action used to re-render the dummy todo field in the form
export default (state = initState, action) => {
  switch (action.type) {
    case TODO_ADD:
      return {...state, todos: state.todos.concat(action.payload)}
    case CURRENT_UPDATE:
      return {...state, currentTodo: action.payload}
    default:
      return state
  }
}
