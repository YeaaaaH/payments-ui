import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8080/api/v1'

axios.interceptors.request.use(config => {
  const token = window.localStorage.getItem('access_token')
  const authToken = token ? `Bearer ${token}` : ''
  config.headers.Authorization = authToken
  return config
})

export default axios