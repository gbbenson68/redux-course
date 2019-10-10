import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateCurrent, saveTodo } from '../reducers/todo.js'

class TodoForm extends Component {
  // Define input change handler
  //   changeCurrent() is actually todoChangeHandler() passed as props from index.js
  handleInputChange = (event) => {
    const value = event.target.value
    this.props.updateCurrent(value)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.saveTodo(this.props.currentTodo)
  }

  render() {
    // Destructure props
    const { currentTodo } = this.props
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text'
               onChange={this.handleInputChange}
               value={currentTodo}
        />
      </form>
    )
  }
}

export default connect(
  (state) => ({currentTodo: state.todo.currentTodo}), // mapStateToProps()
  {updateCurrent, saveTodo}                           // mapDispatchToProps()
)(TodoForm)
