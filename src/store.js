import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import createLogger from 'redux-logger'
import reducers from './reducers'

const sagaMiddleware = createSagaMiddleware()

export default function configureStore(initialState = {}) {
  return createStore(
    reducers,
    initialState,
    composeWithDevTools(
      applyMiddleware(sagaMiddleware, createLogger)
    )
  )
}