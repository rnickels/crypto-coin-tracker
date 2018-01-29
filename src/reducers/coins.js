import axios from 'axios'
// import ChasingCoinsService from '../services/ChasingCoins'

export const REQUEST_COINS = 'COINS/REQUEST_COINS'
export const RECEIVE_COINS = 'COINS/RECEIVE_COINS'
export const ERROR_FETCHING_COINS = 'COINS/ERROR_FETCHING_COINS'
export const REQUEST_COIN_DETAILS = 'COINS/REQUEST_COIN_DETAILS'
export const RECEIVE_COIN_DETAILS = 'COINS/RECEIVE_COIN_DETAILS'
export const ERROR_FETCHING_COIN_DETAILS = 'COINS/ERROR_FETCHING_COIN'
export const REQUEST_COIN_ICON = 'COINS/REQUEST_COIN_ICON'
export const RECEIVE_COIN_ICON = 'COINS/RECEIVE_COIN_ICON'
export const ERROR_FETCHING_COIN_ICON = 'COINS/ERROR_FETCHING_COIN_ICON'

export default function reducer(state = {
  coinList: [],
  coinDetails: [],
  error: []
}, action) {
  switch (action.type) {
    case REQUEST_COIN_DETAILS:
      return {
        ...state,
        fetchingCoinDetails: true
      }
    case RECEIVE_COIN_DETAILS:
      return {
        ...state,
        coinDetails: action.coinDetails,
        fetchingCoinDetails: false
      }
    case REQUEST_COINS:
      return {
        ...state,
        fetchingCoins: true
      }
    case RECEIVE_COINS:
      return {
        ...state,
        coinList: action.coinList,
        receivedAt: action.receivedAt,
        fetchingCoins: false
      }
    case ERROR_FETCHING_COINS:
    case ERROR_FETCHING_COIN_DETAILS:
    case ERROR_FETCHING_COIN_ICON:
      return {
        ...state,
        error: action.error
      }
    default:
      return { ...state }
  }
}

export function fetchCoins() {
  return dispatch => {
    dispatch({ type: REQUEST_COINS })
    axios.get('https://api.coinmarketcap.com/v1/ticker/')
      .then(response => {
        dispatch(receiveCoins(response.data))
      })
      .catch(error => {
        dispatch(errorFetching(ERROR_FETCHING_COINS, error))
      })
  }
}

function receiveCoins(coinList) {
  return {
    type: RECEIVE_COINS,
    coinList,
    receivedAt: Date.now()
  }
}

export function fetchCoinDetails(name) {
  return dispatch => {
    dispatch({ type: REQUEST_COIN_DETAILS })
    axios.get(`https://api.coinmarketcap.com/v1/ticker/${name}/`)
      .then(response => {
        dispatch(receiveCoinDetails(response.data[0]))
      })
      .catch(error => {
        dispatch(errorFetching(ERROR_FETCHING_COIN_DETAILS, error))
      })
  }
}

function receiveCoinDetails(coinDetails) {
  return {
    type: RECEIVE_COIN_DETAILS,
    coinDetails,
    receivedAt: Date.now()
  }
}

export function fetchCoinIcon(coinSymbol) {
  return dispatch => {
    dispatch({ type: REQUEST_COIN_ICON })
    axios.get(`https://chasing-coins.com/api/v1/std/logo/${coinSymbol}`)
      .then(response => {
        console.log(response)
        dispatch(receiveCoinIcon(response))
      })
      .catch(error => {
        dispatch(errorFetching(ERROR_FETCHING_COIN_ICON, error))
      })
  }
}

function receiveCoinIcon(coinIcon) {
  return {
    type: RECEIVE_COIN_ICON,
    coinIcon
  }
}

function errorFetching(actionType, error) {
  return {
    type: actionType,
    error
  }
}