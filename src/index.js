import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import createLogger from 'redux-logger'
import { Provider } from 'react-redux'
import reducers from './reducers'
import sagas from './sagas'
// import { getCoinList } from './reducers/coinList'
import Main from './pages/Main'
import './assets/styles/base.scss'

const initialState = {}
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware, createLogger)
  )
)

sagaMiddleware.run(sagas)

// store.dispatch(getCoinList())

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
