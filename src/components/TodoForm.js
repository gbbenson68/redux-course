import React from 'react'
import { connect } from 'react-redux'
import { updateCurrent } from '../reducers/todo.js'

const TodoForm = (props) => {
  // Destructure props
  // NOTE: Although updateCurrent is retrieved from todo.js, we need to destructure
  //       it here as were mapping it to props via mapDispatchToProps().   
  const { currentTodo, updateCurrent } = props

  // Define input change handler
  //   changeCurrent() is actually todoChangeHandler() passed as props from index.js
  const handleInputChange = (event) => {
    const value = event.target.value
    updateCurrent(value)
  }

  return (
    <form>
      <input type='text'
             onChange={handleInputChange}
             value={currentTodo}
      />
    </form>
  )
}

export default connect(
  (state) => ({currentTodo: state.currentTodo}), // mapStateToProps()
  {updateCurrent}                                // mapDispatchToProps()
)(TodoForm)
