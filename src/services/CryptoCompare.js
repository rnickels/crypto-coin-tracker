import axios from 'axios'

const BASE_URL = ' https://min-api.cryptocompare.com/data'

const CoinMarketCapService = store => next => action => {
  next(action)
  switch (action.type) {
    case 'FETCH_COIN_LIST':
      getCoinList()
      break
    case 'FETCH_COIN_PRICES':
      getCoinPrices(action.coins)
      break
    default:
      break
  }
}

function getCoinList() {
  axios.get(BASE_URL + '/coinlist')
    .then(response => {
      return response
    })
    .catch(error => {
      throw Error('Error fetching CryptoCompare /coinlist:', error)
    })
}

function getCoinPrices(coins) {
  // const url = 
  axios.get(BASE_URL + '/price')
}