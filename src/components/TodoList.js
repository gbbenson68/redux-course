import React, { Component } from 'react'

const TodoItem = ({id, name, isComplete}) => (
  <li key={id}>
    <input type='checkbox' defaultChecked={isComplete}/>
    {name}
  </li>
)

class TodoList extends Component {
  render() {
    return (
      <div className='Todo-List'>
        <ul>
          {this.props.todos.map(todo => <TodoItem {...todo}/> )}
        </ul>
      </div>
    )
  }
}

export default TodoList
