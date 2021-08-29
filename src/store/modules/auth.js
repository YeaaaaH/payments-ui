import auth from "../../services/auth";

const state = {
  isRegisterSubmitting: false,
  isLoginSubmitting: false,
  currentUser: null,
  validationErrors: null,
  isLoggedIn: null
}

const mutations = {
  registerStart(state) {
    state.isRegisterSubmitting = true
    state.validationErrors = null
  },
  registerSuccess(state) {
    state.isRegisterSubmitting = false
  },
  registerFailure(state, payload) {
    state.isRegisterSubmitting = false
    state.validationErrors = payload
  },
  loginStart(state) {
    state.isLoginSubmitting = true
    state.validationErrors = null
  },
  loginSuccess(state) {
    state.isLoginSubmitting = false
  },
  loginFailure(state, payload) {
    state.isLoginSubmitting = false
    state.validationErrors = payload
  }
}

const actions = {
  register(context, credentials) {
    return new Promise(resolve => {
      context.commit('registerStart')
      auth
        .register(credentials)
        .then(response => {
          context.commit('registerSuccess', response.data.user)
          resolve(response.data)
        })
        .catch(result => {
          context.commit('registerFailure', result.response.data.exceptions)
        })
    })
  },
  login(context, credentials) {
    return new Promise(resolve => {
      context.commit('loginStart')
      auth
        .login(credentials)
        .then(response => {
          context.commit('loginSuccess')
          window.localStorage.setItem('access_token', response.data.access_token)
          resolve(response.data)
        })
        .catch(result => {
          context.commit('loginFailure', result.response.data.exceptions)
        })
    })
  }
}

export default ({
  state,
  mutations,
  actions
});