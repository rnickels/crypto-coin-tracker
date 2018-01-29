import { combineReducers } from 'redux'
import layout from './layout'
import loading from './loading'
import themeOptions from './themeOptions'
import coins from './coins'

const reducers = combineReducers({
  coins,
  layout,
  loading,
  themeOptions,
})

export default reducers