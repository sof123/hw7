
require('expose?$!expose?jQuery!jquery')
import React from 'react'
import { render } from 'react-dom'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import Reducer from './reducers'
import App from './components/App'

const logger = createLogger()
const store = createStore(Reducer, applyMiddleware(thunkMiddleware))

//rendering the app
render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('app')
)
