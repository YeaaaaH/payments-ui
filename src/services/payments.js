import axios from './axios'

const savePayment = (payload) => {
  return axios.post('v1/payment', payload)
}

const getPayments = () => {
  return axios.get('v1/payment')
}

export default {
  savePayment,
  getPayments
}