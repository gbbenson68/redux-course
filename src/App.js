import React, { Component } from 'react'
import { connect } from 'react-redux'
import logo from './logo.svg'
import './App.css'
import TodoForm from './components/TodoForm.js'
import TodoList from './components/TodoList.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React with Redux</h2>
        </header>
        <div className='Todo-App'>
          <TodoForm currentTodo={this.props.currentTodo}
                    changeCurrent={this.props.changeCurrent}
          />
          <TodoList todos={this.props.todos} />
        </div>
      </div>
    )
  }
}

// export default App

// Instead of exporting the default App, we export the React App connected to the Redux store.
const mapStateToProps = (state) => state
const ConnectedApp = connect(mapStateToProps)(App)
export default ConnectedApp
