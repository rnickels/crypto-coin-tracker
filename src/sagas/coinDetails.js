// import WebSocket from 'ws'
import { call, put, takeEvery } from 'redux-saga/effects'
import { requestCoinHistory, setCoinHistory } from '../reducers/coinDetails'
import { catchError } from '../reducers/error'
import { fetchCoinHistory } from '../services/CryptoCompare'

export function* watchGetCoinHistory() {
  yield takeEvery('INIT_COIN_HISTORY_SAGA', getCoinHistoryAsync())
}

export function* getCoinHistoryAsync(action) {
  yield put(requestCoinHistory())
  const data = yield call(fetchCoinHistory(action.coinSymbol, action.limit))
  if (data && !data.error) {
    yield put(setCoinHistory(data))
  } else {
    yield put(catchError(data.error, 'COIN_HISTORY_ERROR'))
  }
}

// export function subscribeToWebSocket() {
//   const ws = new WebSocket('wss://ws-feed.gdax.com')
//   const subscriptionMessage = {
//     type: 'subscribe',
//     product_ids: ['BTC/USD', 'ETC/USD']
//   }

//   ws.on('open', () => {
//     console.log('connected to ws')
//   })

//   ws.send(JSON.stringify(subscriptionMessage))

//   ws.on('message', data => {
//     console.log('ws message', data)
//   })

//   // ws.onmessage = data => {
//   //     console.log('ws data', data)
//   //   }
// }
