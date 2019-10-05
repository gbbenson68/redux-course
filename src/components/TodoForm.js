import React from 'react'

export default (props) => {
  // Destructure props
  const { currentTodo, changeCurrent } = props

  // Define input change handler
  //   changeCurrent() is actually todoChangeHandler() passed as props from index.js
  const handleInputChange = (event) => {
    const value = event.target.value
    changeCurrent(value)
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
