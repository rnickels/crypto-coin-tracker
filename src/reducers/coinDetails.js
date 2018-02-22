export const INIT_COIN_HISTORY_SAGA = 'INIT_COIN_HISTORY_SAGA'
export const REQUEST_COIN_HISTORY = 'REQUEST_COIN_HISTORY'
export const SET_COIN_HISTORY = 'SET_COIN_HISTORY'

const initialState = {
  loadingCoinDetails: false,
  coinDetails: [],
}

const coinDetails = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_COIN_HISTORY:
      return {
        ...state,
        loadingCoinDetails: true,
      }
    case SET_COIN_HISTORY:
      return {
        ...state,
        coinDetails: action.coinDetails
      }
    default:
      return state
  }
}

export default coinDetails

export const getCoinHistory = (symbol, limit) => ({
  type: INIT_COIN_HISTORY_SAGA,
  coinSymbol: symbol,
  limit: limit,
})

export const requestCoinHistory = (symbol, limit) => ({
  type: REQUEST_COIN_HISTORY,
  coinSymbol: symbol,
  limit: limit,
})

export const setCoinHistory = (history) => ({
  type: SET_COIN_HISTORY,
  coinHistory: history
})