import axios from 'axios'

const BASE_URL = 'https://min-api.cryptocompare.com/data'

export const fetchCoinHistory = (symbol, limit) => (
  axios.get(`${BASE_URL}/histoday/`, {
    params: {
      fsym: symbol,
      tsym: 'USD',
      limit: limit
    }
  })
    .then(response => response)
    .catch(error => error)
)