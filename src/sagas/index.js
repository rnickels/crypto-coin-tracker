import { all } from 'redux-saga/effects'
import { watchGetCoinList } from './coinList'
import { watchGetCoinHistory } from './coinDetails'
import { watchSignInUser, watchRegisterUser } from './user'

export default function* rootSaga() {
  yield all([
    watchSignInUser(),
    watchRegisterUser(),
    watchGetCoinList(),
    watchGetCoinHistory(),
  ])
}