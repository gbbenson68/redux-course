import React from 'react'

const TodoItem = ({id, name, isComplete}) => (
  <li>
    <input type='checkbox' defaultChecked={isComplete}/>
    {name}
  </li>
)

// This is an alternate way of doing it.
// class TodoList extends Component {
//   render() {
//     return (
//       <div className='Todo-List'>
//         <ul>
//           {this.props.todos.map(todo => <TodoItem  key={todo.id} {...todo}/> )}
//         </ul>
//       </div>
//     )
//   }
// }
//
// export default TodoList

// This is as the lesson
export default (props) => (
  <div className='Todo-List'>
    <ul>
      {props.todos.map(todo => <TodoItem key={todo.id} {...todo}/> )}
    </ul>
  </div>
)
