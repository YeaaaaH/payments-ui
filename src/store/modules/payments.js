import payments from "../../services/payments";

const state = {
  isPaymentsLoading: false,
  isPaymentSaving: false,
  payments: null
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
  },
  savingPaymentSuccess(state) {
    state.isPaymentSaving = false
  },
  savingPaymentFailure(state) {
    state.isPaymentSaving = false
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
      context.commit('getPaymentsStart')
      payments
        .savePayment(payload)
        .then(response => {
          context.commit('getPaymentsSuccess')
          resolve(response.data)
        })
        .catch(() => {
          context.commit('getPaymentsFailure')
        })
    })
  }
}

export default ({
  state,
  mutations,
  actions
});