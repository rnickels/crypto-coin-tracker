import { call, put, takeEvery } from 'redux-saga/effects'
import { requestCoinList, setCoinList } from '../reducers/coinList'
import { catchError } from '../reducers/error'
import { fetchCoinList } from '../services/CoinMarketCap'

export function* watchGetCoinList() {
  yield takeEvery('INIT_COIN_LIST_SAGA', getCoinListAsync)
}

export function* getCoinListAsync(action) {
  // dispatch the GET_COINS action to the store
  yield put(requestCoinList())

  // make the async call to fetchCoinList
  const data = yield call(fetchCoinList)

  if (data && !data.error) {
    yield put(setCoinList(data))
  } else {
    yield put(catchError(data.error))
  }
}
