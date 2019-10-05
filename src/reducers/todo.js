const initState = {
  todos: [
    {id: 1, name: 'Create Static UI', isComplete: true},
    {id: 2, name: 'Create Initial State', isComplete: false},
    {id: 3, name: 'Use State to Render UI', isComplete: false}
  ],
  // Specify a dummy current value for the form field
  currentTodo: '< enter todo here >'
}

// The actual reducer:
//    - TODO_ADD - the action for adding a neew todo item to the List
//    - CURRENT_UPDATE - the action used to re-render the dummy todo field in the form
export default (state = initState, action) => {
  switch (action.type) {
    case 'TODO_ADD':
      return {...state, todos: state.todos.concat(action.payload)}
    case 'CURRENT_UPDATE':
      return {...state, currentTodo: action.payload}
    default:
      return state
  }
}
