import axios from 'axios'

const BASE_URL = 'http://localhost:8080/api'

export const authorizeUser = (user) => (
  axios.post(`${BASE_URL}/auth`, {
    email: user.email,
  })
    .then(response => response.data)
    .catch(error => error)
)

export const registerUser = (user) => (
  axios.post(`${BASE_URL}/register`, {
    email: user.email,
  })
    .then(response => response.data)
    .catch(error => error)
)