import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'
import HelloWorld from './components/HelloWorld'
import RedditAJAX from './components/RedditAJAX'
import RedditRoot from './containers/RedditRoot'
import SpotifyApp from './components/SpotifyApp'
import SpotifyRoot from './containers/SpotifyRoot'

let store = createStore(todoApp,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

render(
  <div>
    <SpotifyRoot />
  </div>,
  document.getElementById('root')
)

/*
render(
  <div>
    <HelloWorld name="Troy" />
  </div>,
  document.getElementById('root')
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
render(
  <div>
    <RedditRoot />
  </div>,
  document.getElementById('root')
)

render(
  <div>
    <RedditAJAX subreddit="reactjs" />
  </div>,
  document.getElementById('root')
)
*/