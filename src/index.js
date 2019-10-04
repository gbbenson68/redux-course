import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import store from './store.js'

const render = () => {
  const state = store.getState()
  ReactDOM.render(<App {...state} />, document.getElementById('root'))
}

render()
store.subscribe(render)

setTimeout(() => {
  store.dispatch()
}, 1000)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
