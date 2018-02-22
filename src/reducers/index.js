import { combineReducers } from 'redux'
import error from './error'
import layout from './layout'
import loading from './loading'
import themeOptions from './themeOptions'
import coinList from './coinList'

const reducers = combineReducers({
  coinList,
  layout,
  loading,
  error,
  themeOptions,
})

export default reducers