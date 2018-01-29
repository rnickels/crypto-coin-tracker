import axios from 'axios'

const BASE_URL = 'https://api.coinmarketcap.com/v1/'

const CoinMarketCapService = store => next => action => {
  next(action)
  switch (action.type) {
    case 'FETCH_CRYPTOS':
      getCryptos()
      break
    default:
      break
  }
}

function getCryptos() {
  axios.get('https://api.coinmarketcap.com/v1/ticker/')
    .then(response => {
      return response
    })
    .catch(error => {
      throw Error('Error fetching CoinMarketCap ticker:', error)
    })
}