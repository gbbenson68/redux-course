import reducer from './todo.js'

describe('Todo Reducer', () => {
  test('returns a state object', () => {
    const result = reducer(undefined, {type: 'ANYTHING'})
    expect(result).toBeDefined()
  })

  test('adds a todo', () => {
    const startState = {
      todos: [
        {id: 1, name: 'Create Static UI', isComplete: true},
        {id: 2, name: 'Create Initial State', isComplete: false},
        {id: 3, name: 'Use State to Render UI', isComplete: false}
      ]
    }

    const expectedState = {
      todos: [
        {id: 1, name: 'Create Static UI', isComplete: true},
        {id: 2, name: 'Create Initial State', isComplete: false},
        {id: 3, name: 'Use State to Render UI', isComplete: false},
        {id: 4, name: 'Added TODO', isComplete: false}
      ]
    }

    const action = {type: 'TODO_ADD', payload: {id: 4, name: 'Added TODO', isComplete: false}}
    const result = reducer(startState, action)
    expect(result).toEqual(expectedState)
  })
})
