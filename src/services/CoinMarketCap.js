import axios from 'axios'

const BASE_URL = 'https://api.coinmarketcap.com/v1'

export const fetchCoinList = () => (
  axios.get(`${BASE_URL}/ticker/`)
    .then(response => response.data)
    .catch(error => error)
)

// const handleErrors = (json) => {
//   // console.log('Error', json)
//   if (json.error) {
//     throw Error({ message: json.error.message, code: json.error.code })
//   }
//   return json
// }