import axios from 'axios'

const BASE_URL = 'https://chasing-coins.com/api/v1'

const ChasingCoinsService = store => next => action => {
  next(action)
  switch (action.type) {
    case 'FETCH_COINS':
      getAllCoins()
      break
    case 'FETCH_COIN_STATS':
      getCoinStats(action.coinSymbol)
      break
    case 'FETCH_COIN_LOGO':
      getCoinLogo(action.coinSymbol)
      break
    default:
      break
  }
}

function getAllCoins() {
  const url = `${BASE_URL}/coins`
  axios.get(url)
    .then(response => {
      console.log(response)
      return response
    })
    .catch(error => {
      throw Error(`Error fetching ${url}`)
    })
}

function getCoinStats(coinSymbol) {
  const url = `${BASE_URL}/std/coin/${coinSymbol}`
  axios.get(url)
    .then(response => {
      return response
    })
    .catch(error => {
      throw Error(`Error fetching ${url}`)
    })
}

function getCoinLogo(coinSymbol) {
  if (!coinSymbol) {
    return
  }
  const url = `${BASE_URL}/std/logo/${coinSymbol}`
  axios.get(url)
    .then(response => {
      return response
    })
    .catch(error => {
      throw Error(`Error fetching ${url}`)
    })
}

export default ChasingCoinsService