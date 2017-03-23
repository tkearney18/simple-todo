import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../spotifyConfigStore'
import SpotifyApp from '../components/SpotifyApp'

const store = configureStore()

export default class SpotifyRoot extends Component {
  render() {
    return (
      <Provider store={store}>
        <SpotifyApp />
      </Provider>
    )
  }
}