import React from 'react'

export default (props) => {
  // Destructure props
  const { currentTodo } = props

  return (
    <form>
      <input type='text' value={currentTodo}/>
    </form>
  )
}
