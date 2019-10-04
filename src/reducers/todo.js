const initState = {
  todos: [
    {id: 1, name: 'Create Static UI', isComplete: true},
    {id: 2, name: 'Create Initial State', isComplete: false},
    {id: 3, name: 'Use State to Render UI', isComplete: false}
  ]
}

export default (state = initState, action) => {
  switch (action.type) {
    case 'TODO_ADD':
      return {...state, todos: state.todos.concat(action.payload)}
    default:
      return state
  }
}
