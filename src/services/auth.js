import axios from './axios'

const register = credentials => {
  return axios.post('/auth/signup', credentials)
}

export default {
  register
}