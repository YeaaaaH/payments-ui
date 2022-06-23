import axios from './axios'

const savePayment = (payload) => {
  return axios.post('v1/payment', payload)
}

const getListPayments = (userId, year, month) => {
  return axios.get('v1/payment/list/monthly' + '?userId=' + userId + '&year=' + year + '&month=' + month)
}

const getReportPayments = (userId, year, month) => {
  return axios.get('v1/payment/report/monthly' + '?userId=' + userId + '&year=' + year + '&month=' + month)
}

export default {
  savePayment,
  getListPayments,
  getReportPayments
}