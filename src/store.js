import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import createLogger from 'redux-logger'
import reducers from './reducers'

export default function configureStore(initialState = {}) {
  return createStore(
    reducers,
    initialState,
    composeWithDevTools(
      applyMiddleware(thunk, createLogger)
    )
  )
}