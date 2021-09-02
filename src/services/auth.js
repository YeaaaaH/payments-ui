import axios from './axios'

const register = credentials => {
  return axios.post('/auth/signup', credentials)
}

const getUser = () => {
  return axios.get('v1/user')
}

const login = (credentials) => {
  return axios({
    method: 'POST',
    url: '/auth/signin',
    data: encodedData(credentials),
    config
  })
}

const encodedData = (credentials) => {
  return Object.keys(credentials)
    .map((key) => `${key}=${encodeURIComponent(credentials[key])}`)
    .join('&');
}

const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}

export default {
  register,
  login,
  getUser
}