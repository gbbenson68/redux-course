import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import store from './store.js'
import { bindActionCreators } from 'redux'
import { updateCurrent } from './reducers/todo.js'

// Define todoChangeHandler
//    Here, we dispatch a CURRENT_UPDATE change to the state. This handler is passed to
//    to TodoForm.js and used as the onChange functiion.
// const todoChangeHandler = (value) => store.dispatch(updateCurrent(value))

// Use redux bindActionCrerators instead, using object key: value shorthand.
const actions = bindActionCreators({
  updateCurrent
}, store.dispatch)

/* ***** BEGIN: Illustrate how to use redux with react without react-redux bindings.
// Wrap the ReactDOM.render() function to include the state.
const render = () => {
  const state = store.getState()
  ReactDOM.render(<App todos={state.todos}
                       currentTodo={state.currentTodo}
                       changeCurrent={actions.updateCurrent}
                  />,
                  document.getElementById('root'))
}

// Call the wrapped ReactDOM.render()
render()

// Attach the render() function as a change listener callback function, so that any
// change triggers the render().
store.subscribe(render)
  ***** END: Illustrate how to use redux with react without react-redux bindings.
*/

// Simplify application entry point by using react-redux bindings, by using
// Provider component
ReactDOM.render(
  <Provider store={store}>
    <App changeCurrent={actions.updateCurrent}/>
  </Provider>,
  document.getElementById('root')
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
