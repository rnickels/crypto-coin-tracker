import { combineReducers } from 'redux'
import error from './error'
import layout from './layout'
import loading from './loading'
import themeOptions from './themeOptions'
import coinList from './coinList'
import coinDetails from './coinDetails'

const reducers = combineReducers({
  coinList,
  coinDetails,
  layout,
  loading,
  error,
  themeOptions,
})

export default reducers