import React, { Component } from 'react'
import { connect } from 'react-redux'
import logo from './logo.svg'
import './App.css'
import TodoForm from './components/TodoForm.js'
import TodoList from './components/TodoList.js'
import { bindActionCreators } from 'redux'
import { updateCurrent } from './reducers/todo.js'

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
                    changeCurrent={this.props.updateCurrent}
          />
          <TodoList todos={this.props.todos} />
        </div>
      </div>
    )
  }
}

// Instead of exporting the default App, we export the React App connected to the Redux store.
const mapStateToProps = (state) => state
const mapDispatchToProps = (dispatch) => bindActionCreators({updateCurrent}, dispatch)
const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)
export default ConnectedApp
