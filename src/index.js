import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'
import HelloWorld from './components/HelloWorld'

let store = createStore(todoApp)


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
/*
render(
  <div>
    <HelloWorld name="Troy" />
  </div>,
  document.getElementById('root')
)
*/