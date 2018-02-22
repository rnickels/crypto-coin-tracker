export const INIT_COIN_LIST_SAGA = 'INIT_COIN_LIST_SAGA'
export const REQUEST_COIN_LIST = 'REQUEST_COIN_LIST'
export const SET_COIN_LIST = 'SET_COIN_LIST'
// export const REQUEST_COIN_ICON = 'COINS/REQUEST_COIN_ICON'
// export const RECEIVE_COIN_ICON = 'COINS/RECEIVE_COIN_ICON'
// export const ERROR_FETCHING_COIN_ICON = 'COINS/ERROR_FETCHING_COIN_ICON'

const initialState = {
  loadingCoins: false,
  coins: [],
  error: null,
}

/* reducer */
const coinList = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_COIN_LIST:
      return {
        ...state,
        loadingCoins: true
      }
    case SET_COIN_LIST:
      return {
        ...state,
        coins: action.coins
      }
    default:
      return state
  }
}

export default coinList

export const getCoinList = () => ({
  type: INIT_COIN_LIST_SAGA,
})

export const requestCoinList = () => ({
  type: REQUEST_COIN_LIST,
})

export const setCoinList = (coins) => ({
  type: SET_COIN_LIST,
  coins: coins
})

// export const catchError = (error) => ({
//   type: ERROR_COIN_LIST,
//   error
// })


// export default function reducer(state = {
//   coinList: [],
//   coinDetails: [],
//   coin30DayHistory: [],
//   error: []
// }, action) {
//   switch (action.type) {
//     case REQUEST_COIN_DETAILS:
//       return {
//         ...state,
//         fetchingCoinDetails: true
//       }
//     case RECEIVE_COIN_DETAILS:
//       return {
//         ...state,
//         coinDetails: action.coinDetails,
//         fetchingCoinDetails: false
//       }
//     case REQUEST_COIN_HISTORY:
//       return {
//         ...state,
//         coinHistory: action.coin30DayHistory,
//         fetchingCoinHistory: true
//       }
//     case RECEIVE_COIN_HISTORY:
//       return {
//         ...state,
//         coinHistory: action.coin30DayHistory,
//         fetchingCoinHistory: false
//       }
//     case REQUEST_COIN_LIST:
//       return {
//         ...state,
//         fetchingCoins: true
//       }
//     case RECEIVE_COINS:
//       return {
//         ...state,
//         coinList: action.coinList,
//         receivedAt: action.receivedAt,
//         fetchingCoins: false
//       }
//     case ERROR_FETCHING_COINS:
//     case ERROR_FETCHING_COIN_DETAILS:
//     case ERROR_FETCHING_COIN_ICON:
//     case ERROR_FETCHING_COIN_HISTORY:
//       return {
//         ...state,
//         error: action.error
//       }
//     default:
//       return { ...state }
//   }
// }

// export function fetchCoins() {
//   return dispatch => {
//     dispatch({ type: REQUEST_COIN_LIST })
//     axios.get('https://api.coinmarketcap.com/v1/ticker/')
//       .then(response => {
//         dispatch(receiveCoins(response.data))
//       })
//       .catch(error => {
//         dispatch(errorFetching(ERROR_FETCHING_COINS, error))
//       })
//   }
// }

// function receiveCoins(coinList) {
//   return {
//     type: RECEIVE_COINS,
//     coinList,
//     receivedAt: Date.now()
//   }
// }

// export function fetchCoinDetails(name) {
//   return dispatch => {
//     dispatch({ type: REQUEST_COIN_DETAILS })
//     axios.get(`https://api.coinmarketcap.com/v1/ticker/${name}/`)
//       .then(response => {
//         dispatch(receiveCoinDetails(response.data[0]))
//       })
//       .catch(error => {
//         dispatch(errorFetching(ERROR_FETCHING_COIN_DETAILS, error))
//       })
//   }
// }

// function receiveCoinDetails(coinDetails) {
//   return {
//     type: RECEIVE_COIN_DETAILS,
//     coinDetails,
//     receivedAt: Date.now()
//   }
// }

// export function fetchCoinHistory(symbol, limit) {
//   return dispatch => {
//     dispatch({ type: REQUEST_COIN_HISTORY })
//     console.log(CryptoCompareService.getCoinHistory(symbol, limit))
//     axios.get(`https://min-api.cryptocompare.com/data/histoday`, {
//       params: {
//         fsym: symbol,
//         tsym: 'USD',
//         limit: days
//       }
//     })
//       .then(response => {
//         console.log(response)
//         dispatch(receiveCoinHistory(response.data[0]))
//       })
//       .catch(error => {
//         dispatch(errorFetching(ERROR_FETCHING_COIN_HISTORY))
//       })
//   }
// }

// function receiveCoinHistory(coinHistory) {
//   return {
//     type: RECEIVE_COIN_HISTORY,
//     coinHistory,
//     receivedAt: Date.now()
//   }
// }

// export function fetchCoinIcon(coinSymbol) {
//   return dispatch => {
//     dispatch({ type: REQUEST_COIN_ICON })
//     axios.get(`https://chasing-coins.com/api/v1/std/logo/${coinSymbol}`)
//       .then(response => {
//         dispatch(receiveCoinIcon(response))
//       })
//       .catch(error => {
//         dispatch(errorFetching(ERROR_FETCHING_COIN_ICON, error))
//       })
//   }
// }

// function receiveCoinIcon(coinIcon) {
//   return {
//     type: RECEIVE_COIN_ICON,
//     coinIcon
//   }
// }

// function errorFetching(actionType, error) {
//   return {
//     type: actionType,
//     error
//   }
// }