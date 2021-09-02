import axios from './axios'

const getCategories = () => {
  return axios.get('v1/category')
}

export default {
  getCategories
}