import payments from "../../services/payments";

const state = {
  isPaymentsLoading: false,
  isPaymentSaving: false,
  reportLoading: false,
  payments: null,
  reportPayments: null,
  savePaymentErrors: null,
  getPaymentsErrors: null,
  reportErrors: null
}

const mutations = {
  getPaymentsStart(state) {
    state.isPaymentsLoading = true
    state.getPaymentsErrors = null
  },
  getPaymentsSuccess(state, payload) {
    state.isPaymentsLoading = false
    state.payments = payload
  },
  getPaymentsFailure(state, payload) {
    state.isPaymentsLoading = false
    state.payments = null
    state.getPaymentsErrors = payload
  },
  getReportStart(state) {
    state.reportLoading = true
    state.reportErrors = null
  },
  getReportSuccess(state, payload) {
    state.reportLoading = false
    state.reportPayments = payload
  },
  getReportFailure(state, payload) {
    state.reportLoading = false
    state.reportPayments = null
    state.reportErrors = payload
  },
  savingPaymentStart(state) {
    state.isPaymentSaving = true
    state.savePaymentErrors = null
  },
  savingPaymentSuccess(state) {
    state.isPaymentSaving = false
  },
  savingPaymentFailure(state, payload) {
    state.isPaymentSaving = false
    state.savePaymentErrors = payload
  },
}

const actions = {
  getListPayments(context, payload) {
    return new Promise(resolve => {
      context.commit('getPaymentsStart')
      payments
          .getListPayments(payload.userId, payload.year, payload.month)
          .then(response => {
            context.commit('getPaymentsSuccess', response.data)
            resolve(response.data)
          })
          .catch(result => {
            context.commit('getPaymentsFailure', result.response.data)
          })
    })
  },
  getReportPayments(context, payload) {
    return new Promise(resolve => {
      console.log("payments");

      context.commit('getReportStart')
      payments
          .getReportPayments(payload.userId, payload.year, payload.month)
          .then(response => {
            context.commit('getReportSuccess', response.data)
            resolve(response.data)
          })
          .catch(result => {
            context.commit('getReportFailure', result.response.data)
          })
    })
  },
  savePayment(context, payload) {
    return new Promise(resolve => {
      context.commit('savingPaymentStart')
      payments
          .savePayment(payload)
          .then(response => {
            context.commit('savingPaymentSuccess')
            resolve(response.data)
          })
          .catch(result => {
            context.commit('savingPaymentFailure', result.response.data.exceptions)
          })
    })
  }
}

export default ({
  state,
  mutations,
  actions
});