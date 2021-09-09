import payments from "../../services/payments";

const state = {
  isPaymentsLoading: false,
  isPaymentSaving: false,
  payments: null,
  savePaymentErrors: null,
}

const mutations = {
  getPaymentsStart(state) {
    state.isPaymentsLoading = true
  },
  getPaymentsSuccess(state, payload) {
    state.isPaymentsLoading = false,
    state.payments = payload
  },
  getPaymentsFailure(state) {
    state.isPaymentsLoading = false
    state.payments = null
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
  getPayments(context) {
    return new Promise(resolve => {
      context.commit('getPaymentsStart')
      payments
        .getPayments()
        .then(response => {
          context.commit('getPaymentsSuccess', response.data.payments)
          resolve(response.data.payments)
        })
        .catch(() => {
          context.commit('getPaymentsFailure')
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
          console.log(result.response.data.exceptions)
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