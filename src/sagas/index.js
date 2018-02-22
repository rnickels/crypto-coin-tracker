import { all } from 'redux-saga/effects'
import { watchGetCoinList } from './coinList'
import { watchGetCoinHistory } from './coinDetails'

export default function* rootSaga() {
  yield all([
    watchGetCoinList(),
    watchGetCoinHistory(),
  ])
}